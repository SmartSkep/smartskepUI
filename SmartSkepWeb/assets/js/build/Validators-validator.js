"use strict";
(self["webpackChunksmartskepweb"] = self["webpackChunksmartskepweb"] || []).push([["Validators-validator"],{

/***/ "./assets/js/src/Validators/validator.js":
/*!***********************************************!*\
  !*** ./assets/js/src/Validators/validator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validator: () => (/* binding */ Validator)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Validator = /*#__PURE__*/function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }
  _createClass(Validator, null, [{
    key: "checkEmptyFields",
    value: function checkEmptyFields(fields) {
      var isAnyEmpty = false;
      var emptyFeilds = [];
      for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == "") {
          emptyFeilds.push(fields[i]);
          isAnyEmpty = true;
        }
      }
      var result = {
        isAnyEmpty: isAnyEmpty,
        EmptyFeilds: emptyFeilds
      };
      return result;
    }
  }, {
    key: "validatePin",
    value: function validatePin(pin) {
      var regex = /( *?[0-9] *?){6}/;
      return regex.test(pin);
    }
  }, {
    key: "checkEmailValid",
    value: function checkEmailValid(email) {
      var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return regex.test(email);
    }
  }, {
    key: "applyNumbericValidation",
    value: function applyNumbericValidation(evt) {
      var theEvent = evt || window.event;

      // Handle paste
      if (theEvent.type === "paste") {
        key = evt.clipboardData.getData("text/plain");
      } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        if (theEvent.key == ".") key = theEvent.key;
      }
      var regex = /[0-9]|\./;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    }
  }, {
    key: "applyPinValidation",
    value: function applyPinValidation(e, element) {
      this.applyNumbericValidation(e);
      if (element.value.length == 6) e.preventDefault();
      var regex = /[0-9]/;
      if (!regex.test(e.key)) e.preventDefault();
    }
  }, {
    key: "applyNameValidation",
    value: function applyNameValidation(e) {
      var regex = /^[a-zA-Z]+$/;
      if (!regex.test(e.key)) {
        e.preventDefault();
      }
    }
  }, {
    key: "applyUsernameValidation",
    value: function applyUsernameValidation(e) {
      var regex = /^[0-9]|[a-zA-Z]+$/;
      if (!regex.test(e.key)) {
        e.preventDefault();
      }
    }
  }, {
    key: "validateUsername",
    value: function validateUsername(e) {
      var regex = /^[0-9]|[a-zA-Z]+$/;
      return regex.test(e);
    }
  }, {
    key: "applyPhoneValidation",
    value: function applyPhoneValidation(e, element) {
      var regex = /[0-9]/;
      if (!regex.test(e.key)) e.preventDefault();
      if (element.value.length === 11) e.preventDefault();
    }
  }]);
  return Validator;
}();

/***/ })

}]);
//# sourceMappingURL=Validators-validator.js.map