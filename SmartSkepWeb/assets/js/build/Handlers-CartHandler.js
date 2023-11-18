"use strict";
(self["webpackChunksmartskepweb"] = self["webpackChunksmartskepweb"] || []).push([["Handlers-CartHandler"],{

/***/ "./assets/js/src/Handlers/CartHandler.js":
/*!***********************************************!*\
  !*** ./assets/js/src/Handlers/CartHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartHandler: () => (/* binding */ CartHandler)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../node_modules/country-state-city/lib/index.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _cartItems = /*#__PURE__*/new WeakMap();
var _cartQuantity = /*#__PURE__*/new WeakMap();
var _cartItem = /*#__PURE__*/new WeakMap();
var _getLocalStorageJSON = /*#__PURE__*/new WeakSet();
var _getLocalStorage = /*#__PURE__*/new WeakSet();
var _setLocalStorageJSON = /*#__PURE__*/new WeakSet();
var _setLocalStorage = /*#__PURE__*/new WeakSet();
var _addToCart = /*#__PURE__*/new WeakMap();
var _checkCartEmpty = /*#__PURE__*/new WeakMap();
var _checkIfItemExist = /*#__PURE__*/new WeakMap();
var CartHandler = /*#__PURE__*/function () {
  function CartHandler() {
    var _this = this;
    _classCallCheck(this, CartHandler);
    _classPrivateMethodInitSpec(this, _setLocalStorage);
    _classPrivateMethodInitSpec(this, _setLocalStorageJSON);
    _classPrivateMethodInitSpec(this, _getLocalStorage);
    _classPrivateMethodInitSpec(this, _getLocalStorageJSON);
    _classPrivateFieldInitSpec(this, _cartItems, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _cartQuantity, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _cartItem, {
      writable: true,
      value: {
        id: 0,
        tite: "",
        category_id: 0,
        price: 0,
        category_image: "",
        quantity: 1,
        discount_rate: 0.0,
        is_active: "1"
      }
    });
    _defineProperty(this, "GetCart", function () {
      return _classPrivateFieldGet(_this, _cartItems);
    });
    _defineProperty(this, "GetCartSize", function () {
      return _classPrivateFieldGet(_this, _cartQuantity);
    });
    _defineProperty(this, "AddToCart", function (newItem) {
      if (_classPrivateFieldGet(_this, _checkCartEmpty).call(_this)) {
        _classPrivateFieldGet(_this, _addToCart).call(_this, newItem);
        return 1;
      }
      if (_classPrivateFieldGet(_this, _checkIfItemExist).call(_this, newItem)) {
        return -1;
      }
      _classPrivateFieldGet(_this, _addToCart).call(_this, newItem);
      return 1;
    });
    _defineProperty(this, "DeleteItem", function (id) {
      var isFound = _classPrivateFieldGet(_this, _checkIfItemExist).call(_this);
      if (isFound) {
        _classPrivateFieldGet(_this, _cartItems).filter(function (item) {
          return item.id == id;
        });
        _classPrivateMethodGet(_this, _setLocalStorageJSON, _setLocalStorageJSON2).call(_this, "currentCart", _classPrivateFieldGet(_this, _cartItems));
        _classPrivateFieldSet(_this, _cartQuantity, _classPrivateFieldGet(_this, _cartItems).length);
        _classPrivateMethodGet(_this, _setLocalStorage, _setLocalStorage2).call(_this, "qtyCart", _classPrivateFieldGet(_this, _cartQuantity));
        return 1;
      }
      return -1;
    });
    _classPrivateFieldInitSpec(this, _addToCart, {
      writable: true,
      value: function value(newItem) {
        _classPrivateFieldGet(_this, _cartItems).push(newItem);
        _classPrivateMethodGet(_this, _setLocalStorageJSON, _setLocalStorageJSON2).call(_this, "currentCart", _classPrivateFieldGet(_this, _cartItems));
        _classPrivateFieldSet(_this, _cartQuantity, _classPrivateFieldGet(_this, _cartItems).length);
        _classPrivateMethodGet(_this, _setLocalStorage, _setLocalStorage2).call(_this, "qtyCart", _classPrivateFieldGet(_this, _cartQuantity));
      }
    });
    _classPrivateFieldInitSpec(this, _checkCartEmpty, {
      writable: true,
      value: function value() {
        var isEmpty = false;
        if (_classPrivateFieldGet(_this, _cartQuantity) == 0) {
          isEmpty = true;
        }
        return isEmpty;
      }
    });
    _classPrivateFieldInitSpec(this, _checkIfItemExist, {
      writable: true,
      value: function value(newItem) {
        return _classPrivateFieldGet(_this, _cartItems).some(function (item) {
          return item.id === newItem.id;
        });
      }
    });
    _classPrivateFieldSet(this, _cartItems, _classPrivateMethodGet(this, _getLocalStorageJSON, _getLocalStorageJSON2).call(this, "currentCart"));
    _classPrivateFieldSet(this, _cartQuantity, _classPrivateMethodGet(this, _getLocalStorage, _getLocalStorage2).call(this, "qtyCart"));
  }
  _createClass(CartHandler, [{
    key: "GetCartItem",
    value: function GetCartItem() {
      return _classPrivateFieldGet(this, _cartItem);
    }
  }, {
    key: "ClearCart",
    value: function ClearCart() {
      _classPrivateFieldSet(this, _cartItems, []);
      _classPrivateMethodGet(this, _setLocalStorageJSON, _setLocalStorageJSON2).call(this, "currentCart", _classPrivateFieldGet(this, _cartItems));
      _classPrivateFieldSet(this, _cartQuantity, _classPrivateFieldGet(this, _cartItems).length);
      _classPrivateMethodGet(this, _setLocalStorage, _setLocalStorage2).call(this, "qtyCart", _classPrivateFieldGet(this, _cartQuantity));
    }
  }]);
  return CartHandler;
}();
function _getLocalStorageJSON2(description) {
  return JSON.parse(localStorage.getItem(description)) || [];
}
function _getLocalStorage2(description) {
  return localStorage.getItem(description);
}
function _setLocalStorageJSON2(description, content) {
  localStorage.setItem(description, JSON.stringify(content));
}
function _setLocalStorage2(description, content) {
  localStorage.setItem(description, content);
}

/***/ })

}]);
//# sourceMappingURL=Handlers-CartHandler.js.map