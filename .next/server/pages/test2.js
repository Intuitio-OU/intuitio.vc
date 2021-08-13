(function() {
var exports = {};
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 648:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ test2; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "react-scroll-to-top"
var external_react_scroll_to_top_namespaceObject = require("react-scroll-to-top");;
var external_react_scroll_to_top_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_to_top_namespaceObject);
;// CONCATENATED MODULE: ./pages/test2.js





const Test2 = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_to_top_default()), {
      smooth: true,
      component: "HEllo"
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Hello!"
    }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Scroll down for the button to appear"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      style: {
        marginTop: "150vh"
      },
      children: "bottom"
    })]
  });
};

/* harmony default export */ var test2 = (Test2);

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(648));
module.exports = __webpack_exports__;

})();