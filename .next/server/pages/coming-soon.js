(function() {
var exports = {};
exports.id = 169;
exports.ids = [169];
exports.modules = {

/***/ 5520:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ coming_soon; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "moment"
var external_moment_namespaceObject = require("moment");;
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: ./layout/header-2.js
var header_2 = __webpack_require__(6463);
;// CONCATENATED MODULE: ./pages/coming-soon.js







function ComingSoon() {
  const {
    0: days,
    1: setDays
  } = (0,external_react_.useState)(0);
  const {
    0: hours,
    1: setHours
  } = (0,external_react_.useState)(0);
  const {
    0: minutes,
    1: setMinutes
  } = (0,external_react_.useState)(0);
  const {
    0: seconds,
    1: setSeconds
  } = (0,external_react_.useState)(0);
  const {
    0: showSemicolon,
    1: setShowSemicolon
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setInterval(() => {
      const now = external_moment_default()();
      const then = external_moment_default()('2021-10-27 12:12:12', 'YYYY-MM-DD hh:mm:ss');
      const countdown = external_moment_default()(then - now);
      setDays(countdown.format('D'));
      setHours(countdown.format('HH'));
      setMinutes(countdown.format('mm'));
      setSeconds(countdown.format('ss'));
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(header_2/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "page-content bg-white",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "content-block",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "section-full bg-white coming-soon overlay-black-dark",
          style: {
            "backgroundImage": "url(images/background/bg2.jpg)",
            "backgroundSize": "cover"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "cs-logo",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "logo",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "images/logo-white.png",
                    alt: ""
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "cs-title",
                children: "Coming Soon"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "countdown text-center",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "date",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "time days",
                    children: days
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Days"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "date",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "time hours",
                    children: hours
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Hours"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "date",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "time mins",
                    children: minutes
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Minutess"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "date",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "time secs",
                    children: seconds
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Second"
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "countdown-social",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "mr-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://en-gb.facebook.com/",
                    className: "fa fa-facebook"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "mr-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://twitter.com/login?lang=en",
                    className: "fa fa-twitter"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "mr-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://www.linkedin.com/login",
                    className: "fa fa-linkedin"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "mr-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    className: "fa fa-google-plus"
                  })
                })]
              })]
            })
          })
        })
      })
    })]
  });
}

/* harmony default export */ var coming_soon = (ComingSoon);

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,463], function() { return __webpack_exec__(5520); });
module.exports = __webpack_exports__;

})();