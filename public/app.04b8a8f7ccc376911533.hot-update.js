"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateportfolio_pro"]("app",{

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var loaders_css_loaders_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loaders.css/loaders.min.css */ \"./node_modules/loaders.css/loaders.min.css\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ \"./src/javascript/validation.js\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_validation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _calc_numbers_valid_inupt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calc_numbers_valid_inupt */ \"./src/javascript/calc_numbers_valid_inupt.js\");\n/* harmony import */ var _calc_numbers_valid_inupt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calc_numbers_valid_inupt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _remove_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove_inspect */ \"./src/javascript/remove_inspect.js\");\n/* harmony import */ var _remove_inspect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_remove_inspect__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\naos__WEBPACK_IMPORTED_MODULE_10___default().init({ easing: \"linear\", duration: 500 });\r\n\r\nlet nav_links = document.querySelectorAll(\".navbar ul li a\");\r\nnav_links.forEach((link) => {\r\n  link.onclick = function () {\r\n    nav_links.forEach((link) => {\r\n      link.classList.remove(\"active\");\r\n    }),\r\n      this.classList.add(\"active\");\r\n  };\r\n});\r\n\r\nvar lis = document.querySelectorAll(\".front-back li\");\r\nlis.forEach(function (s) {\r\n  s.onclick = function () {\r\n    lis.forEach(function (s) {\r\n      s.classList.remove(\"active\");\r\n    }),\r\n      this.classList.add(\"active\");\r\n    let s = document.querySelector(\".skills .container\");\r\n    \"FRONT\" === this.innerText\r\n      ? (s.innerHTML = `\r\n      <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>HTML</h4>\r\n            <p>100%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"100%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>CSS & <span>S</span>CSS</h4>\r\n            <p>94%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"94%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>JAVASCRIPT & <span>R</span>EACT</h4>\r\n            <p>90%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"90%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>BOOTSTRAP</h4>\r\n            <p>98%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"98%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>NPM & <span>W</span>EBPACK</h4>\r\n            <p>97%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"97%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>GIT & <span>G</span>ITHUB</h4>\r\n            <p>94%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"94%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      `)\r\n      : \"BACK\" === this.innerText &&\r\n        (s.innerHTML = `\r\n      <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>NODE <span>J</span>S</h4>\r\n            <p>88%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"88%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>EXPRESS & <span>J</span>WT</h4>\r\n            <p>94%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"94%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>MONGODB</h4>\r\n            <p>90%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"90%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>API</h4>\r\n            <p>98%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"98%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"skill\">\r\n          <div class=\"skills-header\">\r\n            <h4>NPM</h4>\r\n            <p>98%</p>\r\n          </div>\r\n          <div class=\"skill-bar\">\r\n            <span data-val=\"98%\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      `);\r\n    let l = document.querySelectorAll(\".skill-bar span\");\r\n    setTimeout(() => {\r\n      l.forEach((s) => {\r\n        s.style.width = s.dataset.val;\r\n      });\r\n    }, 100);\r\n  };\r\n});\r\nlet skillsSpans = document.querySelectorAll(\".skill-bar span\");\r\nsetInterval(() => {\r\n  window.scrollY >= 2700 &&\r\n    skillsSpans.forEach((s) => {\r\n      s.style.width = s.dataset.val;\r\n    });\r\n}, 1);\r\nlet toggle_mode = document.querySelector(\".toggle-mode\");\r\nvar mode_status = !1;\r\ntoggle_mode.addEventListener(\"click\", function (s) {\r\n  mode_status\r\n    ? mode_status &&\r\n      (document.body.classList.add(\"light\"),\r\n      document.body.classList.remove(\"dark\"),\r\n      (toggle_mode.innerHTML = '<i class=\"fa-solid fa-cloud-sun\"></i>'),\r\n      (mode_status = !1))\r\n    : (document.body.classList.add(\"dark\"),\r\n      document.body.classList.remove(\"light\"),\r\n      (toggle_mode.innerHTML = '<i class=\"fa-regular fa-moon\"></i>'),\r\n      (mode_status = !0));\r\n});\r\nlet work_filtered_list_btns = document.querySelectorAll(\"#work-filter li\");\r\nlet work_cards = document.querySelectorAll(\"#work .container .row .col-sm-12\");\r\n\r\nfor (var i = 0; i < work_filtered_list_btns.length; i++) {\r\n  work_filtered_list_btns[i].addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    const filter = e.target.dataset.filter;\r\n    console.log(filter);\r\n    work_cards.forEach((work_card) => {\r\n      if (filter == \"all\") {\r\n        work_card.style.display = \"block\";\r\n      } else {\r\n        if (work_card.classList.contains(filter)) {\r\n          work_card.style.display = \"block\";\r\n        } else {\r\n          work_card.style.display = \"none\";\r\n        }\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nArray.from(work_filtered_list_btns).forEach((btn) => {\r\n  btn.onclick = function () {\r\n    Array.from(work_filtered_list_btns).forEach((btn) => {\r\n      btn.classList.remove(\"active\");\r\n    });\r\n    this.classList.add(\"active\");\r\n  };\r\n});\r\n\r\nlet ghButton = document.querySelector(\".see-more\");\r\nghButton.onclick = function () {\r\n  window.location.href = \"http://github.com/mohamed-montaser1/\";\r\n};\r\n\r\nlet year = document.querySelector(\"footer p\");\r\nyear.innerHTML = `COPYRIGHT&copy; MOHAMED MONTASER ${new Date().getFullYear()}. All rights\r\nreserved`;\r\n\r\nlet layer = document.querySelector(\".overview-layer-navbarnav\"),\r\n  navbar_toggler = document.querySelector(\".navbar .navbar-toggler\");\r\nnavbar_toggler.addEventListener(\"click\", (s) => {\r\n  (layer.style.display = \"block\"),\r\n    setTimeout(() => {\r\n      layer.style.opacity = \"0.3\";\r\n    }, 10),\r\n    (document.querySelector(\".navbar .navbar-nav\").style.right = \"0\"),\r\n    (document.querySelector(\"html\").style.overflowY = \"hidden\");\r\n}),\r\n  (document.body.onclick = function (s) {\r\n    s.target.classList.contains(\"overview-layer-navbarnav\") &&\r\n      ((document.querySelector(\".navbar .navbar-nav\").style.right = \"-13rem\"),\r\n      (layer.style.opacity = \"0\"),\r\n      setTimeout(() => {\r\n        layer.style.display = \"none\";\r\n      }, 100),\r\n      (document.querySelector(\"html\").style.overflowY = \"visible\"));\r\n  });\r\n\r\nlet navbar_links = Array.from(document.querySelectorAll(\".navbar-nav li a\"));\r\n\r\nnavbar_links.forEach((link) => {\r\n  link.addEventListener(\"click\", (e) => {\r\n    if (window.innerWidth < 991) {\r\n      let layer = document.querySelector(\".overview-layer-navbarnav\");\r\n      layer.click();\r\n    }\r\n  });\r\n});\r\n\r\nlet to_top_button = document.querySelector(\".arrow-top\");\r\n\r\nto_top_button.addEventListener(\"click\", (e) => {\r\n  window.scrollTo(0, 0);\r\n});\r\n\r\nwindow.onscroll = function () {\r\n  if (window.scrollY >= 1100) {\r\n    to_top_button.style.right = \"10px\";\r\n  } else {\r\n    to_top_button.style.right = \"-77px\";\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://portfolio-pro/./src/javascript/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("be1f64de5378632750be")
/******/ })();
/******/ 
/******/ }
);