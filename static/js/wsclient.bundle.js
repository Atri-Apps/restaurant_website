/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@atrilabs/app-scripts/lib/shared/wsclient.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@atrilabs/app-scripts/lib/shared/wsclient.js ***!
  \*******************************************************************/
/***/ (() => {

eval("\nvar socket = new WebSocket(\"ws://\" + window.location.host);\n// Connection opened\nsocket.addEventListener(\"open\", function () {\n    socket.send(\"[wsclient] Connected with dev server.\");\n});\n// Listen for messages\nsocket.addEventListener(\"message\", function (event) {\n    if (event.data === \"reload\")\n        window.location.href = window.location.href;\n});\n//# sourceMappingURL=wsclient.js.map\n\n//# sourceURL=webpack://atri-react-app-template/./node_modules/@atrilabs/app-scripts/lib/shared/wsclient.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/@atrilabs/app-scripts/lib/shared/wsclient.js"]();
/******/ 	
/******/ })()
;