'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _util = require('./util');

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/**
 * 联动操作
 * @param prop
 */
var LinkageItem = function LinkageItem(prop) {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  var _prop$bindfield = prop.bindfield,
    bindfield = _prop$bindfield === void 0 ? [] : _prop$bindfield,
    _prop$initialValues = prop.initialValues,
    initialValues = _prop$initialValues === void 0 ? {} : _prop$initialValues,
    _prop$children = prop.children,
    children = _prop$children === void 0 ? {} : _prop$children;

  var inspect = function inspect(allFields) {
    var isShow = true;
    bindfield.forEach(function(item) {
      var value = allFields[item.field || ''];
      var isbind = (0, _util.IsBindContrast)(
        value,
        item.value || '',
        item.mode || '',
      );

      if (!isbind) {
        isShow = false;
      }
    });
    setState(isShow);
  };

  (0, _react.useEffect)(function() {
    // eslint-disable-next-line no-shadow
    var props = children.props;

    if (prop.setElement && (0, _util.isFunction)(prop.setElement)) {
      prop.setElement(props.name, inspect);
    } // 初始化的时候检查下函数

    inspect(initialValues);
  }, []); // 隐藏组件

  if (!state) {
    return null;
  }

  var Component = children;
  return Component;
};
/**
 * 字段联动
 * @param props
 */

var Linkage = function Linkage(props) {
  var childrenProps = props.children;
  var checkField = [];
  var allSetData = {}; // 判断子元素是否是多个

  if (Array.isArray(childrenProps)) {
    throw new Error('A child element can only be a single element form');
  }

  (0, _react.useEffect)(function() {
    return function() {
      allSetData = {};
    };
  });
  var _childrenProps$props = childrenProps.props,
    children = _childrenProps$props.children,
    initialValues = _childrenProps$props.initialValues;

  var setElement = function setElement(name, inspect) {
    if ((0, _util.isUndefined)(allSetData[name])) {
      allSetData[name] = inspect;
    }
  }; // 对组件赋能

  var newChildren = children.map(function(item, key) {
    if (!(0, _util.isObject)(item)) {
      return item;
    }

    var bindfield = item.props.bindfield;

    if (Array.isArray(bindfield)) {
      var son = item.props.children;
      var name = son.props.name || false;

      if (son && name) {
        checkField.push(name);
      }

      return _react.default.cloneElement(
        _react.default.createElement(
          LinkageItem, // eslint-disable-next-line react/no-array-index-key
          {
            // eslint-disable-next-line react/no-array-index-key
            key: key,
            setElement: setElement,
            initialValues: initialValues,
          },
        ),
        item.props,
      );
    }

    return item;
  }); // 当表单change的时候触发

  var onValuesChange = function onValuesChange(changedFields, allFields) {
    // 调用来函数还有要函数返回
    if ((0, _util.isFunction)(childrenProps.props.onValuesChange)) {
      childrenProps.props.onValuesChange(changedFields, allFields);
    } // 开始数据监控

    checkField.forEach(function(value) {
      if ((0, _util.isFunction)(allSetData[value])) {
        allSetData[value](allFields);
      }
    });
  };

  var param = _objectSpread(
    _objectSpread({}, childrenProps.props),
    {},
    {
      onValuesChange: onValuesChange,
    },
  );

  return _react.default.cloneElement(childrenProps, param, newChildren);
};

Linkage.Item = function(props) {
  return props.children || null;
};

var _default = Linkage;
exports.default = _default;
