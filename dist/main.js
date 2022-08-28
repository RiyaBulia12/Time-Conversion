/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktime_conversion"] = self["webpackChunktime_conversion"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const p = document.getElementById('date')\n\nconst date = new Date();\nconst local_date = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),\n   date.getUTCDate()));\nconst local_time = Date.UTC(date.getUTCHours(),\n   date.getUTCMinutes(), date.getUTCSeconds());\n\nconst fullDate = `${date.getUTCDay().toString()} ${date.getUTCDate()} ${date.getUTCMonth()}, ${date.getUTCFullYear()}`\n\n\n\n//# sourceURL=webpack://time-conversion/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);