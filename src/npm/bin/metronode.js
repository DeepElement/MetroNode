var path = require('path'),
	async = require('async'),
	fs = require('fs');

var _exportsInject = 'function a(e,t,n){var r=e,i=t.split("."),s;while(i.length>0){s=i.shift();if(!r[s]){if(i.length>0)r[s]={};else{r[s]=n}}r=r[s]}};';
var _processInject = 'window.process = window.process || {};window.process.env = window.process.env || {};function b(k,v) { window.process.env[k] = v;  };';

String.prototype.replaceAll = function(search, replace) {
    if (replace === undefined) {
        return this.toString();
    }
    return this.split(search).join(replace);
};

var _constructor = function (options) {
	this._sourceRoot = options.sourceRoot;
	if (!this._sourceRoot)
		throw new Error("sourceRoot required");
	
	this._sourceFiles = options.sourceFiles;

	if (!this._sourceFiles)
		throw new Error("sourceFiles required");

	this._env = options.env;

	if (!this._env)
		throw new Error("env required");

	this._packageRoot = options.packageRoot;

	if (!this._packageRoot)
		throw new Error("packageRoot required");

	this._envWhiteList = options.envWhiteList || [];
};

_constructor.prototype._generate = function (callback) {
	var that = this;
	var result = _exportsInject + "\n\n";
	result += _processInject + "\n\n";
	async.waterfall([
		function (done) {
			for (var envKey in that._env) {
				var isValid = that._envWhiteList.length > 0 ? false : true;
				if (!isValid && that._envWhiteList.indexOf(envKey) > -1)
					isValid = true;
				if (isValid)
					result += 'b(\'' + envKey + '\', \'' + escape(that._env[envKey]) + '\')\n';
			}
			result += "\n";
			return done();
		},
		function (done) {
			var packageDef = require(path.join(that._packageRoot, "package.json"));
			for (var depKey in packageDef.dependencies)
				result += 'exports["' + depKey + '"]=require("' + depKey + '");\n';
			result += "\n";
			return done();
		},
		function (done) {

			that._sourceFiles.forEach(function (item) {
				var relativeModulePath = path.relative(that._sourceRoot, item);
				var moduleApiKey = relativeModulePath.replaceAll(path.sep, '.').replaceAll('.node.js', '').replaceAll('.js', '');
				result += 'a(exports,\'' + moduleApiKey + '\', require(\'' + item.replaceAll('.node.js', '').replaceAll('.js', '').replace(/\//g,"\\\\") + '\')) \n';
			});
			result += "\n";
			
			return done();
		}
	],
		function (err) {
			if (err)
				return callback(err);
			return callback(null, result);
		});
};

_constructor.prototype.exportToFile = function (path, callback) {
	this._generate(function (err, content) {
		if (err)
			return callback(err);

		fs.writeFile(path, content, callback);
	});
};

_constructor.prototype.export = function (callback) {
	return this._generate(callback);
};

// export for profit
"object" === typeof exports ? module.exports = _constructor : "function" === typeof define && define.amd ? define(function () {
    return _constructor;
}) : this["node-metronode"] = _constructor;