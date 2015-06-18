var should = require('should'),
	path = require('path'),
	MetroNode = require('../bin/metronode'),
	glob = require('glob');

describe('integration tests', function () {
	var sourceRoot, env, packageRoot, sourceFiles;

	beforeEach(function (done) {
		var that = this;
		glob(__dirname + "/sample-src/**/*.js", function (err, files) {
			if (err)
				return done(err);

			sourceRoot = path.join(__dirname, "sample-src");
			env = process.env;
			packageRoot = path.join(__dirname, "..");
			sourceFiles = files;
			
			return done();
		});
	});


    describe('constructor', function () {
        it('Standard Success', function () {
			// arrange/act
			var instance = new MetroNode({
				sourceRoot: sourceRoot,
				env: env,
				packageRoot: packageRoot,
				sourceFiles: sourceFiles
			});
			
			// assert
			should.exist(instance);
        });
	});

	describe('export', function () {
        it('Standard Success', function (done) {
			// arrange
			var instance = new MetroNode({
				sourceRoot: sourceRoot,
				env: env,
				packageRoot: packageRoot,
				envWhiteList: ['NODE'],
				sourceFiles: sourceFiles
			});
			
			// act
			instance.export(function (err, content) {
				// assert
				should.not.exist(err);
				should.exist(content);
				
				return done();
			});
        });
	});
});