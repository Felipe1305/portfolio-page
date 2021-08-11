self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-normalize */ "./node_modules/styled-normalize/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["", ";*{box-sizing:border-box;margin:0;padding:0;background-color:'FBFBFB'}html{font-size:62.5%;scroll-behavior:smooth;}body{font-family:", ";font-size:1.6rem;background:", ";color:", ";cursor:default;}h1,h2,h3,h4,h5,h6,button{font-family:", ";}a{text-decoration:none;}li{list-style:none;}"], styled_normalize__WEBPACK_IMPORTED_MODULE_0__.normalize, function (props) {
  return props.theme.fonts.main;
}, function (props) {
  return props.theme.colors.background1;
}, function (props) {
  return props.theme.colors.primary1;
}, function (props) {
  return props.theme.fonts.title;
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/default */ "./src/themes/default.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/styles/globals.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Felipe\\Desktop\\react-projects\\portifolio\\portifolio_website\\src\\styles\\theme.js",
    _this = undefined;





var Theme = function Theme(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    theme: _themes_default__WEBPACK_IMPORTED_MODULE_1__.default,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, _this);
};

_c = Theme;
/* harmony default export */ __webpack_exports__["default"] = (Theme);

var _c;

$RefreshReg$(_c, "Theme");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/styled-normalize/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/styled-normalize/dist/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.Normalize = exports.normalize = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var normalize = (0, _styledComponents.css)(["html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}"]);
exports.normalize = normalize;
var Normalize = (0, _styledComponents.createGlobalStyle)(normalize);
exports.Normalize = Normalize;
var _default = normalize;
exports.default = _default;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLW5vcm1hbGl6ZS9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRzIiwibWFpbiIsImNvbG9ycyIsImJhY2tncm91bmQxIiwicHJpbWFyeTEiLCJ0aXRsZSIsIlRoZW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxvRUFBSCx1U0FDZEMsdURBRGMsRUFhQyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLElBQXRCO0FBQUEsQ0FiTixFQWVBLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsV0FBdkI7QUFBQSxDQWZMLEVBZ0JMLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkUsUUFBdkI7QUFBQSxDQWhCQSxFQW9CQyxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JLLEtBQXRCO0FBQUEsQ0FwQk4sQ0FBbEI7QUE4QkEsK0RBQWVWLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1XLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsc0JBQ1osOERBQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVSLG9EQUF0QjtBQUFBLDRCQUNFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHUSxRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBZDs7S0FBTUQsSztBQU9OLCtEQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1phOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGVBQWUsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUI7O0FBRXZELHdCQUF3QixtQkFBTyxDQUFDLGlHQUFtQjs7QUFFbkQsa0RBQWtELGlCQUFpQiwrQkFBK0IsS0FBSyxVQUFVLEtBQUssZUFBZSxHQUFHLGNBQWMsaUJBQWlCLEdBQUcsdUJBQXVCLFNBQVMsa0JBQWtCLElBQUksZ0NBQWdDLGVBQWUsRUFBRSw4QkFBOEIsWUFBWSxtQkFBbUIsMEJBQTBCLGtDQUFrQyxTQUFTLG9CQUFvQixjQUFjLGdDQUFnQyxlQUFlLE1BQU0sZUFBZSxRQUFRLGNBQWMsY0FBYyxrQkFBa0IseUJBQXlCLElBQUksZ0JBQWdCLElBQUksWUFBWSxJQUFJLG1CQUFtQixzQ0FBc0Msb0JBQW9CLGVBQWUsaUJBQWlCLFVBQVUsYUFBYSxrQkFBa0IsY0FBYyxxQkFBcUIsNERBQTRELDJCQUEyQixvSUFBb0ksa0JBQWtCLFdBQVcsd0hBQXdILCtCQUErQixTQUFTLCtCQUErQixPQUFPLHNCQUFzQixjQUFjLGNBQWMsZUFBZSxVQUFVLG9CQUFvQixTQUFTLHlCQUF5QixTQUFTLGVBQWUscUNBQXFDLHNCQUFzQixXQUFXLDBGQUEwRixhQUFhLGtCQUFrQiw2QkFBNkIscUJBQXFCLDZDQUE2Qyx5QkFBeUIsNkJBQTZCLDBCQUEwQixjQUFjLFFBQVEsZUFBZSxRQUFRLG1CQUFtQixTQUFTLGNBQWMsU0FBUyxjQUFjO0FBQzUxRCxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxlQUFlLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMWJhNDkzNWY2MWE1ZDk4ZTgzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ3N0eWxlZC1ub3JtYWxpemUnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgJHtub3JtYWxpemV9O1xyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnRkJGQkZCJ1xyXG4gIH1cclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5tYWlufTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZDF9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnkxfTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbiAgaDEsaDIsaDMsaDQsaDUsaDYsYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRzLnRpdGxlfTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7IiwiaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVzL2RlZmF1bHRcIjtcclxuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuY29uc3QgVGhlbWUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L1RoZW1lUHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuTm9ybWFsaXplID0gZXhwb3J0cy5ub3JtYWxpemUgPSB2b2lkIDA7XG5cbnZhciBfc3R5bGVkQ29tcG9uZW50cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTtcblxudmFyIG5vcm1hbGl6ZSA9ICgwLCBfc3R5bGVkQ29tcG9uZW50cy5jc3MpKFtcImh0bWx7bGluZS1oZWlnaHQ6MS4xNTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTt9Ym9keXttYXJnaW46MDt9bWFpbntkaXNwbGF5OmJsb2NrO31oMXtmb250LXNpemU6MmVtO21hcmdpbjowLjY3ZW0gMDt9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlO31wcmV7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtO31he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7fWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkO31iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXI7fWNvZGUsa2JkLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtO31zbWFsbHtmb250LXNpemU6ODAlO31zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt9c3Vie2JvdHRvbTotMC4yNWVtO31zdXB7dG9wOi0wLjVlbTt9aW1ne2JvcmRlci1zdHlsZTpub25lO31idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MDt9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGU7fWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZTt9YnV0dG9uLFt0eXBlPVxcXCJidXR0b25cXFwiXSxbdHlwZT1cXFwicmVzZXRcXFwiXSxbdHlwZT1cXFwic3VibWl0XFxcIl17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjt9YnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7cGFkZGluZzowO31idXR0b246LW1vei1mb2N1c3JpbmcsW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZ3tvdXRsaW5lOjFweCBkb3R0ZWQgQnV0dG9uVGV4dDt9ZmllbGRzZXR7cGFkZGluZzowLjM1ZW0gMC43NWVtIDAuNjI1ZW07fWxlZ2VuZHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3JtYWw7fXByb2dyZXNze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO310ZXh0YXJlYXtvdmVyZmxvdzphdXRvO31bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxbdHlwZT1cXFwicmFkaW9cXFwiXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowO31bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvO31bdHlwZT1cXFwic2VhcmNoXFxcIl17LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZDtvdXRsaW5lLW9mZnNldDotMnB4O31bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7fTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtmb250OmluaGVyaXQ7fWRldGFpbHN7ZGlzcGxheTpibG9jazt9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbTt9dGVtcGxhdGV7ZGlzcGxheTpub25lO31baGlkZGVuXXtkaXNwbGF5Om5vbmU7fVwiXSk7XG5leHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbnZhciBOb3JtYWxpemUgPSAoMCwgX3N0eWxlZENvbXBvbmVudHMuY3JlYXRlR2xvYmFsU3R5bGUpKG5vcm1hbGl6ZSk7XG5leHBvcnRzLk5vcm1hbGl6ZSA9IE5vcm1hbGl6ZTtcbnZhciBfZGVmYXVsdCA9IG5vcm1hbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=