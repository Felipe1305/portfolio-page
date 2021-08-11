self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Span": function() { return /* binding */ Span; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-10xv3g0-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({
  displayName: "HeaderStyles__Span",
  componentId: "sc-10xv3g0-1"
})([""]);
var Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-10xv3g0-2"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-10xv3g0-3"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-10xv3g0-4"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], function (props) {
  return props.theme.breakpoints.sm;
}); // Navigation Links

var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-10xv3g0-5"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
}); /// DropDown Contact

var ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-10xv3g0-6"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
});
var NavProductsIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-10xv3g0-7"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? '1' : '.75';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'scaleY(-1)' : 'scaleY(1)';
}, function (props) {
  return props.theme.breakpoints.sm;
}); // Social Icons 

var SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-10xv3g0-8"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIlNwYW4iLCJEaXYxIiwiRGl2MiIsIkRpdjMiLCJOYXZMaW5rIiwiQ29udGFjdERyb3BEb3duIiwibWQiLCJOYXZQcm9kdWN0c0ljb24iLCJJb0lvc0Fycm93RHJvcGRvd24iLCJpc09wZW4iLCJTb2NpYWxJY29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsK1FBT1gsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUFcsQ0FBZjtBQWdCQSxJQUFNQyxJQUFJLEdBQUdMLHNFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVY7QUFFQSxJQUFNTSxJQUFJLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJIQUtOLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUxNLENBQVY7QUFTQSxJQUFNRyxJQUFJLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdIQUlOLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUpNLENBQVY7QUFRQSxJQUFNSSxJQUFJLEdBQUdSLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNKQUtOLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUxNLENBQVYsQyxDQVdQOztBQUNPLElBQU1LLE9BQU8sR0FBR1QsbUVBQUg7QUFBQTtBQUFBO0FBQUEsb0tBVVQsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBVlMsQ0FBYixDLENBZVA7O0FBQ08sSUFBTU0sZUFBZSxHQUFHVix3RUFBSDtBQUFBO0FBQUE7QUFBQSxzUUFnQmpCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQWhCaUIsRUFtQmpCLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QlEsRUFBbkM7QUFBQSxDQW5CaUIsQ0FBckI7QUF3QkEsSUFBTUMsZUFBZSxHQUFHWiwwREFBTSxDQUFDYSw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHVLQUtmO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyxHQUFILEdBQVMsS0FBaEM7QUFBQSxDQUxlLEVBTWI7QUFBQSxNQUFHQSxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxHQUFHLFlBQUgsR0FBa0IsV0FBekM7QUFBQSxDQU5hLEVBVWpCLFVBQUNiLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVZpQixDQUFyQixDLENBaUJQOztBQUVPLElBQU1XLFdBQVcsR0FBR2YsbUVBQUg7QUFBQTtBQUFBO0FBQUEsOElBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkMDY0YmUwNWZjYzhmY2RhMjlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJb0lvc0Fycm93RHJvcGRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNjBweCk7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICAgIGdyaWQtcm93LWdhcDogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEaXYxID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIExpbmtzXHJcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vLyBEcm9wRG93biBDb250YWN0XHJcbmV4cG9ydCBjb25zdCBDb250YWN0RHJvcERvd24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2UHJvZHVjdHNJY29uID0gc3R5bGVkKElvSW9zQXJyb3dEcm9wZG93bilgXHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgb3BhY2l0eTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICcxJyA6ICcuNzUnKX07XHJcbiAgdHJhbnNmb3JtOiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJ3NjYWxlWSgtMSknIDogJ3NjYWxlWSgxKScpfTtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbjogMnB4IDAgMCAycHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuLy8gU29jaWFsIEljb25zIFxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbEljb25zID0gc3R5bGVkLmFgXHJcbnRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgfVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==