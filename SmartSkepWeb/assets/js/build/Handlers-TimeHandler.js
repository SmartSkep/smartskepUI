"use strict";
(self["webpackChunksmartskepweb"] = self["webpackChunksmartskepweb"] || []).push([["Handlers-TimeHandler"],{

/***/ "./assets/js/src/Handlers/TimeHandler.js":
/*!***********************************************!*\
  !*** ./assets/js/src/Handlers/TimeHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeHandler: () => (/* binding */ TimeHandler)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _Time = /*#__PURE__*/new WeakMap();
var _DefaultTimeString = /*#__PURE__*/new WeakMap();
var TimeHandler = /*#__PURE__*/_createClass(function TimeHandler() {
  var _this = this;
  var timestring = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _DefaultTimeString);
  _classCallCheck(this, TimeHandler);
  _classPrivateFieldInitSpec(this, _Time, {
    writable: true,
    value: {
      Hour: "",
      Minute: "",
      Second: ""
    }
  });
  _classPrivateFieldInitSpec(this, _DefaultTimeString, {
    writable: true,
    value: "00:00:00"
  });
  _defineProperty(this, "get12Hour", function () {
    var flag = "AM";
    var minute = _classPrivateFieldGet(_this, _Time).Minute;
    var hour = _classPrivateFieldGet(_this, _Time).Hour;
    if (parseInt(hour) <= 12) {
      hour = parseInt(hour);
    } else {
      hour = parseInt(hour) - 12;
      flag = "PM";
    }
    if (hour == 12) {
      flag = "PM";
    } else if (hour == 0) {
      hour = 12;
      flag = "AM";
    }
    return "".concat(hour, ":").concat(minute, " ").concat(flag);
  });
  _defineProperty(this, "get24Hour", function () {
    return "".concat(_classPrivateFieldGet(_this, _Time).Hour, " ").concat(_classPrivateFieldGet(_this, _Time).Minute);
  });
  if (timestring == "") timestring = _classPrivateFieldGet(this, _DefaultTimeString);
  var splittedString = timestring.split(":");
  _classPrivateFieldGet(this, _Time).Hour = splittedString[0];
  _classPrivateFieldGet(this, _Time).Minute = splittedString[1] || "00";
  _classPrivateFieldGet(this, _Time).Second = splittedString[2] || "00";
});

/***/ })

}]);
//# sourceMappingURL=Handlers-TimeHandler.js.map