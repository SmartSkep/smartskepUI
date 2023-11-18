"use strict";
(self["webpackChunksmartskepweb"] = self["webpackChunksmartskepweb"] || []).push([["assets_js_src_Controllers_Base_BaseController_js"],{

/***/ "./assets/js/src/Controllers/Base/BaseController.js":
/*!**********************************************************!*\
  !*** ./assets/js/src/Controllers/Base/BaseController.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseController: () => (/* binding */ BaseController)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var BaseController = /*#__PURE__*/_createClass(function BaseController() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  _classCallCheck(this, BaseController);
  title = title == "" ? this.constructor.name.replace("Controller", "") : title;
  document.querySelector("title").innerHTML = title;
});

/***/ })

}]);
//# sourceMappingURL=assets_js_src_Controllers_Base_BaseController_js.js.map