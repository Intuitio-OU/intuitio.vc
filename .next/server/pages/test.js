(function() {
var exports = {};
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 7878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ test; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-bootstrap"
var external_react_bootstrap_namespaceObject = require("react-bootstrap");;
;// CONCATENATED MODULE: ./pages/test.js






const Test = () => {
  const {
    0: activeDefault,
    1: setActiveDefault
  } = (0,external_react_.useState)(0);
  const defaultAccordion = [{
    title: "Accordion Header One",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "primary"
  }, {
    title: "Accordion Header Two",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "info"
  }, {
    title: "Accordion Header Three",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Accordion, {
      className: "dlab-accordion",
      id: "accordionFaq",
      defaultActiveKey: "0",
      children: defaultAccordion.map((d, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "card",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Accordion.Toggle, {
          as: external_react_bootstrap_namespaceObject.Card.Text,
          eventKey: `${i}`,
          className: "card-header",
          onClick: () => setActiveDefault(activeDefault === i ? -1 : i),
          children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
            className: "dlab-title",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: `${activeDefault === i ? "" : "collapsed"}`,
              onClick: () => setActiveDefault(activeDefault === i ? -1 : i),
              children: [" ", d.title]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "accordion__header--indicator"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Accordion.Collapse, {
          eventKey: `${i}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "card-body",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "m-b0",
              children: d.text
            })
          })
        })]
      }, i))
    })
  });
};

/* harmony default export */ var test = (Test);

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__(7878));
module.exports = __webpack_exports__;

})();