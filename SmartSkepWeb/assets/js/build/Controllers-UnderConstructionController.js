"use strict";
(self["webpackChunksmartskepweb"] = self["webpackChunksmartskepweb"] || []).push([["Controllers-UnderConstructionController"],{

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

/***/ }),

/***/ "./assets/js/src/Controllers/UnderConstructionController.js":
/*!******************************************************************!*\
  !*** ./assets/js/src/Controllers/UnderConstructionController.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnderConstructionController: () => (/* binding */ UnderConstructionController)
/* harmony export */ });
/* harmony import */ var _Base_BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base/BaseController.js */ "./assets/js/src/Controllers/Base/BaseController.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _pageWrapper = /*#__PURE__*/new WeakMap();
var _implementCountdown = /*#__PURE__*/new WeakMap();
var _updateCountdown = /*#__PURE__*/new WeakMap();
var _formatTwoDigits = /*#__PURE__*/new WeakMap();
var _getEndDate = /*#__PURE__*/new WeakMap();
var UnderConstructionController = /*#__PURE__*/function (_BaseController) {
  _inherits(UnderConstructionController, _BaseController);
  var _super = _createSuper(UnderConstructionController);
  function UnderConstructionController() {
    var _this;
    _classCallCheck(this, UnderConstructionController);
    _this = _super.call(this, "Smart Skep");
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _pageWrapper, {
      writable: true,
      value: void 0
    });
    _defineProperty(_assertThisInitialized(_this), "Init", function () {
      _classPrivateFieldSet(_assertThisInitialized(_this), _pageWrapper, document.querySelector(".under-construction-page-wrapper"));
      _classPrivateFieldGet(_assertThisInitialized(_this), _implementCountdown).call(_assertThisInitialized(_this));
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _implementCountdown, {
      writable: true,
      value: function value() {
        setInterval(_classPrivateFieldGet(_assertThisInitialized(_this), _updateCountdown), 1000);
        _classPrivateFieldGet(_assertThisInitialized(_this), _updateCountdown).call(_assertThisInitialized(_this));
      }
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _updateCountdown, {
      writable: true,
      value: function value() {
        // Set the end date to December 14, 2023, 00:00:00 in West African Time (UTC+1)
        var endDate = new Date("December 14, 2023 00:00:00 GMT+0100");
        var now = new Date();
        var timeRemaining = endDate - now;
        var countDown = [0, 0, 0, 0];
        if (timeRemaining <= 0) {
          return;
        }
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(timeRemaining % (1000 * 60) / 1000);
        countDown = [days, hours, minutes, seconds];
        var countDownElements = _classPrivateFieldGet(_assertThisInitialized(_this), _pageWrapper).querySelectorAll(".count-down .count-down-number");
        countDownElements.forEach(function (element, index) {
          element.textContent = _classPrivateFieldGet(_assertThisInitialized(_this), _formatTwoDigits).call(_assertThisInitialized(_this), countDown[index]);
        });
      }
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _formatTwoDigits, {
      writable: true,
      value: function value(_value) {
        return _value < 10 ? '0' + _value : _value;
      }
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _getEndDate, {
      writable: true,
      value: function value() {
        var endDate = new Date("December 15, 2023 00:00:00 GMT+0100");
      }
    });
    return _this;
  }
  return _createClass(UnderConstructionController);
}(_Base_BaseController_js__WEBPACK_IMPORTED_MODULE_0__.BaseController);

/***/ })

}]);
//# sourceMappingURL=Controllers-UnderConstructionController.js.map