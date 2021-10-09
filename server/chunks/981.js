exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 4764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./utils/useToggle.ts

function useToggle(initalState = false) {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)(initalState);
  const toggle = (0,external_react_.useCallback)(() => setState(state => !state), []);
  return [state, toggle];
}
// EXTERNAL MODULE: ./components/header/Header.module.css
var Header_module = __webpack_require__(9053);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/header/index.tsx






const Header = props => {
  const [socialHidden, setSocialHidden] = useToggle();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (Header_module_default()).header,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      children: ["this is", ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (Header_module_default()).hideLinksBtn,
        onClick: setSocialHidden,
        children: "@joaovitorzv"
      }), ' ', "place on internet."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Home"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: socialHidden ? (Header_module_default()).externalLink : (Header_module_default()).hiddenLink,
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Header_module_default()).link,
          href: "https://www.github.com/joaovitorzv",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Github"
        }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
          fill: "#374151",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "14px",
          height: "18px",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: socialHidden ? (Header_module_default()).externalLink : (Header_module_default()).hiddenLink,
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Header_module_default()).link,
          href: "https://www.linkedin.com/in/jo%C3%A3o-vitor-veras-165045186/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "LinkedIn"
        }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
          fill: "#374151",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "14px",
          height: "18px",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const header = (Header);

/***/ }),

/***/ 9053:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__cwxka",
	"hideLinksBtn": "Header_hideLinksBtn__1mu8E",
	"externalLink": "Header_externalLink__1yu3I",
	"link": "Header_link__1GkhW",
	"hiddenLink": "Header_hiddenLink__2SCVW"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;