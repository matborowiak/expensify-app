/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module '@babel/core'\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:582:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:508:25)\\n    at Module.require (internal/modules/cjs/loader.js:637:17)\\n    at require (internal/modules/cjs/helpers.js:22:18)\\n    at _core (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\@babel\\\\plugin-proposal-object-rest-spread\\\\lib\\\\index.js:29:16)\\n    at ZERO_REFS (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\@babel\\\\plugin-proposal-object-rest-spread\\\\lib\\\\index.js:41:16)\\n    at Object.<anonymous> (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\@babel\\\\plugin-proposal-object-rest-spread\\\\lib\\\\index.js:48:3)\\n    at Module._compile (internal/modules/cjs/loader.js:701:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)\\n    at Module.load (internal/modules/cjs/loader.js:600:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:531:3)\\n    at Module.require (internal/modules/cjs/loader.js:637:17)\\n    at require (internal/modules/cjs/helpers.js:22:18)\\n    at C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:178:20\\n    at Array.map (<anonymous>)\\n    at Function.normalisePlugins (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:158:20)\\n    at OptionManager.mergeOptions (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:234:36)\\n    at OptionManager.init (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:368:12)\\n    at File.initOptions (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:212:65)\\n    at new File (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:135:24)\\n    at Pipeline.transform (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\pipeline.js:46:16)\\n    at transpile (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:49:20)\\n    at Object.module.exports (C:\\\\Users\\\\Mateusz Borowiak\\\\Desktop\\\\JS-Bootcamp\\\\react-course-projects\\\\expensify-app\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:174:20)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);