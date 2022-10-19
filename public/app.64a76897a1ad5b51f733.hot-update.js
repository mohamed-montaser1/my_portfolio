/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateportfolio_pro"]("app",{

/***/ "./src/javascript/validation.js":
/*!**************************************!*\
  !*** ./src/javascript/validation.js ***!
  \**************************************/
/***/ (() => {

eval("let email_input = document.querySelector(\"#email-input\");\r\nlet submit = document.querySelector(\"#submit\");\r\nlet name_input = document.querySelector(\"#name\");\r\nlet textarea = document.querySelector(\"form textarea\");\r\n\r\nsubmit.addEventListener(\"click\", (e) => {\r\n  if (!email_input.value) {\r\n    alert(\"you must fillout the email input!\");\r\n    return;\r\n  }\r\n  if (email_input.value.split(\"\").slice(-4).join(\"\") == \".com\") {\r\n    alert(\"you forget to add '.com' in the end of the email input!\");\r\n    return;\r\n  }\r\n  if (name_input.value.split(\"\").length > 7) {\r\n    alert(\"you must type longer name!\");\r\n    return;\r\n  }\r\n  console.log(name_input);\r\n});\r\n\r\n\r\nemail_input.oninput = function() {\r\n  \r\n}\n\n//# sourceURL=webpack://portfolio-pro/./src/javascript/validation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c8733d1809483927f04")
/******/ })();
/******/ 
/******/ }
);