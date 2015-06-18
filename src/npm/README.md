#MetroNode

Static API generator for CommonJS source projects

============ 

This module generates an entry module for CommonJS projects that can be compiled by Browserify.
The goal is to offer an easier bridge between CommonJS and a non-node runtime (Browsers, RT, WinCore, AppleTV, etc)

Features:

- Scaffolds source root and builds global CommonJS apis
- Supports Environmental variable injection (with WhiteList for safety)
- Automatically exposes global apis for NPM development dependencies 

#Usage

	`npm install metronode --save`

In the module:

	// Given that CommonJS project is structured as follows:
	// (root)
	// 	-src
	// 		-main.js
	// 		-app.js
	// 	package.json
	
	var MetroNode = require('metronode');
	var path = require('path');
	
	var instance = new MetroNode({
		sourceRoot: path.join(__dirname, 'src'),
		env: process.env,
		packageRoot: __dirname,
		sourceFiles: [
			path.join(__dirname, 'src', 'main.js'),
			path.join(__dirname, 'src', 'app.js')
		]
	});
	
#Warning: ENV dictionary will be exported as-is. 
This can cause security issues if you are storing secrets in `env` values. 
To avoid, use the `envWhiteList` constructor argument to limit.

	// Given that CommonJS project is structured as follows:
	// (root)
	// 	-src
	// 		-main.js
	// 		-app.js
	// 	package.json
	
	var MetroNode = require('metronode');
	var path = require('path');
	
	var instance = new MetroNode({
		sourceRoot: path.join(__dirname, 'src'),
		env: process.env,
		packageRoot: __dirname,
		sourceFiles: [
			path.join(__dirname, 'src', 'main.js'),
			path.join(__dirname, 'src', 'app.js')
		],
		envWhiteList: ['MySpecialKeyOnly']
	});
	