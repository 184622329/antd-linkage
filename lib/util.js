"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isUndefined = isUndefined;
exports.FieldContrast = FieldContrast;
exports.IsBindContrast = IsBindContrast;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var baseType = function baseType(parame) {
  return Object.prototype.toString.call(parame);
};

var intersection = function intersection(arrOne, arrTwo) {
  // 其中一个不是数组就是假的
  if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) {
    return [];
  }

  var two = new Set(arrTwo);
  var newArray = new Set(_toConsumableArray(new Set(arrOne)).filter(function (x) {
    return two.has(x);
  }));
  return _toConsumableArray(newArray);
};

function isFunction(parame) {
  return baseType(parame) === "[object Function]";
}

function isObject(parame) {
  return baseType(parame) === "[object Object]";
}

function isUndefined(parame) {
  return baseType(parame) === "[object Undefined]";
}
/**
 * 判断字段值与绑定值是否相等
 * @param fieldvalue 字段值
 * @param bindValue 绑定值
 */


function FieldContrast(fieldvalue, bindValue) {
  /**
   * 当字段值为数组当情况下判断
   */
  if (Array.isArray(fieldvalue) && !Array.isArray(bindValue)) {
    if (fieldvalue.indexOf(bindValue) >= 0) {
      return true;
    }
  }
  /**
   * 当绑定当值是数组的情况下判断
   */


  if (Array.isArray(bindValue) && !Array.isArray(fieldvalue)) {
    if (bindValue.indexOf(fieldvalue) >= 0) {
      return true;
    }
  }
  /**
   * 如果两个都是数组
   */


  if (Array.isArray(bindValue) && Array.isArray(fieldvalue)) {
    if (intersection(bindValue, fieldvalue).length > 0) {
      return true;
    }
  }
  /**
   * 直接判断两个值是否相等
   */


  if (fieldvalue === bindValue) {
    return true;
  }

  return false;
}
/**
 * 判断模式以及值是否相等
 * @param fieldvalue
 * @param bindValue
 * @param mode
 */


function IsBindContrast(fieldvalue, bindValue, mode) {
  /**
   * 此模式值一定要完成相等才成立
   */
  if (mode === 'equal') {
    var field = fieldvalue;
    var bind = bindValue;

    if (Array.isArray(field)) {
      field = field.sort();
    }

    if (Array.isArray(bind)) {
      bind = bind.sort();
    } // 过滤undefined


    if (isUndefined(field) || isUndefined(bind)) {
      return false;
    }

    return field.toString() === bind.toString();
  }

  var isbind = FieldContrast(fieldvalue, bindValue);
  /**
   * 反向判断
   * 当值不等于当情况成立
   */
  // isequal

  if (mode === 'no') {
    return !isbind;
  }

  return isbind;
}