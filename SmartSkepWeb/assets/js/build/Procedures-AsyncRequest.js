"use strict";
(self["webpackChunksmartskepweb"] = self["webpackChunksmartskepweb"] || []).push([["Procedures-AsyncRequest"],{

/***/ "./assets/js/src/Procedures/AsyncRequest.js":
/*!**************************************************!*\
  !*** ./assets/js/src/Procedures/AsyncRequest.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncRequest: () => (/* binding */ AsyncRequest)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AsyncRequest = /*#__PURE__*/function () {
  function AsyncRequest(url, type, data) {
    var _this = this;
    var isAsync = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var onsuccess = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (data) {};
    var onerror = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (error) {};
    var cache = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
    var contentType = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'application/x-www-form-urlencoded; charset=UTF-8';
    var _headers = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};
    _classCallCheck(this, AsyncRequest);
    _defineProperty(this, "setHeaders", function () {
      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _this.headers = headers;
    });
    _defineProperty(this, "response", void 0);
    this.url = url;
    this.type = type;
    this.data = data;
    this.isAsync = isAsync;
    this.cache = cache;
    this.contentType = contentType;
    this.headers = _headers;
    this.onsuccess = function (handler) {
      onsuccess(handler);
    };
    this.onerror = function (handler) {
      onerror(handler);
    };
  }
  _createClass(AsyncRequest, [{
    key: "requestAjax",
    value: function requestAjax() {
      var _success = this.onsuccess;
      var _error = this.onerror;
      var status = '';
      var ajaxOptions = {
        url: this.url,
        type: this.type,
        data: this.data,
        async: this.isAsync,
        processData: this.cache,
        contentType: this.contentType,
        success: function success(handler) {
          _success(handler);
          status = handler;
        },
        error: function error(handler) {
          _error(handler);
          status = handler;
        }
      };
      if (Object.keys(this.headers).length > 0) {
        ajaxOptions.headers = this.headers;
      }
      $.ajax(ajaxOptions);
      this.response = status;
    }
  }]);
  return AsyncRequest;
}();

/***/ })

}]);
//# sourceMappingURL=Procedures-AsyncRequest.js.map