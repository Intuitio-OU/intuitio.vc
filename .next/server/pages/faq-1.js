(function() {
var exports = {};
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 5326:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ faq_1; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./element/accordion.js





function Accordion1() {
  const {
    0: activeDefault,
    1: setActiveDefault
  } = (0,external_react_.useState)(0);
  const defaultAccordion = [{
    title: "Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor ?",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "primary"
  }, {
    title: "Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus ?",
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "info"
  }, {
    title: "Proin blandit sed arcu sed ultricies ?",
    text: "Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }, {
    title: "Proin cursus massa ipsum, at lacinia erat elementum sit amet ?",
    text: "Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }, {
    title: "Quisque sem tortor, convallis in arcu eu, accumsan finibus massa ?",
    text: "Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }, {
    title: "Aenean vel euismod risus, ac congue lectus ?",
    text: "Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dlab-accordion",
      id: "accordionFaq",
      defaultActiveKey: "0",
      children: defaultAccordion.map((d, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "card",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          eventKey: `${i}`,
          className: "card-header",
          onClick: () => setActiveDefault(activeDefault === i ? -1 : i),
          children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
            className: "dlab-title",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "javascript:void(0);",
              className: `${activeDefault === i ? "" : "collapsed"}`,
              onClick: () => setActiveDefault(activeDefault === i ? -1 : i),
              children: [" ", d.title]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${activeDefault === i ? "collapsed show" : "collapsed"}`,
          eventKey: `${i}`,
          onClick: () => setActiveDefault(activeDefault === i ? -1 : i),
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
}

/* harmony default export */ var accordion = (Accordion1);
// EXTERNAL MODULE: ./layout/footer.js
var footer = __webpack_require__(5069);
// EXTERNAL MODULE: ./layout/header-3.js
var header_3 = __webpack_require__(7676);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./pages/faq-1.js








function FAQ1() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(header_3/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "page-content bg-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "dlab-bnr-inr overlay-primary-dark",
        style: {
          "backgroundImage": "url(images/banner/bnr1.jpg)"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dlab-bnr-inr-entry",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Faq"
            }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
              "aria-label": "breadcrumb",
              className: "breadcrumb-row",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "breadcrumb",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "breadcrumb-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Home"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "breadcrumb-item active",
                  "aria-current": "page",
                  children: "Faq"
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "content-inner",
        style: {
          "backgroundImage": "url(images/background/bg1.png)"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-8 m-auto wow fadeIn",
              "data-wow-duration": "2s",
              "data-wow-delay": "0.2s",
              children: /*#__PURE__*/jsx_runtime_.jsx(accordion, {})
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        style: {
          "backgroundImage": "url(images/background/bg5.jpg)",
          "backgroundSize": "100%"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row action-box style-1 align-items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-7 col-lg-8 col-md-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "section-head style-1",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  className: "sub-title bgl-primary m-b20 text-primary",
                  children: "More With Us"
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "title",
                  children: "You Want To Showcase Your Website In Top Join With Us"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-5 col-lg-4 col-md-4 text-right m-b30",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "/contact-us-1",
                className: "btn btn-link d-inline-flex align-items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fa fa-angle-right m-r10"
                }), "Join Now"]
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
}

/* harmony default export */ var faq_1 = (FAQ1);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,626,676], function() { return __webpack_exec__(5326); });
module.exports = __webpack_exports__;

})();