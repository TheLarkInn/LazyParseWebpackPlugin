/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

throw new Error("Module parse failed: /Users/req88847/Code/V8LazyParseWebpackPlugin/test/src/second.js result.isIdentifier is not a function\nYou may need an appropriate loader to handle this file type.\nTypeError: result.isIdentifier is not a function\n    at Parser.getRenameIdentifier (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:348:12)\n    at Parser.walkAssignmentExpression (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:730:30)\n    at Parser.walkExpression (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:650:40)\n    at Parser.walkExpressionStatement (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:401:7)\n    at Parser.walkStatement (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:392:32)\n    at Parser.<anonymous> (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:377:9)\n    at Array.forEach (native)\n    at Parser.walkStatements (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:375:13)\n    at Parser.parse (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:1081:8)\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/NormalModule.js:199:17\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/NormalModule.js:164:10\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/loader-runner/lib/LoaderRunner.js:365:3\n    at iterateNormalLoaders (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/loader-runner/lib/LoaderRunner.js:206:10)\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/loader-runner/lib/LoaderRunner.js:197:4\n    at Storage.finished (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:39:16)\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/graceful-fs/graceful-fs.js:78:16\n    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:445:3)");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

throw new Err__webpack_require__u0ed: /Users/req88847/Code/V8LazyParseWebpackPlugin/test/src/entry.js result.isIdentifier is not a function\nYou may need an appropriate loader to handle this file type.\nTypeError: result.isIdentifier is not a function\n    at Parser.getRenameIdentifier (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:348:12)\n    at Parser.<anonymous> (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:618:52)\n    at Array.forEach (native)\n    at Parser.walkVariableDeclarators (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:615:14)\n    at Parser.walkVariableDeclaration (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:589:8)\n    at Parser.walkStatement (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:392:32)\n    at Parser.<anonymous> (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:377:9)\n    at Array.forEach (native)\n    at Parser.walkStatements (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:375:13)\n    at Parser.parse (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/Parser.js:1081:8)\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/NormalModule.js:199:17\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/webpack/lib/NormalModule.js:164:10\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/loader-runner/lib/LoaderRunner.js:365:3\n    at iterateNormalLoaders (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/loader-runner/lib/LoaderRunner.js:206:10)\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/loader-runner/lib/LoaderRunner.js:197:4\n    at Storage.finished (/Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:39:16)\n    at /Users/req88847/Code/V8LazyParseWebpackPlugin/node_modules/graceful-fs/graceful-fs.js:78:16\n    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:445:3)");

/***/ })
/******/ ]);