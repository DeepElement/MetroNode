var should = require('should'),
	path = require('path'),
	MetroNode = require('../bin/metronode');

describe('integration tests', function () {
	var sourceRoot = path.join(__dirname, "sample-src");
	var env = process.env;
	var packageRoot = path.join(__dirname, "..");

    describe('constructor', function () {
        it('Standard Success', function () {
			// arrange/act
			var instance = new MetroNode({
				sourceRoot: sourceRoot,
				env: env,
				packageRoot: packageRoot
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
				envWhiteList: ['NODE']
			});
			
			// act
			instance.export(function(err, content){
				// assert
				should.not.exist(err);
				should.exist(content);
				
				return done();
			});
        });
	});
});