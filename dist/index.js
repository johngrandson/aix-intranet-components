'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol$1 = root.Symbol,
    symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var lodash_isfunction = isFunction;

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement, PropTypes.shape({
  current: PropTypes.any
})]);
var tagPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
}), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600 // $carousel-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (lodash_isfunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target) {
  var els = findDOMElements(target);

  if (isArrayOrNodeList(els)) {
    return els[0];
  }

  return els;
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

var propTypes = {
  tag: tagPropType,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "fluid", "tag"]);

  var classes = mapToCssModules(classnames(className, fluid ? 'container-fluid' : 'container'), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

var propTypes$1 = {
  tag: tagPropType,
  noGutters: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  form: PropTypes.bool
};
var defaultProps$1 = {
  tag: 'div'
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "noGutters", "tag", "form"]);

  var classes = mapToCssModules(classnames(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row'), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Row.propTypes = propTypes$1;
Row.defaultProps = defaultProps$1;

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject$1(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

var lodash_isobject = isObject$1;

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$2 = {
  tag: tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  widths: PropTypes.array
};
var defaultProps$2 = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "widths", "tag"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (lodash_isobject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classnames(className, colClasses), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Col.propTypes = propTypes$2;
Col.defaultProps = defaultProps$2;

var propTypes$3 = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
var defaultProps$3 = {
  tag: 'nav',
  expand: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-" + expand;
};

var Navbar = function Navbar(props) {
  var _classNames;

  var expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "tag"]);

  var classes = mapToCssModules(classnames(className, 'navbar', getExpandClass(expand), (_classNames = {
    'navbar-light': light,
    'navbar-dark': dark
  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Navbar.propTypes = propTypes$3;
Navbar.defaultProps = defaultProps$3;

var propTypes$4 = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$4 = {
  tag: 'a'
};

var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

  var classes = mapToCssModules(classnames(className, 'navbar-brand'), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavbarBrand.propTypes = propTypes$4;
NavbarBrand.defaultProps = defaultProps$4;

var propTypes$5 = {
  tag: tagPropType,
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node
};

var propTypes$6 = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  navbar: PropTypes.bool,
  card: PropTypes.bool,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$6 = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-" + vertical + "-column";
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"]);

  var classes = mapToCssModules(classnames(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Nav.propTypes = propTypes$6;
Nav.defaultProps = defaultProps$6;

var propTypes$7 = {
  tag: tagPropType,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$7 = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

  var classes = mapToCssModules(classnames(className, 'nav-item', active ? 'active' : false), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavItem.propTypes = propTypes$7;
NavItem.defaultProps = defaultProps$7;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var propTypes$8 = {
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.any
};
var defaultProps$8 = {
  tag: 'a'
};

var NavLink =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "active", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(React__default.Component);

NavLink.propTypes = propTypes$8;
NavLink.defaultProps = defaultProps$8;

var propTypes$9 = {
  tag: tagPropType,
  listTag: tagPropType,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  'aria-label': PropTypes.string
};

var propTypes$a = {
  tag: tagPropType,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$b = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  close: PropTypes.bool
};
var defaultProps$b = {
  color: 'secondary',
  tag: 'button'
};

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Button.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        ariaLabel = _this$props['aria-label'],
        block = _this$props.block,
        className = _this$props.className,
        close = _this$props.close,
        cssModule = _this$props.cssModule,
        color = _this$props.color,
        outline = _this$props.outline,
        size = _this$props.size,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

    if (close && typeof attributes.children === 'undefined') {
      attributes.children = React__default.createElement("span", {
        "aria-hidden": true
      }, "\xD7");
    }

    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
    var classes = mapToCssModules(classnames(className, {
      close: close
    }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
      active: active,
      disabled: this.props.disabled
    }), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    var defaultAriaLabel = close ? 'Close' : null;
    return React__default.createElement(Tag, _extends({
      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };

  return Button;
}(React__default.Component);

Button.propTypes = propTypes$b;
Button.defaultProps = defaultProps$b;

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose$1;

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized$1;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction$1(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction$1(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React__default.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React__default.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = unwrapExports(lib);

var ManagerContext = createContext({
  setReferenceNode: undefined,
  referenceNode: undefined
});

var Manager =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(Manager, _React$Component);

  function Manager() {
    var _this;

    _this = _React$Component.call(this) || this;

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setReferenceNode", function (referenceNode) {
      if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
        return;
      }

      _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: _extends_1({}, context, {
            referenceNode: referenceNode
          })
        };
      });
    });

    _this.state = {
      context: {
        setReferenceNode: _this.setReferenceNode,
        referenceNode: undefined
      }
    };
    return _this;
  }

  var _proto = Manager.prototype;

  _proto.render = function render() {
    return React.createElement(ManagerContext.Provider, {
      value: this.state.context
    }, this.props.children);
  };

  return Manager;
}(React.Component);

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      data: undefined,
      placement: undefined
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "popperInstance", void 0);

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "popperNode", null);

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "arrowNode", null);

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      safeInvoke(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends_1({}, _this.props.modifiers, {
          arrow: _extends_1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = assertThisInitialized(assertThisInitialized(_this)),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    safeInvoke(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(React.Component);

defineProperty(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});
function Popper$1(_ref) {
  var referenceElement = _ref.referenceElement,
      props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

  return React.createElement(ManagerContext.Consumer, null, function (_ref2) {
    var referenceNode = _ref2.referenceNode;
    return React.createElement(InnerPopper, _extends_1({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning$1 = function() {};

if (__DEV__) {
  var printWarning$1 = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning$1 = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning$1.apply(null, [format].concat(args));
    }
  };
}

var warning_1$1 = warning$1;

var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "refHandler", function (node) {
      safeInvoke(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.render = function render() {
    warning_1$1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(React.Component);

function Reference(props) {
  return React.createElement(ManagerContext.Consumer, null, function (_ref) {
    var setReferenceNode = _ref.setReferenceNode;
    return React.createElement(InnerReference, _extends_1({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

// Public components
 // Public types

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
 *  inNavbar: PropTypes.bool.isRequired,
 * }
 */

var DropdownContext = React__default.createContext({});

var propTypes$c = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  nav: PropTypes.bool,
  active: PropTypes.bool,
  addonType: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['prepend', 'append'])]),
  size: PropTypes.string,
  tag: tagPropType,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  inNavbar: PropTypes.bool,
  setActiveFromChild: PropTypes.bool
};
var defaultProps$c = {
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.containerRef = React__default.createRef();
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.getContextValue = function getContextValue() {
    return {
      toggle: this.props.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.handleProps();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEvents();
  };

  _proto.getContainer = function getContainer() {
    return this.containerRef.current;
  };

  _proto.getMenuCtrl = function getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
    return this._$menuCtrl;
  };

  _proto.getMenuItems = function getMenuItems() {
    return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
  };

  _proto.addEvents = function addEvents() {
    var _this2 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.addEventListener(event, _this2.handleDocumentClick, true);
    });
  };

  _proto.removeEvents = function removeEvents() {
    var _this3 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.removeEventListener(event, _this3.handleDocumentClick, true);
    });
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
    var container = this.getContainer();

    if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  };

  _proto.handleKeyDown = function handleKeyDown(e) {
    var _this4 = this;

    if (/input|textarea/i.test(e.target.tagName) || keyCodes.tab === e.which && e.target.getAttribute('role') !== 'menuitem') {
      return;
    }

    e.preventDefault();
    if (this.props.disabled) return;

    if (this.getMenuCtrl() === e.target) {
      if (!this.props.isOpen && [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
        this.toggle(e);
        setTimeout(function () {
          return _this4.getMenuItems()[0].focus();
        });
      }
    }

    if (this.props.isOpen && e.target.getAttribute('role') === 'menuitem') {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        var $menuitems = this.getMenuItems();
        var index = $menuitems.indexOf(e.target);

        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }

        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        var _$menuitems = this.getMenuItems();

        _$menuitems[_$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        var _$menuitems2 = this.getMenuItems();

        _$menuitems2[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        var _$menuitems3 = this.getMenuItems();

        var charPressed = String.fromCharCode(e.which).toLowerCase();

        for (var i = 0; i < _$menuitems3.length; i += 1) {
          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

          if (firstLetter === charPressed) {
            _$menuitems3[i].focus();

            break;
          }
        }
      }
    }
  };

  _proto.handleProps = function handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _classNames, _ref;

    var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        direction = _omit.direction,
        isOpen = _omit.isOpen,
        group = _omit.group,
        size = _omit.size,
        nav = _omit.nav,
        setActiveFromChild = _omit.setActiveFromChild,
        active = _omit.active,
        addonType = _omit.addonType,
        tag = _omit.tag,
        attrs = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "addonType", "tag"]);

    var Tag = tag || (nav ? 'li' : 'div');
    var subItemIsActive = false;

    if (setActiveFromChild) {
      React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      });
    }

    var classes = mapToCssModules(classnames(className, direction !== 'down' && "drop" + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, _classNames["input-group-" + addonType] = addonType, _classNames['btn-group'] = group, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group && !addonType, _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
    return React__default.createElement(DropdownContext.Provider, {
      value: this.getContextValue()
    }, React__default.createElement(Manager, null, React__default.createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  };

  return Dropdown;
}(React__default.Component);

Dropdown.propTypes = propTypes$c;
Dropdown.defaultProps = defaultProps$c;

var propTypes$d = {
  children: PropTypes.node
};

var ButtonDropdown = function ButtonDropdown(props) {
  return React__default.createElement(Dropdown, _extends({
    group: true
  }, props));
};

ButtonDropdown.propTypes = propTypes$d;

var propTypes$e = {
  tag: tagPropType,
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};

var propTypes$f = {
  tag: tagPropType,
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  role: PropTypes.string
};

var propTypes$g = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: tagPropType,
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool
};
var defaultProps$f = {
  tag: 'button',
  toggle: true
};

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  };

  _proto.getTabIndex = function getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return '-1';
    }

    return '0';
  };

  _proto.render = function render() {
    var tabIndex = this.getTabIndex();
    var role = tabIndex > -1 ? 'menuitem' : undefined;

    var _omit = omit(this.props, ['toggle']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        divider = _omit.divider,
        Tag = _omit.tag,
        header = _omit.header,
        active = _omit.active,
        props = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "divider", "tag", "header", "active"]);

    var classes = mapToCssModules(classnames(className, {
      disabled: props.disabled,
      'dropdown-item': !divider && !header,
      active: active,
      'dropdown-header': header,
      'dropdown-divider': divider
    }), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      }
    }

    return React__default.createElement(Tag, _extends({
      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
    }, props, {
      tabIndex: tabIndex,
      role: role,
      className: classes,
      onClick: this.onClick
    }));
  };

  return DropdownItem;
}(React__default.Component);

DropdownItem.propTypes = propTypes$g;
DropdownItem.defaultProps = defaultProps$f;
DropdownItem.contextType = DropdownContext;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

var propTypes$h = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  persist: PropTypes.bool
};
var defaultProps$g = {
  tag: 'div',
  flip: true
};
var noFlipModifier = {
  flip: {
    enabled: false
  }
};
var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom'
};

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        right = _this$props.right,
        tag = _this$props.tag,
        flip = _this$props.flip,
        modifiers = _this$props.modifiers,
        persist = _this$props.persist,
        attrs = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist"]);

    var classes = mapToCssModules(classnames(className, 'dropdown-menu', {
      'dropdown-menu-right': right,
      show: this.context.isOpen
    }), cssModule);
    var Tag = tag;

    if (persist || this.context.isOpen && !this.context.inNavbar) {
      var position1 = directionPositionMap[this.context.direction] || 'bottom';
      var position2 = right ? 'end' : 'start';
      var poperPlacement = position1 + "-" + position2;
      var poperModifiers = !flip ? _objectSpread({}, modifiers, noFlipModifier) : modifiers;
      return React__default.createElement(Popper$1, {
        placement: poperPlacement,
        modifiers: poperModifiers
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement;
        return React__default.createElement(Tag, _extends({
          tabIndex: "-1",
          role: "menu",
          ref: ref,
          style: style
        }, attrs, {
          "aria-hidden": !_this.context.isOpen,
          className: classes,
          "x-placement": placement
        }));
      });
    }

    return React__default.createElement(Tag, _extends({
      tabIndex: "-1",
      role: "menu"
    }, attrs, {
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "x-placement": attrs.placement
    }));
  };

  return DropdownMenu;
}(React__default.Component);
DropdownMenu.propTypes = propTypes$h;
DropdownMenu.defaultProps = defaultProps$g;
DropdownMenu.contextType = DropdownContext;

var propTypes$i = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  tag: tagPropType,
  nav: PropTypes.bool
};
var defaultProps$h = {
  'aria-haspopup': true,
  color: 'secondary'
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color,
        cssModule = _this$props.cssModule,
        caret = _this$props.caret,
        split = _this$props.split,
        nav = _this$props.nav,
        tag = _this$props.tag,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "color", "cssModule", "caret", "split", "nav", "tag"]);

    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    var classes = mapToCssModules(classnames(className, {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      'nav-link': nav
    }), cssModule);
    var children = props.children || React__default.createElement("span", {
      className: "sr-only"
    }, ariaLabel);
    var Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return React__default.createElement(Tag, _extends({}, props, {
        className: classes,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen,
        children: children
      }));
    }

    return React__default.createElement(Reference, null, function (_ref) {
      var _ref2;

      var ref = _ref.ref;
      return React__default.createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
        className: classes,
        onClick: _this2.onClick,
        "aria-expanded": _this2.context.isOpen,
        children: children
      }));
    });
  };

  return DropdownToggle;
}(React__default.Component);

DropdownToggle.propTypes = propTypes$i;
DropdownToggle.defaultProps = defaultProps$h;
DropdownToggle.contextType = DropdownContext;

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

var hasClass_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];
});

unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = addClass;

var _hasClass = interopRequireDefault(hasClass_1);

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];
});

unwrapExports(addClass_1);

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
    polyfill: polyfill
});

var PropTypes$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : null;
exports.classNamesShape = classNamesShape;
});

unwrapExports(PropTypes$1);
var PropTypes_1 = PropTypes$1.classNamesShape;
var PropTypes_2 = PropTypes$1.timeoutsShape;

var Transition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes$$1 = _interopRequireWildcard(PropTypes);

var _react = _interopRequireDefault(React__default);

var _reactDom = _interopRequireDefault(ReactDOM);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes$$1.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes$$1.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes$$1.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes$$1.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes$$1.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes$$1.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes$$1.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = PropTypes$1.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes$$1.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes$$1.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$$1.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes$$1.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes$$1.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes$$1.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes$$1.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

exports.default = _default;
});

unwrapExports(Transition_1);
var Transition_2 = Transition_1.EXITING;
var Transition_3 = Transition_1.ENTERED;
var Transition_4 = Transition_1.ENTERING;
var Transition_5 = Transition_1.EXITED;
var Transition_6 = Transition_1.UNMOUNTED;

var CSSTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var PropTypes$$1 = _interopRequireWildcard(PropTypes);

var _addClass = _interopRequireDefault(addClass_1);

var _removeClass = _interopRequireDefault(removeClass);

var _react = _interopRequireDefault(React__default);

var _Transition = _interopRequireDefault(Transition_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass$$1 = function removeClass$$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass$$1(node, className);
    activeClassName && removeClass$$1(node, activeClassName);
    doneClassName && removeClass$$1(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: PropTypes$1.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes$$1.func
}) : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(CSSTransition_1);

var ChildMapping = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;



/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React__default.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, React__default.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, React__default.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, React__default.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
});

unwrapExports(ChildMapping);
var ChildMapping_1 = ChildMapping.getChildMapping;
var ChildMapping_2 = ChildMapping.mergeChildMappings;
var ChildMapping_3 = ChildMapping.getInitialChildMapping;
var ChildMapping_4 = ChildMapping.getNextChildMapping;

var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(PropTypes);

var _react = _interopRequireDefault(React__default);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(TransitionGroup_1);

var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(PropTypes);

var _react = _interopRequireDefault(React__default);



var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, ReactDOM.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(ReplaceTransition_1);

var reactTransitionGroup = createCommonjsModule(function (module) {

var _CSSTransition = _interopRequireDefault(CSSTransition_1);

var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

var _Transition = _interopRequireDefault(Transition_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};
});

unwrapExports(reactTransitionGroup);
var reactTransitionGroup_1 = reactTransitionGroup.Transition;
var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

var propTypes$j = _objectSpread({}, reactTransitionGroup_1.propTypes, {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: tagPropType,
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
});

var defaultProps$i = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = _objectWithoutPropertiesLoose(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return React__default.createElement(reactTransitionGroup_1, transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classnames(className, baseClass, isActive && baseClassActive), cssModule);
    return React__default.createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes$j;
Fade.defaultProps = defaultProps$i;

var propTypes$k = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$l = {
  tag: tagPropType,
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps$k = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]);

  var classes = mapToCssModules(classnames(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card.propTypes = propTypes$l;
Card.defaultProps = defaultProps$k;

var propTypes$m = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$n = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$o = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$p = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps$o = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "innerRef", "tag"]);

  var classes = mapToCssModules(classnames(className, 'card-body'), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody.propTypes = propTypes$p;
CardBody.defaultProps = defaultProps$o;

var propTypes$q = {
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$r = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$s = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$r = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

  var classes = mapToCssModules(classnames(className, 'card-header'), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = propTypes$s;
CardHeader.defaultProps = defaultProps$r;

var propTypes$t = {
  tag: tagPropType,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$u = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props.in,
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = _objectWithoutPropertiesLoose(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

    return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
      enter: slide,
      exit: slide,
      in: isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = mapToCssModules(classnames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return React__default.createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(React__default.Component);

CarouselItem.propTypes = _objectSpread({}, reactTransitionGroup_1.propTypes, {
  tag: tagPropType,
  in: PropTypes.bool,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  slide: PropTypes.bool,
  className: PropTypes.string
});
CarouselItem.defaultProps = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextTypes = {
  direction: PropTypes.string
};

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
    _this.state = {
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      direction: this.state.direction
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setInterval(nextProps); // Calculate the direction to turn

    if (this.props.activeIndex + 1 === nextProps.activeIndex) {
      this.setState({
        direction: 'right'
      });
    } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
      this.setState({
        direction: 'left'
      });
    } else if (this.props.activeIndex > nextProps.activeIndex) {
      this.setState({
        direction: this.state.indicatorClicked ? 'left' : 'right'
      });
    } else if (this.props.activeIndex !== nextProps.activeIndex) {
      this.setState({
        direction: this.state.indicatorClicked ? 'right' : 'left'
      });
    }

    this.setState({
      indicatorClicked: false
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (props) {
    if (props === void 0) {
      props = this.props;
    }

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (props.interval) {
      this.cycleInterval = setInterval(function () {
        props.next();
      }, parseInt(props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
    }
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this2 = this;

    var slide = this.props.slide;
    return React__default.createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this2.props.activeIndex;
      return React__default.cloneElement(item, {
        in: isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className;
    var outerClasses = mapToCssModules(classnames(className, 'carousel', slide && 'slide'), cssModule);
    var innerClasses = mapToCssModules(classnames('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === CarouselItem;
    }); // Rendering only slides

    if (slidesOnly) {
      return React__default.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(children, innerClasses));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return React__default.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this3.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = React__default.cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return React__default.createElement("div", {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
  };

  return Carousel;
}(React__default.Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
  className: PropTypes.string
};
Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true
};
Carousel.childContextTypes = {
  direction: PropTypes.string
};

var CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;
  var anchorClasses = mapToCssModules(classnames(className, "carousel-control-" + direction), cssModule);
  var iconClasses = mapToCssModules(classnames("carousel-control-" + direction + "-icon"), cssModule);
  var screenReaderClasses = mapToCssModules(classnames('sr-only'), cssModule);
  return React__default.createElement("a", {
    className: anchorClasses,
    role: "button",
    tabIndex: "0",
    onClick: function onClick(e) {
      e.preventDefault();
      onClickHandler();
    }
  }, React__default.createElement("span", {
    className: iconClasses,
    "aria-hidden": "true"
  }), React__default.createElement("span", {
    className: screenReaderClasses
  }, directionText || direction));
};

CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  cssModule: PropTypes.object,
  directionText: PropTypes.string,
  className: PropTypes.string
};

var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = mapToCssModules(classnames(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classnames({
      active: activeIndex === idx
    }), cssModule);
    return React__default.createElement("li", {
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return React__default.createElement("ol", {
    className: listClasses
  }, indicators);
};

CarouselIndicators.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  cssModule: PropTypes.object,
  onClickHandler: PropTypes.func.isRequired,
  className: PropTypes.string
};

var CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;
  var classes = mapToCssModules(classnames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
  return React__default.createElement("div", {
    className: classes
  }, React__default.createElement("h3", null, captionHeader), React__default.createElement("p", null, captionText));
};

CarouselCaption.propTypes = {
  captionHeader: PropTypes.string,
  captionText: PropTypes.string.isRequired,
  cssModule: PropTypes.object,
  className: PropTypes.string
};

var propTypes$v = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  defaultActiveIndex: PropTypes.number,
  activeIndex: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  goToIndex: PropTypes.func
};

var UncontrolledCarousel =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.animating = false;
    _this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledCarousel.prototype;

  _proto.onExiting = function onExiting() {
    this.animating = true;
  };

  _proto.onExited = function onExited() {
    this.animating = false;
  };

  _proto.next = function next() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.previous = function previous() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.goToIndex = function goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        defaultActiveIndex = _this$props.defaultActiveIndex,
        autoPlay = _this$props.autoPlay,
        indicators = _this$props.indicators,
        controls = _this$props.controls,
        items = _this$props.items,
        goToIndex = _this$props.goToIndex,
        props = _objectWithoutPropertiesLoose(_this$props, ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"]);

    var activeIndex = this.state.activeIndex;
    var slides = items.map(function (item) {
      return React__default.createElement(CarouselItem, {
        onExiting: _this2.onExiting,
        onExited: _this2.onExited,
        key: item.src
      }, React__default.createElement("img", {
        className: "d-block w-100",
        src: item.src,
        alt: item.altText
      }), React__default.createElement(CarouselCaption, {
        captionText: item.caption,
        captionHeader: item.header || item.caption
      }));
    });
    return React__default.createElement(Carousel, _extends({
      activeIndex: activeIndex,
      next: this.next,
      previous: this.previous,
      ride: autoPlay ? 'carousel' : undefined
    }, props), indicators && React__default.createElement(CarouselIndicators, {
      items: items,
      activeIndex: props.activeIndex || activeIndex,
      onClickHandler: goToIndex || this.goToIndex
    }), slides, controls && React__default.createElement(CarouselControl, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: props.previous || this.previous
    }), controls && React__default.createElement(CarouselControl, {
      direction: "next",
      directionText: "Next",
      onClickHandler: props.next || this.next
    }));
  };

  return UncontrolledCarousel;
}(React.Component);

UncontrolledCarousel.propTypes = propTypes$v;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};

var propTypes$w = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$x = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$y = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$z = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.node,
  inline: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  bsSize: PropTypes.string,
  htmlFor: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

function noop() {}

var propTypes$A = {
  children: PropTypes.node.isRequired,
  popperClassName: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArrow: PropTypes.bool,
  tag: tagPropType,
  isOpen: PropTypes.bool.isRequired,
  cssModule: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  flip: PropTypes.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes.object,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  transition: PropTypes.shape(Fade.propTypes)
};
var defaultProps$x = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {},
  onClosed: noop,
  fade: true,
  transition: _objectSpread({}, Fade.defaultProps)
};

var PopperContent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PopperContent, _React$Component);

  function PopperContent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handlePlacementChange = _this.handlePlacementChange.bind(_assertThisInitialized(_this));
    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  var _proto = PopperContent.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  };

  _proto.setTargetNode = function setTargetNode(node) {
    this.targetNode = node;
  };

  _proto.getTargetNode = function getTargetNode() {
    return this.targetNode;
  };

  _proto.getContainerNode = function getContainerNode() {
    return getTarget(this.props.container);
  };

  _proto.getRef = function getRef(ref) {
    this._element = ref;
  };

  _proto.handlePlacementChange = function handlePlacementChange(data) {
    if (this.state.placement !== data.placement) {
      this.setState({
        placement: data.placement
      });
    }

    return data;
  };

  _proto.onClosed = function onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  };

  _proto.renderChildren = function renderChildren() {
    var _this$props = this.props,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        flip = _this$props.flip,
        target = _this$props.target,
        offset = _this$props.offset,
        fallbackPlacement = _this$props.fallbackPlacement,
        placementPrefix = _this$props.placementPrefix,
        _arrowClassName = _this$props.arrowClassName,
        hideArrow = _this$props.hideArrow,
        _popperClassName = _this$props.popperClassName,
        tag = _this$props.tag,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        boundariesElement = _this$props.boundariesElement,
        onClosed = _this$props.onClosed,
        fade = _this$props.fade,
        transition = _this$props.transition,
        attrs = _objectWithoutPropertiesLoose(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "boundariesElement", "onClosed", "fade", "transition"]);

    var arrowClassName = mapToCssModules(classnames('arrow', _arrowClassName), cssModule);
    var placement = this.state.placement || attrs.placement;
    var placementFirstPart = placement.split('-')[0];
    var popperClassName = mapToCssModules(classnames(_popperClassName, placementPrefix ? placementPrefix + "-" + placementFirstPart : placementFirstPart), this.props.cssModule);

    var extendedModifiers = _objectSpread({
      offset: {
        offset: offset
      },
      flip: {
        enabled: flip,
        behavior: fallbackPlacement
      },
      preventOverflow: {
        boundariesElement: boundariesElement
      },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange
      }
    }, modifiers);

    var popperTransition = _objectSpread({}, Fade.defaultProps, transition, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return React__default.createElement(Fade, _extends({}, popperTransition, attrs, {
      in: isOpen,
      onExited: this.onClosed,
      tag: tag
    }), React__default.createElement(Popper$1, {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement: placement
    }, function (_ref) {
      var ref = _ref.ref,
          style = _ref.style,
          placement = _ref.placement,
          arrowProps = _ref.arrowProps;
      return React__default.createElement("div", {
        ref: ref,
        style: style,
        className: popperClassName,
        "x-placement": placement
      }, children, !hideArrow && React__default.createElement("span", {
        ref: arrowProps.ref,
        className: arrowClassName,
        style: arrowProps.style
      }));
    }));
  };

  _proto.render = function render() {
    this.setTargetNode(getTarget(this.props.target));

    if (this.state.isOpen) {
      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM.createPortal(React__default.createElement("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }

    return null;
  };

  return PopperContent;
}(React__default.Component);

PopperContent.propTypes = propTypes$A;
PopperContent.defaultProps = defaultProps$x;

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: PropTypes.object.isRequired
};
PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired
};

var propTypes$B = {
  placement: PropTypes.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  popperClassName: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number
  }), PropTypes.number]),
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  trigger: PropTypes.string,
  fade: PropTypes.bool,
  flip: PropTypes.bool
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};
var defaultProps$y = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {},
  trigger: 'click',
  fade: true
};

function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

var TooltipPopoverWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TooltipPopoverWrapper, _React$Component);

  function TooltipPopoverWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._target = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  var _proto = TooltipPopoverWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateTarget();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeTargetEvents();
  };

  TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.state.isOpen && !this.props.isOpen) {
        this.toggle();
      }
    }
  };

  _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  };

  _proto.onEscKeyDown = function onEscKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide(e);
    }
  };

  _proto.getRef = function getRef(ref) {
    var innerRef = this.props.innerRef;

    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }

    this._popover = ref;
  };

  _proto.getDelay = function getDelay(key) {
    var delay = this.props.delay;

    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }

    return delay;
  };

  _proto.show = function show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle(e);
    }
  };

  _proto.showWithDelay = function showWithDelay(e) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }

    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
  };

  _proto.hide = function hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.toggle(e);
    }
  };

  _proto.hideWithDelay = function hideWithDelay(e) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }

    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
  };

  _proto.clearShowTimeout = function clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  };

  _proto.clearHideTimeout = function clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    var triggers = this.props.trigger.split(' ');

    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtree(e.target, this._target))) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
        this.hideWithDelay(e);
      } else if (!this.props.isOpen) {
        this.showWithDelay(e);
      }
    } else if (triggers.indexOf('click') > -1 && isInDOMSubtree(e.target, this._target)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.showWithDelay(e);
      } else {
        this.hideWithDelay(e);
      }
    }
  };

  _proto.addTargetEvents = function addTargetEvents() {
    if (this.props.trigger) {
      var triggers = this.props.trigger.split(' ');

      if (triggers.indexOf('manual') === -1) {
        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
          document.addEventListener('click', this.handleDocumentClick, true);
        }

        if (this._target) {
          if (triggers.indexOf('hover') > -1) {
            this._target.addEventListener('mouseover', this.showWithDelay, true);

            this._target.addEventListener('mouseout', this.hideWithDelay, true);
          }

          if (triggers.indexOf('focus') > -1) {
            this._target.addEventListener('focusin', this.show, true);

            this._target.addEventListener('focusout', this.hide, true);
          }

          this._target.addEventListener('keydown', this.onEscKeyDown, true);
        }
      }
    }
  };

  _proto.removeTargetEvents = function removeTargetEvents() {
    if (this._target) {
      this._target.removeEventListener('mouseover', this.showWithDelay, true);

      this._target.removeEventListener('mouseout', this.hideWithDelay, true);

      this._target.removeEventListener('keydown', this.onEscKeyDown, true);

      this._target.removeEventListener('focusin', this.show, true);

      this._target.removeEventListener('focusout', this.hide, true);
    }

    document.removeEventListener('click', this.handleDocumentClick, true);
  };

  _proto.updateTarget = function updateTarget() {
    var newTarget = getTarget(this.props.target);

    if (newTarget !== this._target) {
      this.removeTargetEvents();
      this._target = newTarget;
      this.addTargetEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.onClosed = function onClosed() {
    this.setState({
      isOpen: false
    });
  };

  _proto.render = function render() {
    if (!this.state.isOpen) {
      return null;
    }

    this.updateTarget();
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        innerClassName = _this$props.innerClassName,
        target = _this$props.target,
        isOpen = _this$props.isOpen,
        hideArrow = _this$props.hideArrow,
        boundariesElement = _this$props.boundariesElement,
        placement = _this$props.placement,
        placementPrefix = _this$props.placementPrefix,
        arrowClassName = _this$props.arrowClassName,
        popperClassName = _this$props.popperClassName,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        offset = _this$props.offset,
        fade = _this$props.fade,
        flip = _this$props.flip;
    var attributes = omit(this.props, Object.keys(propTypes$B));
    var popperClasses = mapToCssModules(popperClassName, cssModule);
    var classes = mapToCssModules(innerClassName, cssModule);
    return React__default.createElement(PopperContent, {
      className: className,
      target: target,
      isOpen: isOpen,
      hideArrow: hideArrow,
      boundariesElement: boundariesElement,
      placement: placement,
      placementPrefix: placementPrefix,
      arrowClassName: arrowClassName,
      popperClassName: popperClasses,
      container: container,
      modifiers: modifiers,
      offset: offset,
      cssModule: cssModule,
      onClosed: this.onClosed,
      fade: fade,
      flip: flip
    }, React__default.createElement("div", _extends({}, attributes, {
      ref: this.getRef,
      className: classes,
      role: "tooltip",
      "aria-hidden": isOpen,
      onMouseOver: this.onMouseOverTooltipContent,
      onMouseLeave: this.onMouseLeaveTooltipContent,
      onKeyDown: this.onEscKeyDown
    })));
  };

  return TooltipPopoverWrapper;
}(React__default.Component);

TooltipPopoverWrapper.propTypes = propTypes$B;
TooltipPopoverWrapper.defaultProps = defaultProps$y;

var defaultProps$z = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click'
};

var Popover = function Popover(props) {
  var popperClasses = classnames('popover', 'show');
  var classes = classnames('popover-inner', props.innerClassName);
  return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
    popperClassName: popperClasses,
    innerClassName: classes
  }));
};

Popover.propTypes = propTypes$B;
Popover.defaultProps = defaultProps$z;

var omitKeys = ['defaultOpen'];

var UncontrolledPopover =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledPopover, _Component);

  function UncontrolledPopover(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledPopover.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(Popover, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  };

  return UncontrolledPopover;
}(React.Component);
UncontrolledPopover.propTypes = _objectSpread({
  defaultOpen: PropTypes.bool
}, Popover.propTypes);

var propTypes$C = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$D = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

var propTypes$E = {
  children: PropTypes.node,
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  tag: tagPropType,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$F = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(React__default.Component);

Portal.propTypes = propTypes$F;

function noop$1() {}

var FadePropTypes = PropTypes.shape(Fade.propTypes);
var propTypes$G = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  scrollable: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  keyboard: PropTypes.bool,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  external: PropTypes.node,
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  unmountOnClose: PropTypes.bool,
  returnFocusAfterClose: PropTypes.bool
};
var propsToOmit = Object.keys(propTypes$G);
var defaultProps$D = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop$1,
  onClosed: noop$1,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true
};

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };

    if (props.isOpen) {
      _this.init();
    }

    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }

    if (this.state.isOpen && this.props.autoFocus) {
      this.setFocus();
    }

    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.state.isOpen) {
        this.close();
      }
    }

    this._isMounted = false;
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop$1)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      if (!this.props.isOpen || this.props.backdrop !== true) return;
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      e.preventDefault();
      e.stopPropagation();
      this.props.toggle(e);
    }
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      document.body.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Modal.openCount === 0) {
      document.body.className = classnames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
    }

    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      document.body.removeChild(this._element);
      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this2 = this;

    var attributes = omit(this.props, propsToOmit);
    var dialogBaseClass = 'modal-dialog';
    return React__default.createElement("div", _extends({}, attributes, {
      className: mapToCssModules(classnames(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this2._dialog = c;
      }
    }), React__default.createElement("div", {
      className: mapToCssModules(classnames('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props = this.props,
          wrapClassName = _this$props.wrapClassName,
          modalClassName = _this$props.modalClassName,
          backdropClassName = _this$props.backdropClassName,
          cssModule = _this$props.cssModule,
          isOpen = _this$props.isOpen,
          backdrop = _this$props.backdrop,
          role = _this$props.role,
          labelledBy = _this$props.labelledBy,
          external = _this$props.external,
          innerRef = _this$props.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread({}, Fade.defaultProps, this.props.modalTransition, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread({}, Fade.defaultProps, this.props.backdropTransition, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? React__default.createElement(Fade, _extends({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule: cssModule,
        className: mapToCssModules(classnames('modal-backdrop', backdropClassName), cssModule)
      })) : React__default.createElement("div", {
        className: mapToCssModules(classnames('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return React__default.createElement(Portal, {
        node: this._element
      }, React__default.createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, React__default.createElement(Fade, _extends({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classnames('modal', modalClassName), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  return Modal;
}(React__default.Component);

Modal.propTypes = propTypes$G;
Modal.defaultProps = defaultProps$D;
Modal.openCount = 0;

var propTypes$H = {
  tag: tagPropType,
  wrapTag: tagPropType,
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  close: PropTypes.object
};

var propTypes$I = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$J = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var defaultProps$H = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'click hover focus'
};

var Tooltip = function Tooltip(props) {
  var popperClasses = classnames('tooltip', 'show');
  var classes = classnames('tooltip-inner', props.innerClassName);
  return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
    popperClassName: popperClasses,
    innerClassName: classes
  }));
};

Tooltip.propTypes = propTypes$B;
Tooltip.defaultProps = defaultProps$H;

var propTypes$K = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: tagPropType,
  responsiveTag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
};

var propTypes$L = {
  tag: tagPropType,
  flush: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$M = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$K = {
  tag: 'form'
};

var Form =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, inline ? 'form-inline' : false), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(React.Component);

Form.propTypes = propTypes$M;
Form.defaultProps = defaultProps$K;

var propTypes$N = {
  children: PropTypes.node,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
};

var propTypes$O = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$P = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: tagPropType,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$Q = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$O = {
  type: 'text'
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var fileInput = type === 'file';
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (fileInput) {
      formControlClass = formControlClass + "-file";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Input;
}(React__default.Component);

Input.propTypes = propTypes$Q;
Input.defaultProps = defaultProps$O;

var propTypes$R = {
  tag: tagPropType,
  size: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$P = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "size"]);

  var classes = mapToCssModules(classnames(className, 'input-group', size ? "input-group-" + size : null), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

InputGroup.propTypes = propTypes$R;
InputGroup.defaultProps = defaultProps$P;

var propTypes$S = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$Q = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

  var classes = mapToCssModules(classnames(className, 'input-group-text'), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

InputGroupText.propTypes = propTypes$S;
InputGroupText.defaultProps = defaultProps$Q;

var propTypes$T = {
  tag: tagPropType,
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$R = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "addonType", "children"]);

  var classes = mapToCssModules(classnames(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

  if (typeof children === 'string') {
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), React__default.createElement(InputGroupText, {
      children: children
    }));
  }

  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    children: children
  }));
};

InputGroupAddon.propTypes = propTypes$T;
InputGroupAddon.defaultProps = defaultProps$R;

var propTypes$U = {
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node
};

var stringOrNumberProp$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps$1 = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
  size: stringOrNumberProp$1,
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$V = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  widths: PropTypes.array
};

var propTypes$W = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: tagPropType,
  top: PropTypes.bool
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = _objectWithoutPropertiesLoose(props, ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"]);

  var defaultTag;

  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = mapToCssModules(classnames(className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Media.propTypes = propTypes$W;

var propTypes$X = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: tagPropType,
  listTag: tagPropType,
  'aria-label': PropTypes.string
};
var defaultProps$T = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

var Pagination = function Pagination(props) {
  var _classNames;

  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, ["className", "listClassName", "cssModule", "size", "tag", "listTag", "aria-label"]);

  var classes = mapToCssModules(classnames(className), cssModule);
  var listClasses = mapToCssModules(classnames(listClassName, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames)), cssModule);
  return React__default.createElement(Tag, {
    className: classes,
    "aria-label": label
  }, React__default.createElement(ListTag, _extends({}, attributes, {
    className: listClasses
  })));
};

Pagination.propTypes = propTypes$X;
Pagination.defaultProps = defaultProps$T;

var propTypes$Y = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: tagPropType
};
var defaultProps$U = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["active", "className", "cssModule", "disabled", "tag"]);

  var classes = mapToCssModules(classnames(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PaginationItem.propTypes = propTypes$Y;
PaginationItem.defaultProps = defaultProps$U;

var propTypes$Z = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  tag: tagPropType
};
var defaultProps$V = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      first = props.first,
      last = props.last,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "next", "previous", "first", "last", "tag"]);

  var classes = mapToCssModules(classnames(className, 'page-link'), cssModule);
  var defaultAriaLabel;

  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  } else if (first) {
    defaultAriaLabel = 'First';
  } else if (last) {
    defaultAriaLabel = 'Last';
  }

  var ariaLabel = props['aria-label'] || defaultAriaLabel;
  var defaultCaret;

  if (previous) {
    defaultCaret = "\u2039";
  } else if (next) {
    defaultCaret = "\u203A";
  } else if (first) {
    defaultCaret = "\xAB";
  } else if (last) {
    defaultCaret = "\xBB";
  }

  var children = props.children;

  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next || first || last) {
    children = [React__default.createElement("span", {
      "aria-hidden": "true",
      key: "caret"
    }, children || defaultCaret), React__default.createElement("span", {
      className: "sr-only",
      key: "sr"
    }, ariaLabel)];
  }

  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": ariaLabel
  }), children);
};

PaginationLink.propTypes = propTypes$Z;
PaginationLink.defaultProps = defaultProps$V;

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = React__default.createContext({});

var propTypes$_ = {
  tag: tagPropType,
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$W = {
  tag: 'div'
};

var TabContent =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = omit(this.props, Object.keys(propTypes$_));
    var classes = mapToCssModules(classnames('tab-content', className), cssModule);
    return React__default.createElement(TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(React.Component);

polyfill(TabContent);
TabContent.propTypes = propTypes$_;
TabContent.defaultProps = defaultProps$W;

var propTypes$10 = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any
};

var propTypes$11 = {
  tag: tagPropType,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$12 = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: tagPropType,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps$Z = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread({}, Fade.defaultProps, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

  var classes = mapToCssModules(classnames(className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = mapToCssModules(classnames('close', closeClassName), cssModule);

  var alertTransition = _objectSpread({}, Fade.defaultProps, transition, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return React__default.createElement(Fade, _extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? React__default.createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, React__default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, children);
}

Alert.propTypes = propTypes$12;
Alert.defaultProps = defaultProps$Z;

var propTypes$13 = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: tagPropType,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps$_ = {
  isOpen: true,
  tag: 'div',
  fade: true,
  transition: _objectSpread({}, Fade.defaultProps, {
    unmountOnExit: true
  })
};

var propTypes$14 = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

var propTypes$15 = {
  tag: tagPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  wrapTag: tagPropType,
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  close: PropTypes.object
};

var _transitionStatusToCl;

var propTypes$16 = _objectSpread({}, reactTransitionGroup_1.propTypes, {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: tagPropType,
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
});

var defaultProps$12 = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      height: null
    };
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_assertThisInitialized(_this));
    });
    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.onEntering = function onEntering(node, isAppearing) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onEntering(node, isAppearing);
  };

  _proto.onEntered = function onEntered(node, isAppearing) {
    this.setState({
      height: null
    });
    this.props.onEntered(node, isAppearing);
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    // getting this variable triggers a reflow
    var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

    this.setState({
      height: 0
    });
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    this.setState({
      height: null
    });
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        Tag = _this$props.tag,
        isOpen = _this$props.isOpen,
        className = _this$props.className,
        navbar = _this$props.navbar,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        innerRef = _this$props.innerRef,
        otherProps = _objectWithoutPropertiesLoose(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"]);

    var height = this.state.height;
    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
      in: isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var collapseClass = getTransitionClass(status);
      var classes = mapToCssModules(classnames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = height === null ? null : {
        height: height
      };
      return React__default.createElement(Tag, _extends({}, childProps, {
        style: _objectSpread({}, childProps.style, style),
        className: classes,
        ref: _this2.props.innerRef
      }), children);
    });
  };

  return Collapse;
}(React.Component);

Collapse.propTypes = propTypes$16;
Collapse.defaultProps = defaultProps$12;

var propTypes$17 = {
  tag: tagPropType,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  action: PropTypes.bool,
  className: PropTypes.any,
  cssModule: PropTypes.object
};

var propTypes$18 = {
  tag: tagPropType,
  className: PropTypes.any,
  cssModule: PropTypes.object
};

var propTypes$19 = {
  tag: tagPropType,
  className: PropTypes.any,
  cssModule: PropTypes.object
};

var UncontrolledAlert =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: true
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledAlert.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(Alert, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  };

  return UncontrolledAlert;
}(React.Component);

var omitKeys$1 = ['defaultOpen'];

var UncontrolledButtonDropdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledButtonDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(ButtonDropdown, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$1)));
  };

  return UncontrolledButtonDropdown;
}(React.Component);
UncontrolledButtonDropdown.propTypes = _objectSpread({
  defaultOpen: PropTypes.bool
}, ButtonDropdown.propTypes);

var omitKeys$2 = ['toggleEvents', 'defaultOpen'];
var propTypes$1a = {
  defaultOpen: PropTypes.bool,
  toggler: PropTypes.string.isRequired,
  toggleEvents: PropTypes.arrayOf(PropTypes.string)
};
var defaultProps$16 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    return _this;
  }

  var _proto = UncontrolledCollapse.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);

    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  };

  _proto.toggle = function toggle(e) {
    this.setState(function (_ref) {
      var isOpen = _ref.isOpen;
      return {
        isOpen: !isOpen
      };
    });
    e.preventDefault();
  };

  _proto.render = function render() {
    return React__default.createElement(Collapse, _extends({
      isOpen: this.state.isOpen
    }, omit(this.props, omitKeys$2)));
  };

  return UncontrolledCollapse;
}(React.Component);

UncontrolledCollapse.propTypes = propTypes$1a;
UncontrolledCollapse.defaultProps = defaultProps$16;

var omitKeys$3 = ['defaultOpen'];

var UncontrolledDropdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(Dropdown, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$3)));
  };

  return UncontrolledDropdown;
}(React.Component);
UncontrolledDropdown.propTypes = _objectSpread({
  defaultOpen: PropTypes.bool
}, Dropdown.propTypes);

var omitKeys$4 = ['defaultOpen'];

var UncontrolledTooltip =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledTooltip.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(Tooltip, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$4)));
  };

  return UncontrolledTooltip;
}(React.Component);
UncontrolledTooltip.propTypes = _objectSpread({
  defaultOpen: PropTypes.bool
}, Tooltip.propTypes);

var propTypes$1b = {
  tag: tagPropType,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.string
};

var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("footer", { className: "footer" },
            React.createElement(Row, { className: "align-items-center justify-content-xl-between" },
                React.createElement(Col, { xl: "6" },
                    React.createElement("div", { className: "copyright text-center text-xl-left text-muted" },
                        "\u00A9 2019",
                        " ",
                        React.createElement("a", { className: "font-weight-bold ml-1", href: "#", rel: "noopener noreferrer", target: "_blank" }, "All InvestX"))))));
    };
    return Footer;
}(React.Component));

var AdminNavbar = /** @class */ (function (_super) {
    __extends(AdminNavbar, _super);
    function AdminNavbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            user: {
                name: 'João Netto'
            }
        };
        return _this;
    }
    AdminNavbar.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Navbar, { className: "navbar-top navbar-dark", expand: "md", id: "navbar-main" },
                React.createElement(Container, { fluid: true },
                    React.createElement("h1", { className: "text-white" }, this.props.brandText),
                    React.createElement(Nav, { className: "align-items-center d-none d-md-flex", navbar: true },
                        React.createElement(UncontrolledDropdown, { nav: true },
                            React.createElement(DropdownToggle, { className: "pr-0", nav: true },
                                React.createElement(Media, { className: "align-items-center" },
                                    React.createElement("span", { className: "avatar avatar-sm rounded-circle" },
                                        React.createElement("img", { alt: "...", src: "./assets/img/theme/team-1-800x800.jpg" })),
                                    React.createElement(Media, { className: "ml-2 d-none d-lg-block" },
                                        React.createElement("span", { className: "mb-0 text-sm font-weight-bold" }, this.state.user.name)))),
                            React.createElement(DropdownMenu, { className: "dropdown-menu-arrow", right: true },
                                React.createElement(DropdownItem, { className: "noti-title", header: true, tag: "div" },
                                    React.createElement("h6", { className: "text-overflow m-0" }, "Welcome!")),
                                React.createElement(DropdownItem, { to: "/admin/user-profile" },
                                    React.createElement("i", { className: "ni ni-single-02" }),
                                    React.createElement("span", null, "Meu perfil")),
                                React.createElement(DropdownItem, { to: "/admin/user-profile" },
                                    React.createElement("i", { className: "ni ni-settings-gear-65" }),
                                    React.createElement("span", null, "Ajustes")),
                                React.createElement(DropdownItem, { divider: true }),
                                React.createElement(DropdownItem, { href: "#pablo", onClick: function (e) { return e.preventDefault(); } },
                                    React.createElement("i", { className: "ni ni-user-run" }),
                                    React.createElement("span", null, "Logout")))))))));
    };
    return AdminNavbar;
}(React.Component));

var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapseOpen: false
        };
        // verifies if routeName is the one active (in browser input)
        _this.activeRoute = function (routeName) {
            return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
        };
        // toggles collapse between opened and closed (true/false)
        _this.toggleCollapse = function () {
            _this.setState({
                collapseOpen: !_this.state.collapseOpen
            });
        };
        // closes the collapse
        _this.closeCollapse = function () {
            _this.setState({
                collapseOpen: false
            });
        };
        // creates the links that appear in the left menu / Sidebar
        _this.createLinks = function (routes) {
            return routes.map(function (prop, key) {
                return (React.createElement(NavItem, { key: key },
                    React.createElement("a", { className: "nav-link", href: prop.path, onClick: _this.closeCollapse },
                        React.createElement("i", { className: prop.icon }),
                        prop.name)));
            });
        };
        return _this;
    }
    Sidebar.prototype.render = function () {
        var _a = this.props, routes = _a.routes, logo = _a.logo;
        var navbarBrandProps;
        if (logo && logo.innerLink) {
            navbarBrandProps = {
                to: logo.innerLink,
            };
        }
        else if (logo && logo.outterLink) {
            navbarBrandProps = {
                href: logo.outterLink,
                target: "_blank"
            };
        }
        return (React.createElement(Navbar, { className: "navbar-vertical fixed-left purple-bg", expand: "md", id: "sidenav-main" },
            React.createElement(Container, { fluid: true },
                React.createElement("button", { className: "navbar-toggler", type: "button", onClick: this.toggleCollapse },
                    React.createElement("span", { className: "navbar-toggler-icon" })),
                logo ? (React.createElement(NavbarBrand, __assign({ className: "pt-0" }, navbarBrandProps),
                    React.createElement("img", { alt: logo.imgAlt, className: "navbar-brand-img", src: logo.imgSrc }))) : null,
                React.createElement(Nav, { className: "align-items-center d-md-none" },
                    React.createElement(UncontrolledDropdown, { nav: true },
                        React.createElement(DropdownToggle, { nav: true, className: "nav-link-icon" },
                            React.createElement("i", { className: "ni ni-bell-55" })),
                        React.createElement(DropdownMenu, { "aria-labelledby": "navbar-default_dropdown_1", className: "dropdown-menu-arrow", right: true },
                            React.createElement(DropdownItem, null, "Action"),
                            React.createElement(DropdownItem, null, "Another action"),
                            React.createElement(DropdownItem, { divider: true }),
                            React.createElement(DropdownItem, null, "Something else here"))),
                    React.createElement(UncontrolledDropdown, { nav: true },
                        React.createElement(DropdownToggle, { nav: true },
                            React.createElement(Media, { className: "align-items-center" },
                                React.createElement("span", { className: "avatar avatar-sm rounded-circle" },
                                    React.createElement("img", { alt: "...", src: "./assets/img/theme/team-1-800x800.jpg" })))),
                        React.createElement(DropdownMenu, { className: "dropdown-menu-arrow", right: true },
                            React.createElement(DropdownItem, { className: "noti-title", header: true, tag: "div" },
                                React.createElement("h6", { className: "text-overflow m-0" }, "Welcome!")),
                            React.createElement(DropdownItem, { to: "/admin/user-profile" },
                                React.createElement("i", { className: "ni ni-single-02" }),
                                React.createElement("span", null, "My profile")),
                            React.createElement(DropdownItem, { to: "/admin/user-profile" },
                                React.createElement("i", { className: "ni ni-settings-gear-65" }),
                                React.createElement("span", null, "Settings")),
                            React.createElement(DropdownItem, { to: "/admin/user-profile" },
                                React.createElement("i", { className: "ni ni-calendar-grid-58" }),
                                React.createElement("span", null, "Activity")),
                            React.createElement(DropdownItem, { to: "/admin/user-profile" },
                                React.createElement("i", { className: "ni ni-support-16" }),
                                React.createElement("span", null, "Support")),
                            React.createElement(DropdownItem, { divider: true }),
                            React.createElement(DropdownItem, { href: "#pablo", onClick: function (e) { return e.preventDefault(); } },
                                React.createElement("i", { className: "ni ni-user-run" }),
                                React.createElement("span", null, "Logout"))))),
                React.createElement(Collapse, { navbar: true, isOpen: this.state.collapseOpen },
                    React.createElement("div", { className: "navbar-collapse-header d-md-none" },
                        React.createElement(Row, null,
                            React.createElement(Col, { className: "collapse-close", xs: "6" },
                                React.createElement("button", { className: "navbar-toggler", type: "button", onClick: this.toggleCollapse },
                                    React.createElement("span", null),
                                    React.createElement("span", null))))),
                    React.createElement(Form, { className: "mt-4 mb-3 d-md-none" },
                        React.createElement(InputGroup, { className: "input-group-rounded input-group-merge" },
                            React.createElement(Input, { "aria-label": "Search", className: "form-control-rounded form-control-prepended", placeholder: "Search", type: "search" }),
                            React.createElement(InputGroupAddon, { addonType: "prepend" },
                                React.createElement(InputGroupText, null,
                                    React.createElement("span", { className: "fa fa-search" }))))),
                    React.createElement(Nav, { navbar: true }, this.createLinks(routes))))));
    };
    return Sidebar;
}(React.Component));

var UserHeader = /** @class */ (function (_super) {
    __extends(UserHeader, _super);
    function UserHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserHeader.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "header pb-8 pt-5 pt-lg-8 d-flex align-items-center", style: {
                    minHeight: 380,
                    marginBottom: '-16rem',
                    backgroundImage: "url(./assets/img/theme/img-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                } },
                React.createElement("span", { className: "mask bg-gradient-default opacity-7" }))));
    };
    return UserHeader;
}(React.Component));

var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(props) {
        var _this = _super.call(this, props) || this;
        _this.getBrandText = function () {
            var routes = _this.state.routes;
            for (var i = 0; i < routes.length; i++) {
                if (window.location.pathname.indexOf(routes[i].path) !== -1) {
                    return routes[i].name;
                }
            }
            return "";
        };
        _this.state = { routes: [] };
        return _this;
    }
    Layout.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.setState;
                        _b = {};
                        return [4 /*yield*/, this.props.routesFactory()];
                    case 1:
                        _a.apply(this, [(_b.routes = _c.sent(),
                                _b)]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Layout.prototype.componentDidUpdate = function () {
        document.documentElement.scrollTop = 0;
        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
        // (this.refs.mainContent as HTMLDivElement).scrollTop = 0;
    };
    Layout.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Sidebar, __assign({}, this.props, { routes: this.state.routes, bgColor: '', logo: {
                    innerLink: "/admin/index",
                    imgSrc: "https://raw.githubusercontent.com/riquenunes/all-investx-components/master/src/assets/img/brand/logo.png?token=AAYP4NFILUTA72GUH42OGL245Q4TK",
                    imgAlt: "Logo AllInvest X"
                } })),
            React.createElement("div", { className: "main-content" },
                React.createElement(AdminNavbar, __assign({}, this.props, { brandText: this.getBrandText() })),
                React.createElement(UserHeader, null),
                this.props.children,
                React.createElement(Container, { fluid: true },
                    React.createElement(Footer, null)))));
    };
    return Layout;
}(React.Component));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/*!\n\n=========================================================\n* Argon Dashboard - v1.0.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/argon-dashboard\n* Copyright 2018 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n*/\n.pos-ab {\n  font-size: 19px;\n  position: absolute;\n  top: 12px; }\n\n.toggler {\n  top: 14px !important;\n  left: -10px !important; }\n\n:root {\n  --blue: #5e72e4;\n  --indigo: #5603ad;\n  --purple: #161A40;\n  --pink: #f3a4b5;\n  --red: #f5365c;\n  --orange: #fb6340;\n  --yellow: #ffd600;\n  --green: #2dce89;\n  --teal: #11cdef;\n  --cyan: #2bffc6;\n  --white: #fff;\n  --gray: #8898aa;\n  --gray-dark: #32325d;\n  --light: #ced4da;\n  --lighter: #e9ecef;\n  --primary: #5e72e4;\n  --secondary: #f7fafc;\n  --success: #2dce89;\n  --info: #11cdef;\n  --warning: #fb6340;\n  --danger: #f5365c;\n  --light: #adb5bd;\n  --dark: #212529;\n  --default: #172b4d;\n  --white: #fff;\n  --neutral: #fff;\n  --darker: black;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: Open Sans, sans-serif;\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: Open Sans, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #525f7f;\n  text-align: left;\n  background-color: #f8f9fe; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 600; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #5e72e4;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #233dd2;\n    text-decoration: none; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  color: #8898aa;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 600;\n  line-height: 1.5;\n  color: #32325d; }\n\nh1, .h1 {\n  font-size: 1.625rem; }\n\nh2, .h2 {\n  font-size: 1.25rem; }\n\nh3, .h3 {\n  font-size: 1.0625rem; }\n\nh4, .h4 {\n  font-size: 0.9375rem; }\n\nh5, .h5 {\n  font-size: 0.8125rem; }\n\nh6, .h6 {\n  font-size: 0.625rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 3.3rem;\n  font-weight: 600;\n  line-height: 1.5; }\n\n.display-2 {\n  font-size: 2.75rem;\n  font-weight: 600;\n  line-height: 1.5; }\n\n.display-3 {\n  font-size: 2.1875rem;\n  font-weight: 600;\n  line-height: 1.5; }\n\n.display-4 {\n  font-size: 1.6275rem;\n  font-weight: 600;\n  line-height: 1.5; }\n\nhr {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #8898aa; }\n  .blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #f8f9fe;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #8898aa; }\n\ncode {\n  font-size: 87.5%;\n  color: #f3a4b5;\n  word-break: break-word; }\n  a > code {\n    color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 600;\n    box-shadow: none; }\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\n  pre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  order: -1; }\n\n.order-last {\n  order: 13; }\n\n.order-0 {\n  order: 0; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n  .table th,\n  .table td {\n    padding: 1rem;\n    vertical-align: top;\n    border-top: 1px solid #e9ecef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #e9ecef; }\n  .table tbody + tbody {\n    border-top: 2px solid #e9ecef; }\n  .table .table {\n    background-color: #f8f9fe; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.5rem; }\n\n.table-bordered {\n  border: 1px solid #e9ecef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #e9ecef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  background-color: #f6f9fc; }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #d2d8f7; }\n\n.table-hover .table-primary:hover {\n  background-color: #bcc5f3; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #bcc5f3; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #fdfefe; }\n\n.table-hover .table-secondary:hover {\n  background-color: #ecf6f6; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #ecf6f6; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c4f1de; }\n\n.table-hover .table-success:hover {\n  background-color: #afecd2; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #afecd2; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bcf1fb; }\n\n.table-hover .table-info:hover {\n  background-color: #a4ecfa; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a4ecfa; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fed3ca; }\n\n.table-hover .table-warning:hover {\n  background-color: #febeb1; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #febeb1; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #fcc7d1; }\n\n.table-hover .table-danger:hover {\n  background-color: #fbafbd; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fbafbd; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #e8eaed; }\n\n.table-hover .table-light:hover {\n  background-color: #dadde2; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #dadde2; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c1c2c3; }\n\n.table-hover .table-dark:hover {\n  background-color: #b4b5b6; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b4b5b6; }\n\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #bec4cd; }\n\n.table-hover .table-default:hover {\n  background-color: #b0b7c2; }\n  .table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #b0b7c2; }\n\n.table-white,\n.table-white > th,\n.table-white > td {\n  background-color: white; }\n\n.table-hover .table-white:hover {\n  background-color: #f2f2f2; }\n  .table-hover .table-white:hover > td,\n  .table-hover .table-white:hover > th {\n    background-color: #f2f2f2; }\n\n.table-neutral,\n.table-neutral > th,\n.table-neutral > td {\n  background-color: white; }\n\n.table-hover .table-neutral:hover {\n  background-color: #f2f2f2; }\n  .table-hover .table-neutral:hover > td,\n  .table-hover .table-neutral:hover > th {\n    background-color: #f2f2f2; }\n\n.table-darker,\n.table-darker > th,\n.table-darker > td {\n  background-color: #b8b8b8; }\n\n.table-hover .table-darker:hover {\n  background-color: #ababab; }\n  .table-hover .table-darker:hover > td,\n  .table-hover .table-darker:hover > th {\n    background-color: #ababab; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #f6f9fc; }\n\n.table-hover .table-active:hover {\n  background-color: #e3ecf6; }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: #e3ecf6; }\n\n.table .thead-dark th {\n  color: #f8f9fe;\n  background-color: #172b4d;\n  border-color: #1f3a68; }\n\n.table .thead-light th {\n  color: #8898aa;\n  background-color: #f6f9fc;\n  border-color: #e9ecef; }\n\n.table-dark {\n  color: #f8f9fe;\n  background-color: #172b4d; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #1f3a68; }\n  .table-dark.table-bordered {\n    border: 0; }\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n  .table-responsive > .table-bordered {\n    border: 0; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(2.75rem + 2px);\n  padding: 0.625rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #8898aa;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #cad1d7;\n  border-radius: 0.375rem;\n  box-shadow: none;\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .form-control {\n      transition: none; } }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    color: #8898aa;\n    background-color: #fff;\n    border-color: rgba(50, 151, 211, 0.25);\n    outline: 0;\n    box-shadow: none, none; }\n  .form-control::placeholder {\n    color: #adb5bd;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\nselect.form-control:focus::-ms-value {\n  color: #8898aa;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n\n.col-form-label {\n  padding-top: calc(0.625rem + 1px);\n  padding-bottom: calc(0.625rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.875rem + 1px);\n  padding-bottom: calc(0.875rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #525f7f;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  height: calc(1.8125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.25rem; }\n\n.form-control-lg {\n  height: calc(3.625rem + 2px);\n  padding: 0.875rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.4375rem; }\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto; }\n\ntextarea.form-control {\n  height: auto; }\n\n.form-group {\n  margin-bottom: 1.5rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n  .form-check-input:disabled ~ .form-check-label {\n    color: #8898aa; }\n\n.form-check-label {\n  margin-bottom: 0; }\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n  .form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #2dce89; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(45, 206, 137, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #2dce89; }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus {\n    border-color: #2dce89; }\n  .was-validated .form-control:valid ~ .valid-feedback,\n  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n  .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback,\n  .was-validated\n  .custom-select:valid ~ .valid-tooltip,\n  .custom-select.is-valid ~ .valid-feedback,\n  .custom-select.is-valid ~ .valid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #2dce89; }\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #2dce89; }\n  .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    background-color: #93e7c3;\n    border-color: #93e7c3; }\n\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #54daa1;\n  border-color: #93e7c3; }\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #f8f9fe, 0 0 0 0 rgba(45, 206, 137, 0.25); }\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #2dce89; }\n  .was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0 rgba(45, 206, 137, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #fb6340; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(251, 99, 64, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #fb6340; }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus {\n    border-color: #fb6340; }\n  .was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #fb6340; }\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #fb6340; }\n  .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    background-color: #fec9bd;\n    border-color: #fec9bd; }\n\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #fc8c72;\n  border-color: #fec9bd; }\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #f8f9fe, 0 0 0 0 rgba(251, 99, 64, 0.25); }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #fb6340; }\n  .was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0 rgba(251, 99, 64, 0.25); }\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group,\n    .form-inline .custom-select {\n      width: auto; }\n    .form-inline .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      align-items: center;\n      justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.625rem 1.25rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.375rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none; } }\n  .btn:hover, .btn:focus {\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08); }\n  .btn.disabled, .btn:disabled {\n    opacity: 0.65;\n    box-shadow: none; }\n  .btn:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n  .btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\n    box-shadow: none; }\n    .btn:not(:disabled):not(.disabled):active:focus, .btn:not(:disabled):not(.disabled).active:focus {\n      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08), none; }\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #5e72e4;\n  border-color: #5e72e4;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #5e72e4;\n    border-color: #5e72e4; }\n  .btn-primary:focus, .btn-primary.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(94, 114, 228, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    color: #fff;\n    background-color: #5e72e4;\n    border-color: #5e72e4; }\n  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #324cdd;\n    border-color: #5e72e4; }\n    .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(94, 114, 228, 0.5); }\n\n.btn-secondary {\n  color: #212529;\n  background-color: #f7fafc;\n  border-color: #f7fafc;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-secondary:hover {\n    color: #212529;\n    background-color: #f7fafc;\n    border-color: #f7fafc; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(247, 250, 252, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    color: #212529;\n    background-color: #f7fafc;\n    border-color: #f7fafc; }\n  .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #212529;\n    background-color: #d2e3ee;\n    border-color: #f7fafc; }\n    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(247, 250, 252, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background-color: #2dce89;\n  border-color: #2dce89;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #2dce89;\n    border-color: #2dce89; }\n  .btn-success:focus, .btn-success.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(45, 206, 137, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #2dce89;\n    border-color: #2dce89; }\n  .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #24a46d;\n    border-color: #2dce89; }\n    .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(45, 206, 137, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background-color: #11cdef;\n  border-color: #11cdef;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #11cdef;\n    border-color: #11cdef; }\n  .btn-info:focus, .btn-info.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(17, 205, 239, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #11cdef;\n    border-color: #11cdef; }\n  .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #0da5c0;\n    border-color: #11cdef; }\n    .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(17, 205, 239, 0.5); }\n\n.btn-warning {\n  color: #fff;\n  background-color: #fb6340;\n  border-color: #fb6340;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #fb6340;\n    border-color: #fb6340; }\n  .btn-warning:focus, .btn-warning.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(251, 99, 64, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    color: #fff;\n    background-color: #fb6340;\n    border-color: #fb6340; }\n  .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #fa3a0e;\n    border-color: #fb6340; }\n    .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(251, 99, 64, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background-color: #f5365c;\n  border-color: #f5365c;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #f5365c;\n    border-color: #f5365c; }\n  .btn-danger:focus, .btn-danger.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(245, 54, 92, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    color: #fff;\n    background-color: #f5365c;\n    border-color: #f5365c; }\n  .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #ec0c38;\n    border-color: #f5365c; }\n    .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(245, 54, 92, 0.5); }\n\n.btn-light {\n  color: #fff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-light:hover {\n    color: #fff;\n    background-color: #adb5bd;\n    border-color: #adb5bd; }\n  .btn-light:focus, .btn-light.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(173, 181, 189, 0.5); }\n  .btn-light.disabled, .btn-light:disabled {\n    color: #fff;\n    background-color: #adb5bd;\n    border-color: #adb5bd; }\n  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #fff;\n    background-color: #919ca6;\n    border-color: #adb5bd; }\n    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(173, 181, 189, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n  .btn-dark:focus, .btn-dark.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(33, 37, 41, 0.5); }\n  .btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n  .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #0a0c0d;\n    border-color: #212529; }\n    .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(33, 37, 41, 0.5); }\n\n.btn-default {\n  color: #fff;\n  background-color: #172b4d;\n  border-color: #172b4d;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-default:hover {\n    color: #fff;\n    background-color: #172b4d;\n    border-color: #172b4d; }\n  .btn-default:focus, .btn-default.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(23, 43, 77, 0.5); }\n  .btn-default.disabled, .btn-default:disabled {\n    color: #fff;\n    background-color: #172b4d;\n    border-color: #172b4d; }\n  .btn-default:not(:disabled):not(.disabled):active, .btn-default:not(:disabled):not(.disabled).active,\n  .show > .btn-default.dropdown-toggle {\n    color: #fff;\n    background-color: #0b1526;\n    border-color: #172b4d; }\n    .btn-default:not(:disabled):not(.disabled):active:focus, .btn-default:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-default.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(23, 43, 77, 0.5); }\n\n.btn-white {\n  color: #212529;\n  background-color: #fff;\n  border-color: #fff;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-white:hover {\n    color: #212529;\n    background-color: white;\n    border-color: white; }\n  .btn-white:focus, .btn-white.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(255, 255, 255, 0.5); }\n  .btn-white.disabled, .btn-white:disabled {\n    color: #212529;\n    background-color: #fff;\n    border-color: #fff; }\n  .btn-white:not(:disabled):not(.disabled):active, .btn-white:not(:disabled):not(.disabled).active,\n  .show > .btn-white.dropdown-toggle {\n    color: #212529;\n    background-color: #e6e6e6;\n    border-color: white; }\n    .btn-white:not(:disabled):not(.disabled):active:focus, .btn-white:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-white.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(255, 255, 255, 0.5); }\n\n.btn-neutral {\n  color: #212529;\n  background-color: #fff;\n  border-color: #fff;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-neutral:hover {\n    color: #212529;\n    background-color: white;\n    border-color: white; }\n  .btn-neutral:focus, .btn-neutral.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(255, 255, 255, 0.5); }\n  .btn-neutral.disabled, .btn-neutral:disabled {\n    color: #212529;\n    background-color: #fff;\n    border-color: #fff; }\n  .btn-neutral:not(:disabled):not(.disabled):active, .btn-neutral:not(:disabled):not(.disabled).active,\n  .show > .btn-neutral.dropdown-toggle {\n    color: #212529;\n    background-color: #e6e6e6;\n    border-color: white; }\n    .btn-neutral:not(:disabled):not(.disabled):active:focus, .btn-neutral:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-neutral.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(255, 255, 255, 0.5); }\n\n.btn-darker {\n  color: #fff;\n  background-color: black;\n  border-color: black;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-darker:hover {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n  .btn-darker:focus, .btn-darker.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(0, 0, 0, 0.5); }\n  .btn-darker.disabled, .btn-darker:disabled {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n  .btn-darker:not(:disabled):not(.disabled):active, .btn-darker:not(:disabled):not(.disabled).active,\n  .show > .btn-darker.dropdown-toggle {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n    .btn-darker:not(:disabled):not(.disabled):active:focus, .btn-darker:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-darker.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(0, 0, 0, 0.5); }\n\n.btn-outline-primary {\n  color: #5e72e4;\n  background-color: transparent;\n  background-image: none;\n  border-color: #5e72e4; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #5e72e4;\n    border-color: #5e72e4; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 0 rgba(94, 114, 228, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #5e72e4;\n    background-color: transparent; }\n  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #5e72e4;\n    border-color: #5e72e4; }\n    .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(94, 114, 228, 0.5); }\n\n.btn-outline-secondary {\n  color: #f7fafc;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f7fafc; }\n  .btn-outline-secondary:hover {\n    color: #212529;\n    background-color: #f7fafc;\n    border-color: #f7fafc; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 0 rgba(247, 250, 252, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #f7fafc;\n    background-color: transparent; }\n  .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #212529;\n    background-color: #f7fafc;\n    border-color: #f7fafc; }\n    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(247, 250, 252, 0.5); }\n\n.btn-outline-success {\n  color: #2dce89;\n  background-color: transparent;\n  background-image: none;\n  border-color: #2dce89; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #2dce89;\n    border-color: #2dce89; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 0 rgba(45, 206, 137, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #2dce89;\n    background-color: transparent; }\n  .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #2dce89;\n    border-color: #2dce89; }\n    .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(45, 206, 137, 0.5); }\n\n.btn-outline-info {\n  color: #11cdef;\n  background-color: transparent;\n  background-image: none;\n  border-color: #11cdef; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #11cdef;\n    border-color: #11cdef; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 0 rgba(17, 205, 239, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #11cdef;\n    background-color: transparent; }\n  .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #11cdef;\n    border-color: #11cdef; }\n    .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(17, 205, 239, 0.5); }\n\n.btn-outline-warning {\n  color: #fb6340;\n  background-color: transparent;\n  background-image: none;\n  border-color: #fb6340; }\n  .btn-outline-warning:hover {\n    color: #fff;\n    background-color: #fb6340;\n    border-color: #fb6340; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 0 rgba(251, 99, 64, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #fb6340;\n    background-color: transparent; }\n  .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #fb6340;\n    border-color: #fb6340; }\n    .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(251, 99, 64, 0.5); }\n\n.btn-outline-danger {\n  color: #f5365c;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f5365c; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #f5365c;\n    border-color: #f5365c; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 0 rgba(245, 54, 92, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #f5365c;\n    background-color: transparent; }\n  .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #f5365c;\n    border-color: #f5365c; }\n    .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(245, 54, 92, 0.5); }\n\n.btn-outline-light {\n  color: #adb5bd;\n  background-color: transparent;\n  background-image: none;\n  border-color: #adb5bd; }\n  .btn-outline-light:hover {\n    color: #fff;\n    background-color: #adb5bd;\n    border-color: #adb5bd; }\n  .btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5); }\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #adb5bd;\n    background-color: transparent; }\n  .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #fff;\n    background-color: #adb5bd;\n    border-color: #adb5bd; }\n    .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5); }\n\n.btn-outline-dark {\n  color: #212529;\n  background-color: transparent;\n  background-image: none;\n  border-color: #212529; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5); }\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #212529;\n    background-color: transparent; }\n  .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n    .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5); }\n\n.btn-outline-default {\n  color: #172b4d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #172b4d; }\n  .btn-outline-default:hover {\n    color: #fff;\n    background-color: #172b4d;\n    border-color: #172b4d; }\n  .btn-outline-default:focus, .btn-outline-default.focus {\n    box-shadow: 0 0 0 0 rgba(23, 43, 77, 0.5); }\n  .btn-outline-default.disabled, .btn-outline-default:disabled {\n    color: #172b4d;\n    background-color: transparent; }\n  .btn-outline-default:not(:disabled):not(.disabled):active, .btn-outline-default:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-default.dropdown-toggle {\n    color: #fff;\n    background-color: #172b4d;\n    border-color: #172b4d; }\n    .btn-outline-default:not(:disabled):not(.disabled):active:focus, .btn-outline-default:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-default.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(23, 43, 77, 0.5); }\n\n.btn-outline-white {\n  color: #fff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #fff; }\n  .btn-outline-white:hover {\n    color: #212529;\n    background-color: #fff;\n    border-color: #fff; }\n  .btn-outline-white:focus, .btn-outline-white.focus {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); }\n  .btn-outline-white.disabled, .btn-outline-white:disabled {\n    color: #fff;\n    background-color: transparent; }\n  .btn-outline-white:not(:disabled):not(.disabled):active, .btn-outline-white:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-white.dropdown-toggle {\n    color: #212529;\n    background-color: #fff;\n    border-color: #fff; }\n    .btn-outline-white:not(:disabled):not(.disabled):active:focus, .btn-outline-white:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-white.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); }\n\n.btn-outline-neutral {\n  color: #fff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #fff; }\n  .btn-outline-neutral:hover {\n    color: #212529;\n    background-color: #fff;\n    border-color: #fff; }\n  .btn-outline-neutral:focus, .btn-outline-neutral.focus {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); }\n  .btn-outline-neutral.disabled, .btn-outline-neutral:disabled {\n    color: #fff;\n    background-color: transparent; }\n  .btn-outline-neutral:not(:disabled):not(.disabled):active, .btn-outline-neutral:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-neutral.dropdown-toggle {\n    color: #212529;\n    background-color: #fff;\n    border-color: #fff; }\n    .btn-outline-neutral:not(:disabled):not(.disabled):active:focus, .btn-outline-neutral:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-neutral.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); }\n\n.btn-outline-darker {\n  color: black;\n  background-color: transparent;\n  background-image: none;\n  border-color: black; }\n  .btn-outline-darker:hover {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n  .btn-outline-darker:focus, .btn-outline-darker.focus {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5); }\n  .btn-outline-darker.disabled, .btn-outline-darker:disabled {\n    color: black;\n    background-color: transparent; }\n  .btn-outline-darker:not(:disabled):not(.disabled):active, .btn-outline-darker:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-darker.dropdown-toggle {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n    .btn-outline-darker:not(:disabled):not(.disabled):active:focus, .btn-outline-darker:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-darker.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #5e72e4;\n  background-color: transparent; }\n  .btn-link:hover {\n    color: #233dd2;\n    text-decoration: none;\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-link:focus, .btn-link.focus {\n    text-decoration: none;\n    border-color: transparent;\n    box-shadow: none; }\n  .btn-link:disabled, .btn-link.disabled {\n    color: #8898aa;\n    pointer-events: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.875rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.4375rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.375rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n  .btn-block + .btn-block {\n    margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  transition: opacity 0.15s linear; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .fade {\n      transition: none; } }\n  .fade:not(.show) {\n    opacity: 0; }\n\n.collapse:not(.show) {\n  display: none; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .collapsing {\n      transition: none; } }\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #525f7f;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0 solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.4375rem;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1); }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n\n.dropleft .dropdown-toggle::after {\n  display: none; }\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n\n.dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\n  right: auto;\n  bottom: auto; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n  .dropdown-item:hover, .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f6f9fc; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #5e72e4; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #8898aa;\n    background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #8898aa;\n  white-space: nowrap; }\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 0 1 auto; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n  .btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split {\n  padding-right: 0.9375rem;\n  padding-left: 0.9375rem; }\n  .dropdown-toggle-split::after,\n  .dropup .dropdown-toggle-split::after,\n  .dropright .dropdown-toggle-split::after {\n    margin-left: 0; }\n  .dropleft .dropdown-toggle-split::before {\n    margin-right: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group.show .dropdown-toggle {\n  box-shadow: none; }\n  .btn-group.show .dropdown-toggle.btn-link {\n    box-shadow: none; }\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n  .btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n  .btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%; }\n  .input-group > .form-control,\n  .input-group > .custom-select,\n  .input-group > .custom-file {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n    .input-group > .form-control + .form-control,\n    .input-group > .form-control + .custom-select,\n    .input-group > .form-control + .custom-file,\n    .input-group > .custom-select + .form-control,\n    .input-group > .custom-select + .custom-select,\n    .input-group > .custom-select + .custom-file,\n    .input-group > .custom-file + .form-control,\n    .input-group > .custom-file + .custom-select,\n    .input-group > .custom-file + .custom-file {\n      margin-left: -1px; }\n  .input-group > .form-control:focus,\n  .input-group > .custom-select:focus,\n  .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n    z-index: 3; }\n  .input-group > .custom-file .custom-file-input:focus {\n    z-index: 4; }\n  .input-group > .form-control:not(:last-child),\n  .input-group > .custom-select:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .input-group > .form-control:not(:first-child),\n  .input-group > .custom-select:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .input-group > .custom-file {\n    display: flex;\n    align-items: center; }\n    .input-group > .custom-file:not(:last-child) .custom-file-label,\n    .input-group > .custom-file:not(:last-child) .custom-file-label::after {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n    .input-group > .custom-file:not(:first-child) .custom-file-label {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n\n.input-group-prepend,\n.input-group-append {\n  display: flex; }\n  .input-group-prepend .btn,\n  .input-group-append .btn {\n    position: relative;\n    z-index: 2; }\n  .input-group-prepend .btn + .btn,\n  .input-group-prepend .btn + .input-group-text,\n  .input-group-prepend .input-group-text + .input-group-text,\n  .input-group-prepend .input-group-text + .btn,\n  .input-group-append .btn + .btn,\n  .input-group-append .btn + .input-group-text,\n  .input-group-append .input-group-text + .input-group-text,\n  .input-group-append .input-group-text + .btn {\n    margin-left: -1px; }\n\n.input-group-prepend {\n  margin-right: -1px; }\n\n.input-group-append {\n  margin-left: -1px; }\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.625rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #adb5bd;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #fff;\n  border: 1px solid #cad1d7;\n  border-radius: 0.375rem; }\n  .input-group-text input[type=\"radio\"],\n  .input-group-text input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  height: calc(3.625rem + 2px);\n  padding: 0.875rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.4375rem; }\n\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  height: calc(1.8125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.25rem; }\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.75rem; }\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #5e72e4;\n    box-shadow: none; }\n  .custom-control-input:focus ~ .custom-control-label::before {\n    box-shadow: none; }\n  .custom-control-input:active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #5e72e4;\n    box-shadow: none; }\n  .custom-control-input:disabled ~ .custom-control-label {\n    color: #8898aa; }\n    .custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e9ecef; }\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0; }\n  .custom-control-label::before {\n    position: absolute;\n    top: 0.125rem;\n    left: -1.75rem;\n    display: block;\n    width: 1.25rem;\n    height: 1.25rem;\n    pointer-events: none;\n    content: \"\";\n    user-select: none;\n    background-color: #fff;\n    box-shadow: none; }\n  .custom-control-label::after {\n    position: absolute;\n    top: 0.125rem;\n    left: -1.75rem;\n    display: block;\n    width: 1.25rem;\n    height: 1.25rem;\n    content: \"\";\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 50% 50%; }\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #5e72e4; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #5e72e4;\n  box-shadow: none; }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(94, 114, 228, 0.5); }\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(94, 114, 228, 0.5); }\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #5e72e4; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(94, 114, 228, 0.5); }\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #8898aa;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%2332325d' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #cad1d7;\n  border-radius: 0.375rem;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  appearance: none; }\n  .custom-select:focus {\n    border-color: rgba(50, 151, 211, 0.25);\n    outline: 0;\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 0 0 rgba(50, 151, 211, 0.5); }\n    .custom-select:focus::-ms-value {\n      color: #8898aa;\n      background-color: #fff; }\n  .custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n  .custom-select:disabled {\n    color: #8898aa;\n    background-color: #e9ecef; }\n  .custom-select::-ms-expand {\n    opacity: 0; }\n\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n\n.custom-select-lg {\n  height: calc(3.625rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.75rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.75rem + 2px);\n  margin: 0;\n  opacity: 0; }\n  .custom-file-input:focus ~ .custom-file-label {\n    border-color: rgba(50, 151, 211, 0.25);\n    box-shadow: none; }\n    .custom-file-input:focus ~ .custom-file-label::after {\n      border-color: rgba(50, 151, 211, 0.25); }\n  .custom-file-input:disabled ~ .custom-file-label {\n    background-color: #e9ecef; }\n  .custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.75rem + 2px);\n  padding: 0.625rem 0.75rem;\n  line-height: 1.5;\n  color: #8898aa;\n  background-color: #fff;\n  border: 1px solid #cad1d7;\n  border-radius: 0.375rem;\n  box-shadow: none; }\n  .custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: 2.75rem;\n    padding: 0.625rem 0.75rem;\n    line-height: 1.5;\n    color: #8898aa;\n    content: \"Browse\";\n    background-color: #fff;\n    border-left: 1px solid #cad1d7;\n    border-radius: 0 0.375rem 0.375rem 0; }\n\n.custom-range {\n  width: 100%;\n  padding-left: 0;\n  background-color: transparent;\n  appearance: none; }\n  .custom-range:focus {\n    outline: none; }\n    .custom-range:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px #f8f9fe, none; }\n    .custom-range:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px #f8f9fe, none; }\n    .custom-range:focus::-ms-thumb {\n      box-shadow: 0 0 0 1px #f8f9fe, none; }\n  .custom-range::-moz-focus-outer {\n    border: 0; }\n  .custom-range::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background-color: #5e72e4;\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range::-webkit-slider-thumb {\n        transition: none; } }\n    .custom-range::-webkit-slider-thumb:active {\n      background-color: #f7f8fe; }\n  .custom-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem;\n    box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1); }\n  .custom-range::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background-color: #5e72e4;\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range::-moz-range-thumb {\n        transition: none; } }\n    .custom-range::-moz-range-thumb:active {\n      background-color: #f7f8fe; }\n  .custom-range::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem;\n    box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1); }\n  .custom-range::-ms-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 0;\n    margin-right: 0;\n    margin-left: 0;\n    background-color: #5e72e4;\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range::-ms-thumb {\n        transition: none; } }\n    .custom-range::-ms-thumb:active {\n      background-color: #f7f8fe; }\n  .custom-range::-ms-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: 0.5rem;\n    box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1); }\n  .custom-range::-ms-fill-lower {\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range::-ms-fill-upper {\n    margin-right: 15px;\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .custom-control-label::before,\n    .custom-file-label,\n    .custom-select {\n      transition: none; } }\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.25rem 0.75rem; }\n  .nav-link:hover, .nav-link:focus {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #8898aa; }\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n  .nav-tabs .nav-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem; }\n    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n    .nav-tabs .nav-link.disabled {\n      color: #8898aa;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #525f7f;\n    background-color: #f8f9fe;\n    border-color: #dee2e6 #dee2e6 #f8f9fe; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.375rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #5e72e4; }\n\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem; }\n  .navbar > .container,\n  .navbar > .container-fluid {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.0625rem;\n  padding-bottom: 0.0625rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem; }\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: #161A40;\n  border: 1px solid transparent;\n  border-radius: 0.375rem; }\n  .navbar-toggler:hover, .navbar-toggler:focus {\n    text-decoration: none; }\n  .navbar-toggler:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 1rem;\n        padding-left: 1rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 1rem;\n        padding-left: 1rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 1rem;\n        padding-left: 1rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 1rem;\n        padding-left: 1rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: 1rem;\n      padding-left: 1rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    flex-wrap: nowrap; }\n  .navbar-expand .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: transparent; }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n    .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: rgba(255, 255, 255, 0.65); }\n  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: rgba(255, 255, 255, 0.65); }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.95); }\n  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.65); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: rgba(255, 255, 255, 0.65); }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.95);\n  border-color: transparent; }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.95)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.95); }\n  .navbar-dark .navbar-text a {\n    color: rgba(255, 255, 255, 0.65); }\n    .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n      color: rgba(255, 255, 255, 0.65); }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 0.375rem; }\n  .card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n  .card > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem; }\n  .card > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem; }\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1.5rem; }\n\n.card-title {\n  margin-bottom: 1.25rem; }\n\n.card-subtitle {\n  margin-top: -0.625rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.5rem; }\n\n.card-header {\n  padding: 1.25rem 1.5rem;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05); }\n  .card-header:first-child {\n    border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0; }\n  .card-header + .list-group .list-group-item:first-child {\n    border-top: 0; }\n\n.card-footer {\n  padding: 1.25rem 1.5rem;\n  background-color: #fff;\n  border-top: 1px solid rgba(0, 0, 0, 0.05); }\n  .card-footer:last-child {\n    border-radius: 0 0 calc(0.375rem - 1px) calc(0.375rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.75rem;\n  margin-bottom: -1.25rem;\n  margin-left: -0.75rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.75rem;\n  margin-left: -0.75rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.375rem - 1px); }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.375rem - 1px);\n  border-top-right-radius: calc(0.375rem - 1px); }\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.375rem - 1px);\n  border-bottom-left-radius: calc(0.375rem - 1px); }\n\n.card-deck {\n  display: flex;\n  flex-direction: column; }\n  .card-deck .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-deck {\n      flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck .card {\n        display: flex;\n        flex: 1 0 0%;\n        flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n\n.card-group {\n  display: flex;\n  flex-direction: column; }\n  .card-group > .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-group {\n      flex-flow: row wrap; }\n      .card-group > .card {\n        flex: 1 0 0%;\n        margin-bottom: 0; }\n        .card-group > .card + .card {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group > .card:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group > .card:first-child .card-img-top,\n          .card-group > .card:first-child .card-header {\n            border-top-right-radius: 0; }\n          .card-group > .card:first-child .card-img-bottom,\n          .card-group > .card:first-child .card-footer {\n            border-bottom-right-radius: 0; }\n        .card-group > .card:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group > .card:last-child .card-img-top,\n          .card-group > .card:last-child .card-header {\n            border-top-left-radius: 0; }\n          .card-group > .card:last-child .card-img-bottom,\n          .card-group > .card:last-child .card-footer {\n            border-bottom-left-radius: 0; }\n        .card-group > .card:only-child {\n          border-radius: 0.375rem; }\n          .card-group > .card:only-child .card-img-top,\n          .card-group > .card:only-child .card-header {\n            border-top-left-radius: 0.375rem;\n            border-top-right-radius: 0.375rem; }\n          .card-group > .card:only-child .card-img-bottom,\n          .card-group > .card:only-child .card-footer {\n            border-bottom-right-radius: 0.375rem;\n            border-bottom-left-radius: 0.375rem; }\n        .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n          border-radius: 0; }\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n            border-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 1.25rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    column-count: 3;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.accordion .card:not(:first-of-type):not(:last-of-type) {\n  border-bottom: 0;\n  border-radius: 0; }\n\n.accordion .card:not(:first-of-type) .card-header:first-child {\n  border-radius: 0; }\n\n.accordion .card:first-of-type {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.accordion .card:last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.375rem; }\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem; }\n  .breadcrumb-item + .breadcrumb-item::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    color: #8898aa;\n    content: \"/\"; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active {\n  color: #8898aa; }\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.375rem; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #8898aa;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n  .page-link:hover {\n    z-index: 2;\n    color: #8898aa;\n    text-decoration: none;\n    background-color: #dee2e6;\n    border-color: #dee2e6; }\n  .page-link:focus {\n    z-index: 2;\n    outline: 0;\n    box-shadow: none; }\n  .page-link:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.375rem;\n  border-bottom-left-radius: 0.375rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem; }\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #5e72e4;\n  border-color: #5e72e4; }\n\n.page-item.disabled .page-link {\n  color: #8898aa;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.4375rem;\n  border-bottom-left-radius: 0.4375rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.4375rem;\n  border-bottom-right-radius: 0.4375rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.35rem 0.375rem;\n  font-size: 66%;\n  font-weight: 600;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.375rem; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.875em;\n  padding-left: 0.875em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #2643e9;\n  background-color: rgba(203, 210, 246, 0.5); }\n  .badge-primary[href]:hover, .badge-primary[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #324cdd; }\n\n.badge-secondary {\n  color: #cfe3f1;\n  background-color: rgba(255, 255, 255, 0.5); }\n  .badge-secondary[href]:hover, .badge-secondary[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #d2e3ee; }\n\n.badge-success {\n  color: #1aae6f;\n  background-color: rgba(147, 231, 195, 0.5); }\n  .badge-success[href]:hover, .badge-success[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #24a46d; }\n\n.badge-info {\n  color: #03acca;\n  background-color: rgba(136, 230, 247, 0.5); }\n  .badge-info[href]:hover, .badge-info[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0da5c0; }\n\n.badge-warning {\n  color: #ff3709;\n  background-color: rgba(254, 201, 189, 0.5); }\n  .badge-warning[href]:hover, .badge-warning[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #fa3a0e; }\n\n.badge-danger {\n  color: #f80031;\n  background-color: rgba(251, 175, 190, 0.5); }\n  .badge-danger[href]:hover, .badge-danger[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #ec0c38; }\n\n.badge-light {\n  color: #879cb0;\n  background-color: rgba(244, 245, 246, 0.5); }\n  .badge-light[href]:hover, .badge-light[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #919ca6; }\n\n.badge-dark {\n  color: #090c0e;\n  background-color: rgba(90, 101, 112, 0.5); }\n  .badge-dark[href]:hover, .badge-dark[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0a0c0d; }\n\n.badge-default {\n  color: #091428;\n  background-color: rgba(52, 98, 175, 0.5); }\n  .badge-default[href]:hover, .badge-default[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0b1526; }\n\n.badge-white {\n  color: #e8e3e3;\n  background-color: rgba(255, 255, 255, 0.5); }\n  .badge-white[href]:hover, .badge-white[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #e6e6e6; }\n\n.badge-neutral {\n  color: #e8e3e3;\n  background-color: rgba(255, 255, 255, 0.5); }\n  .badge-neutral[href]:hover, .badge-neutral[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #e6e6e6; }\n\n.badge-darker {\n  color: black;\n  background-color: rgba(64, 64, 64, 0.5); }\n  .badge-darker[href]:hover, .badge-darker[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: black; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.4375rem; }\n  @media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  position: relative;\n  padding: 1rem 1.5rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.375rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 600; }\n\n.alert-dismissible {\n  padding-right: 4.5rem; }\n  .alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 1rem 1.5rem;\n    color: inherit; }\n\n.alert-primary {\n  color: #fff;\n  background-color: #7889e8;\n  border-color: #7889e8; }\n  .alert-primary hr {\n    border-top-color: #6276e4; }\n  .alert-primary .alert-link {\n    color: #324cdd; }\n\n.alert-secondary {\n  color: #212529;\n  background-color: #f8fbfc;\n  border-color: #f8fbfc; }\n  .alert-secondary hr {\n    border-top-color: #e6f1f4; }\n  .alert-secondary .alert-link {\n    color: #d2e3ee; }\n\n.alert-success {\n  color: #fff;\n  background-color: #4fd69c;\n  border-color: #4fd69c; }\n  .alert-success hr {\n    border-top-color: #3ad190; }\n  .alert-success .alert-link {\n    color: #24a46d; }\n\n.alert-info {\n  color: #fff;\n  background-color: #37d5f2;\n  border-color: #37d5f2; }\n  .alert-info hr {\n    border-top-color: #1fd0f0; }\n  .alert-info .alert-link {\n    color: #0da5c0; }\n\n.alert-warning {\n  color: #fff;\n  background-color: #fc7c5f;\n  border-color: #fc7c5f; }\n  .alert-warning hr {\n    border-top-color: #fc6846; }\n  .alert-warning .alert-link {\n    color: #fa3a0e; }\n\n.alert-danger {\n  color: #fff;\n  background-color: #f75676;\n  border-color: #f75676; }\n  .alert-danger hr {\n    border-top-color: #f63e62; }\n  .alert-danger .alert-link {\n    color: #ec0c38; }\n\n.alert-light {\n  color: #fff;\n  background-color: #bac1c8;\n  border-color: #bac1c8; }\n  .alert-light hr {\n    border-top-color: #acb4bd; }\n  .alert-light .alert-link {\n    color: #919ca6; }\n\n.alert-dark {\n  color: #fff;\n  background-color: #45484b;\n  border-color: #45484b; }\n  .alert-dark hr {\n    border-top-color: #393b3e; }\n  .alert-dark .alert-link {\n    color: #0a0c0d; }\n\n.alert-default {\n  color: #fff;\n  background-color: #3c4d69;\n  border-color: #3c4d69; }\n  .alert-default hr {\n    border-top-color: #334159; }\n  .alert-default .alert-link {\n    color: #0b1526; }\n\n.alert-white {\n  color: #212529;\n  background-color: white;\n  border-color: white; }\n  .alert-white hr {\n    border-top-color: #f2f2f2; }\n  .alert-white .alert-link {\n    color: #e6e6e6; }\n\n.alert-neutral {\n  color: #212529;\n  background-color: white;\n  border-color: white; }\n  .alert-neutral hr {\n    border-top-color: #f2f2f2; }\n  .alert-neutral .alert-link {\n    color: #e6e6e6; }\n\n.alert-darker {\n  color: #fff;\n  background-color: #292929;\n  border-color: #292929; }\n  .alert-darker hr {\n    border-top-color: #1c1c1c; }\n  .alert-darker .alert-link {\n    color: black; }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.375rem;\n  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #5e72e4;\n  transition: width 0.6s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .progress-bar {\n      transition: none; } }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  animation: progress-bar-stripes 1s linear infinite; }\n\n.media {\n  display: flex;\n  align-items: flex-start; }\n\n.media-body {\n  flex: 1; }\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #525f7f;\n  text-align: inherit; }\n  .list-group-item-action:hover, .list-group-item-action:focus {\n    color: #525f7f;\n    text-decoration: none;\n    background-color: #f6f9fc; }\n  .list-group-item-action:active {\n    color: #525f7f;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 1rem 1rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #e9ecef; }\n  .list-group-item:first-child {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem; }\n  .list-group-item:hover, .list-group-item:focus {\n    z-index: 1;\n    text-decoration: none; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #8898aa;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #5e72e4;\n    border-color: #5e72e4; }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #313b77;\n  background-color: #d2d8f7; }\n  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #313b77;\n    background-color: #bcc5f3; }\n  .list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #313b77;\n    border-color: #313b77; }\n\n.list-group-item-secondary {\n  color: #808283;\n  background-color: #fdfefe; }\n  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #808283;\n    background-color: #ecf6f6; }\n  .list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #808283;\n    border-color: #808283; }\n\n.list-group-item-success {\n  color: #176b47;\n  background-color: #c4f1de; }\n  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #176b47;\n    background-color: #afecd2; }\n  .list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #176b47;\n    border-color: #176b47; }\n\n.list-group-item-info {\n  color: #096b7c;\n  background-color: #bcf1fb; }\n  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #096b7c;\n    background-color: #a4ecfa; }\n  .list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #096b7c;\n    border-color: #096b7c; }\n\n.list-group-item-warning {\n  color: #833321;\n  background-color: #fed3ca; }\n  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #833321;\n    background-color: #febeb1; }\n  .list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #833321;\n    border-color: #833321; }\n\n.list-group-item-danger {\n  color: #7f1c30;\n  background-color: #fcc7d1; }\n  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #7f1c30;\n    background-color: #fbafbd; }\n  .list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #7f1c30;\n    border-color: #7f1c30; }\n\n.list-group-item-light {\n  color: #5a5e62;\n  background-color: #e8eaed; }\n  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #5a5e62;\n    background-color: #dadde2; }\n  .list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #5a5e62;\n    border-color: #5a5e62; }\n\n.list-group-item-dark {\n  color: #111315;\n  background-color: #c1c2c3; }\n  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #111315;\n    background-color: #b4b5b6; }\n  .list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #111315;\n    border-color: #111315; }\n\n.list-group-item-default {\n  color: #0c1628;\n  background-color: #bec4cd; }\n  .list-group-item-default.list-group-item-action:hover, .list-group-item-default.list-group-item-action:focus {\n    color: #0c1628;\n    background-color: #b0b7c2; }\n  .list-group-item-default.list-group-item-action.active {\n    color: #fff;\n    background-color: #0c1628;\n    border-color: #0c1628; }\n\n.list-group-item-white {\n  color: #858585;\n  background-color: white; }\n  .list-group-item-white.list-group-item-action:hover, .list-group-item-white.list-group-item-action:focus {\n    color: #858585;\n    background-color: #f2f2f2; }\n  .list-group-item-white.list-group-item-action.active {\n    color: #fff;\n    background-color: #858585;\n    border-color: #858585; }\n\n.list-group-item-neutral {\n  color: #858585;\n  background-color: white; }\n  .list-group-item-neutral.list-group-item-action:hover, .list-group-item-neutral.list-group-item-action:focus {\n    color: #858585;\n    background-color: #f2f2f2; }\n  .list-group-item-neutral.list-group-item-action.active {\n    color: #fff;\n    background-color: #858585;\n    border-color: #858585; }\n\n.list-group-item-darker {\n  color: black;\n  background-color: #b8b8b8; }\n  .list-group-item-darker.list-group-item-action:hover, .list-group-item-darker.list-group-item-action:focus {\n    color: black;\n    background-color: #ababab; }\n  .list-group-item-darker.list-group-item-action.active {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.6);\n  text-shadow: none;\n  opacity: .5; }\n  .close:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n    .close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n      color: rgba(0, 0, 0, 0.6);\n      text-decoration: none;\n      opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n  .modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n  .modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -25%); }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .modal.fade .modal-dialog {\n        transition: none; } }\n  .modal.show .modal-dialog {\n    transform: translate(0, 0); }\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - (0.5rem * 2)); }\n  .modal-dialog-centered::before {\n    display: block;\n    height: calc(100vh - (0.5rem * 2));\n    content: \"\"; }\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0 solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.4375rem;\n  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17);\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.16; }\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.25rem;\n  border-bottom: 0 solid #e9ecef;\n  border-top-left-radius: 0.4375rem;\n  border-top-right-radius: 0.4375rem; }\n  .modal-header .close {\n    padding: 1.25rem;\n    margin: -1.25rem -1.25rem -1.25rem auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.1; }\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1.5rem; }\n\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1.5rem;\n  border-top: 0 solid #e9ecef; }\n  .modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n  .modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-centered {\n    min-height: calc(100% - (1.75rem * 2)); }\n    .modal-dialog-centered::before {\n      height: calc(100vh - (1.75rem * 2)); }\n  .modal-content {\n    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17); }\n  .modal-sm {\n    max-width: 380px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: Open Sans, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n    .tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.375rem; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: Open Sans, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 0.4375rem;\n  box-shadow: 0px 0.5rem 2rem 0px rgba(0, 0, 0, 0.2); }\n  .popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1.5rem;\n    height: 0.75rem;\n    margin: 0 0.4375rem; }\n    .popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.75rem; }\n  .bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow {\n    bottom: calc((0.75rem + 1px) * -1); }\n  .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n  .bs-popover-top .arrow::after,\n  .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-width: 0.75rem 0.75rem 0; }\n  .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n    bottom: 0;\n    border-top-color: transparent; }\n  \n  .bs-popover-top .arrow::after,\n  .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    bottom: 1px;\n    border-top-color: #fff; }\n\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.75rem; }\n  .bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow {\n    left: calc((0.75rem + 1px) * -1);\n    width: 0.75rem;\n    height: 1.5rem;\n    margin: 0.4375rem 0; }\n  .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n  .bs-popover-right .arrow::after,\n  .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-width: 0.75rem 0.75rem 0.75rem 0; }\n  .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n    left: 0;\n    border-right-color: transparent; }\n  \n  .bs-popover-right .arrow::after,\n  .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    left: 1px;\n    border-right-color: #fff; }\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.75rem; }\n  .bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n    top: calc((0.75rem + 1px) * -1); }\n  .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n  .bs-popover-bottom .arrow::after,\n  .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-width: 0 0.75rem 0.75rem 0.75rem; }\n  .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n    top: 0;\n    border-bottom-color: transparent; }\n  \n  .bs-popover-bottom .arrow::after,\n  .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    top: 1px;\n    border-bottom-color: #fff; }\n  .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1.5rem;\n    margin-left: -0.75rem;\n    content: \"\";\n    border-bottom: 1px solid #fff; }\n\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.75rem; }\n  .bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow {\n    right: calc((0.75rem + 1px) * -1);\n    width: 0.75rem;\n    height: 1.5rem;\n    margin: 0.4375rem 0; }\n  .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n  .bs-popover-left .arrow::after,\n  .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-width: 0.75rem 0 0.75rem 0.75rem; }\n  .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n    right: 0;\n    border-left-color: transparent; }\n  \n  .bs-popover-left .arrow::after,\n  .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    right: 1px;\n    border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.95rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: #32325d;\n  background-color: #fff;\n  border-bottom: 1px solid #f2f2f2;\n  border-top-left-radius: calc(0.4375rem - 1px);\n  border-top-right-radius: calc(0.4375rem - 1px); }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.95rem;\n  color: #525f7f; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  align-items: center;\n  width: 100%;\n  backface-visibility: hidden;\n  perspective: 1000px; }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n  transition: transform 0.6s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .carousel-item.active,\n    .carousel-item-next,\n    .carousel-item-prev {\n      transition: none; } }\n\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0; }\n\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  transform: translateX(0); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right {\n      transform: translate3d(0, 0, 0); } }\n\n.carousel-item-next,\n.active.carousel-item-right {\n  transform: translateX(100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next,\n    .active.carousel-item-right {\n      transform: translate3d(100%, 0, 0); } }\n\n.carousel-item-prev,\n.active.carousel-item-left {\n  transform: translateX(-100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-prev,\n    .active.carousel-item-left {\n      transform: translate3d(-100%, 0, 0); } }\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-duration: .6s;\n  transition-property: opacity; }\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  opacity: 1; }\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  opacity: 0; }\n\n.carousel-fade .carousel-item-next,\n.carousel-fade .carousel-item-prev,\n.carousel-fade .carousel-item.active,\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-prev {\n  transform: translateX(0); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-fade .carousel-item-next,\n    .carousel-fade .carousel-item-prev,\n    .carousel-fade .carousel-item.active,\n    .carousel-fade .active.carousel-item-left,\n    .carousel-fade .active.carousel-item-prev {\n      transform: translate3d(0, 0, 0); } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n  .carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    position: relative;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.5); }\n    .carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n    .carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n  .carousel-indicators .active {\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #5e72e4 !important; }\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #324cdd !important; }\n\n.bg-secondary {\n  background-color: #f7fafc !important; }\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #d2e3ee !important; }\n\n.bg-success {\n  background-color: #2dce89 !important; }\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #24a46d !important; }\n\n.bg-info {\n  background-color: #11cdef !important; }\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #0da5c0 !important; }\n\n.bg-warning {\n  background-color: #fb6340 !important; }\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #fa3a0e !important; }\n\n.bg-danger {\n  background-color: #f5365c !important; }\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #ec0c38 !important; }\n\n.bg-light {\n  background-color: #adb5bd !important; }\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #919ca6 !important; }\n\n.bg-dark {\n  background-color: #212529 !important; }\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #0a0c0d !important; }\n\n.bg-default {\n  background-color: #172b4d !important; }\n\na.bg-default:hover, a.bg-default:focus,\nbutton.bg-default:hover,\nbutton.bg-default:focus {\n  background-color: #0b1526 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\na.bg-white:hover, a.bg-white:focus,\nbutton.bg-white:hover,\nbutton.bg-white:focus {\n  background-color: #e6e6e6 !important; }\n\n.bg-neutral {\n  background-color: #fff !important; }\n\na.bg-neutral:hover, a.bg-neutral:focus,\nbutton.bg-neutral:hover,\nbutton.bg-neutral:focus {\n  background-color: #e6e6e6 !important; }\n\n.bg-darker {\n  background-color: black !important; }\n\na.bg-darker:hover, a.bg-darker:focus,\nbutton.bg-darker:hover,\nbutton.bg-darker:focus {\n  background-color: black !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #e9ecef !important; }\n\n.border-top {\n  border-top: 1px solid #e9ecef !important; }\n\n.border-right {\n  border-right: 1px solid #e9ecef !important; }\n\n.border-bottom {\n  border-bottom: 1px solid #e9ecef !important; }\n\n.border-left {\n  border-left: 1px solid #e9ecef !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #5e72e4 !important; }\n\n.border-secondary {\n  border-color: #f7fafc !important; }\n\n.border-success {\n  border-color: #2dce89 !important; }\n\n.border-info {\n  border-color: #11cdef !important; }\n\n.border-warning {\n  border-color: #fb6340 !important; }\n\n.border-danger {\n  border-color: #f5365c !important; }\n\n.border-light {\n  border-color: #adb5bd !important; }\n\n.border-dark {\n  border-color: #212529 !important; }\n\n.border-default {\n  border-color: #172b4d !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.border-neutral {\n  border-color: #fff !important; }\n\n.border-darker {\n  border-color: black !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded {\n  border-radius: 0.375rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.375rem !important;\n  border-top-right-radius: 0.375rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.375rem !important;\n  border-bottom-right-radius: 0.375rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.375rem !important;\n  border-bottom-left-radius: 0.375rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.375rem !important;\n  border-bottom-left-radius: 0.375rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.flex-fill {\n  flex: 1 1 auto !important; }\n\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal; }\n\n.shadow-sm {\n  box-shadow: 0 0 0.5rem rgba(136, 152, 170, 0.075) !important; }\n\n.shadow, .card-profile-image img {\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important; }\n\n.shadow-lg {\n  box-shadow: 0 0 3rem rgba(136, 152, 170, 0.175) !important; }\n\n.shadow-none {\n  box-shadow: none !important; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.w-auto {\n  width: auto !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-auto {\n  height: auto !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.m--9 {\n  margin: -10rem !important; }\n\n.mt--9,\n.my--9 {\n  margin-top: -10rem !important; }\n\n.mr--9,\n.mx--9 {\n  margin-right: -10rem !important; }\n\n.mb--9,\n.my--9 {\n  margin-bottom: -10rem !important; }\n\n.ml--9,\n.mx--9 {\n  margin-left: -10rem !important; }\n\n.m--8 {\n  margin: -8rem !important; }\n\n.mt--8,\n.my--8 {\n  margin-top: -8rem !important; }\n\n.mr--8,\n.mx--8 {\n  margin-right: -8rem !important; }\n\n.mb--8,\n.my--8 {\n  margin-bottom: -8rem !important; }\n\n.ml--8,\n.mx--8 {\n  margin-left: -8rem !important; }\n\n.m--7 {\n  margin: -6rem !important; }\n\n.mt--7,\n.my--7 {\n  margin-top: -6rem !important; }\n\n.mr--7,\n.mx--7 {\n  margin-right: -6rem !important; }\n\n.mb--7,\n.my--7 {\n  margin-bottom: -6rem !important; }\n\n.ml--7,\n.mx--7 {\n  margin-left: -6rem !important; }\n\n.m--6 {\n  margin: -4.5rem !important; }\n\n.mt--6,\n.my--6 {\n  margin-top: -4.5rem !important; }\n\n.mr--6,\n.mx--6 {\n  margin-right: -4.5rem !important; }\n\n.mb--6,\n.my--6 {\n  margin-bottom: -4.5rem !important; }\n\n.ml--6,\n.mx--6 {\n  margin-left: -4.5rem !important; }\n\n.m--5 {\n  margin: -3rem !important; }\n\n.mt--5,\n.my--5 {\n  margin-top: -3rem !important; }\n\n.mr--5,\n.mx--5 {\n  margin-right: -3rem !important; }\n\n.mb--5,\n.my--5 {\n  margin-bottom: -3rem !important; }\n\n.ml--5,\n.mx--5 {\n  margin-left: -3rem !important; }\n\n.m--4 {\n  margin: -1.5rem !important; }\n\n.mt--4,\n.my--4 {\n  margin-top: -1.5rem !important; }\n\n.mr--4,\n.mx--4 {\n  margin-right: -1.5rem !important; }\n\n.mb--4,\n.my--4 {\n  margin-bottom: -1.5rem !important; }\n\n.ml--4,\n.mx--4 {\n  margin-left: -1.5rem !important; }\n\n.m--3 {\n  margin: -1rem !important; }\n\n.mt--3,\n.my--3 {\n  margin-top: -1rem !important; }\n\n.mr--3,\n.mx--3 {\n  margin-right: -1rem !important; }\n\n.mb--3,\n.my--3 {\n  margin-bottom: -1rem !important; }\n\n.ml--3,\n.mx--3 {\n  margin-left: -1rem !important; }\n\n.m--2 {\n  margin: -0.5rem !important; }\n\n.mt--2,\n.my--2 {\n  margin-top: -0.5rem !important; }\n\n.mr--2,\n.mx--2 {\n  margin-right: -0.5rem !important; }\n\n.mb--2,\n.my--2 {\n  margin-bottom: -0.5rem !important; }\n\n.ml--2,\n.mx--2 {\n  margin-left: -0.5rem !important; }\n\n.m--1 {\n  margin: -0.25rem !important; }\n\n.mt--1,\n.my--1 {\n  margin-top: -0.25rem !important; }\n\n.mr--1,\n.mx--1 {\n  margin-right: -0.25rem !important; }\n\n.mb--1,\n.my--1 {\n  margin-bottom: -0.25rem !important; }\n\n.ml--1,\n.mx--1 {\n  margin-left: -0.25rem !important; }\n\n.m-6 {\n  margin: 4.5rem !important; }\n\n.mt-6,\n.my-6 {\n  margin-top: 4.5rem !important; }\n\n.mr-6,\n.mx-6 {\n  margin-right: 4.5rem !important; }\n\n.mb-6,\n.my-6 {\n  margin-bottom: 4.5rem !important; }\n\n.ml-6,\n.mx-6 {\n  margin-left: 4.5rem !important; }\n\n.m-7 {\n  margin: 6rem !important; }\n\n.mt-7,\n.my-7 {\n  margin-top: 6rem !important; }\n\n.mr-7,\n.mx-7 {\n  margin-right: 6rem !important; }\n\n.mb-7,\n.my-7 {\n  margin-bottom: 6rem !important; }\n\n.ml-7,\n.mx-7 {\n  margin-left: 6rem !important; }\n\n.m-8 {\n  margin: 8rem !important; }\n\n.mt-8,\n.my-8 {\n  margin-top: 8rem !important; }\n\n.mr-8,\n.mx-8 {\n  margin-right: 8rem !important; }\n\n.mb-8,\n.my-8 {\n  margin-bottom: 8rem !important; }\n\n.ml-8,\n.mx-8 {\n  margin-left: 8rem !important; }\n\n.m-9 {\n  margin: 10rem !important; }\n\n.mt-9,\n.my-9 {\n  margin-top: 10rem !important; }\n\n.mr-9,\n.mx-9 {\n  margin-right: 10rem !important; }\n\n.mb-9,\n.my-9 {\n  margin-bottom: 10rem !important; }\n\n.ml-9,\n.mx-9 {\n  margin-left: 10rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.p--9 {\n  padding: -10rem !important; }\n\n.pt--9,\n.py--9 {\n  padding-top: -10rem !important; }\n\n.pr--9,\n.px--9 {\n  padding-right: -10rem !important; }\n\n.pb--9,\n.py--9 {\n  padding-bottom: -10rem !important; }\n\n.pl--9,\n.px--9 {\n  padding-left: -10rem !important; }\n\n.p--8 {\n  padding: -8rem !important; }\n\n.pt--8,\n.py--8 {\n  padding-top: -8rem !important; }\n\n.pr--8,\n.px--8 {\n  padding-right: -8rem !important; }\n\n.pb--8,\n.py--8 {\n  padding-bottom: -8rem !important; }\n\n.pl--8,\n.px--8 {\n  padding-left: -8rem !important; }\n\n.p--7 {\n  padding: -6rem !important; }\n\n.pt--7,\n.py--7 {\n  padding-top: -6rem !important; }\n\n.pr--7,\n.px--7 {\n  padding-right: -6rem !important; }\n\n.pb--7,\n.py--7 {\n  padding-bottom: -6rem !important; }\n\n.pl--7,\n.px--7 {\n  padding-left: -6rem !important; }\n\n.p--6 {\n  padding: -4.5rem !important; }\n\n.pt--6,\n.py--6 {\n  padding-top: -4.5rem !important; }\n\n.pr--6,\n.px--6 {\n  padding-right: -4.5rem !important; }\n\n.pb--6,\n.py--6 {\n  padding-bottom: -4.5rem !important; }\n\n.pl--6,\n.px--6 {\n  padding-left: -4.5rem !important; }\n\n.p--5 {\n  padding: -3rem !important; }\n\n.pt--5,\n.py--5 {\n  padding-top: -3rem !important; }\n\n.pr--5,\n.px--5 {\n  padding-right: -3rem !important; }\n\n.pb--5,\n.py--5 {\n  padding-bottom: -3rem !important; }\n\n.pl--5,\n.px--5 {\n  padding-left: -3rem !important; }\n\n.p--4 {\n  padding: -1.5rem !important; }\n\n.pt--4,\n.py--4 {\n  padding-top: -1.5rem !important; }\n\n.pr--4,\n.px--4 {\n  padding-right: -1.5rem !important; }\n\n.pb--4,\n.py--4 {\n  padding-bottom: -1.5rem !important; }\n\n.pl--4,\n.px--4 {\n  padding-left: -1.5rem !important; }\n\n.p--3 {\n  padding: -1rem !important; }\n\n.pt--3,\n.py--3 {\n  padding-top: -1rem !important; }\n\n.pr--3,\n.px--3 {\n  padding-right: -1rem !important; }\n\n.pb--3,\n.py--3 {\n  padding-bottom: -1rem !important; }\n\n.pl--3,\n.px--3 {\n  padding-left: -1rem !important; }\n\n.p--2 {\n  padding: -0.5rem !important; }\n\n.pt--2,\n.py--2 {\n  padding-top: -0.5rem !important; }\n\n.pr--2,\n.px--2 {\n  padding-right: -0.5rem !important; }\n\n.pb--2,\n.py--2 {\n  padding-bottom: -0.5rem !important; }\n\n.pl--2,\n.px--2 {\n  padding-left: -0.5rem !important; }\n\n.p--1 {\n  padding: -0.25rem !important; }\n\n.pt--1,\n.py--1 {\n  padding-top: -0.25rem !important; }\n\n.pr--1,\n.px--1 {\n  padding-right: -0.25rem !important; }\n\n.pb--1,\n.py--1 {\n  padding-bottom: -0.25rem !important; }\n\n.pl--1,\n.px--1 {\n  padding-left: -0.25rem !important; }\n\n.p-6 {\n  padding: 4.5rem !important; }\n\n.pt-6,\n.py-6 {\n  padding-top: 4.5rem !important; }\n\n.pr-6,\n.px-6 {\n  padding-right: 4.5rem !important; }\n\n.pb-6,\n.py-6 {\n  padding-bottom: 4.5rem !important; }\n\n.pl-6,\n.px-6 {\n  padding-left: 4.5rem !important; }\n\n.p-7 {\n  padding: 6rem !important; }\n\n.pt-7,\n.py-7 {\n  padding-top: 6rem !important; }\n\n.pr-7,\n.px-7 {\n  padding-right: 6rem !important; }\n\n.pb-7,\n.py-7 {\n  padding-bottom: 6rem !important; }\n\n.pl-7,\n.px-7 {\n  padding-left: 6rem !important; }\n\n.p-8 {\n  padding: 8rem !important; }\n\n.pt-8,\n.py-8 {\n  padding-top: 8rem !important; }\n\n.pr-8,\n.px-8 {\n  padding-right: 8rem !important; }\n\n.pb-8,\n.py-8 {\n  padding-bottom: 8rem !important; }\n\n.pl-8,\n.px-8 {\n  padding-left: 8rem !important; }\n\n.p-9 {\n  padding: 10rem !important; }\n\n.pt-9,\n.py-9 {\n  padding-top: 10rem !important; }\n\n.pr-9,\n.px-9 {\n  padding-right: 10rem !important; }\n\n.pb-9,\n.py-9 {\n  padding-bottom: 10rem !important; }\n\n.pl-9,\n.px-9 {\n  padding-left: 10rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .m-sm--9 {\n    margin: -10rem !important; }\n  .mt-sm--9,\n  .my-sm--9 {\n    margin-top: -10rem !important; }\n  .mr-sm--9,\n  .mx-sm--9 {\n    margin-right: -10rem !important; }\n  .mb-sm--9,\n  .my-sm--9 {\n    margin-bottom: -10rem !important; }\n  .ml-sm--9,\n  .mx-sm--9 {\n    margin-left: -10rem !important; }\n  .m-sm--8 {\n    margin: -8rem !important; }\n  .mt-sm--8,\n  .my-sm--8 {\n    margin-top: -8rem !important; }\n  .mr-sm--8,\n  .mx-sm--8 {\n    margin-right: -8rem !important; }\n  .mb-sm--8,\n  .my-sm--8 {\n    margin-bottom: -8rem !important; }\n  .ml-sm--8,\n  .mx-sm--8 {\n    margin-left: -8rem !important; }\n  .m-sm--7 {\n    margin: -6rem !important; }\n  .mt-sm--7,\n  .my-sm--7 {\n    margin-top: -6rem !important; }\n  .mr-sm--7,\n  .mx-sm--7 {\n    margin-right: -6rem !important; }\n  .mb-sm--7,\n  .my-sm--7 {\n    margin-bottom: -6rem !important; }\n  .ml-sm--7,\n  .mx-sm--7 {\n    margin-left: -6rem !important; }\n  .m-sm--6 {\n    margin: -4.5rem !important; }\n  .mt-sm--6,\n  .my-sm--6 {\n    margin-top: -4.5rem !important; }\n  .mr-sm--6,\n  .mx-sm--6 {\n    margin-right: -4.5rem !important; }\n  .mb-sm--6,\n  .my-sm--6 {\n    margin-bottom: -4.5rem !important; }\n  .ml-sm--6,\n  .mx-sm--6 {\n    margin-left: -4.5rem !important; }\n  .m-sm--5 {\n    margin: -3rem !important; }\n  .mt-sm--5,\n  .my-sm--5 {\n    margin-top: -3rem !important; }\n  .mr-sm--5,\n  .mx-sm--5 {\n    margin-right: -3rem !important; }\n  .mb-sm--5,\n  .my-sm--5 {\n    margin-bottom: -3rem !important; }\n  .ml-sm--5,\n  .mx-sm--5 {\n    margin-left: -3rem !important; }\n  .m-sm--4 {\n    margin: -1.5rem !important; }\n  .mt-sm--4,\n  .my-sm--4 {\n    margin-top: -1.5rem !important; }\n  .mr-sm--4,\n  .mx-sm--4 {\n    margin-right: -1.5rem !important; }\n  .mb-sm--4,\n  .my-sm--4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-sm--4,\n  .mx-sm--4 {\n    margin-left: -1.5rem !important; }\n  .m-sm--3 {\n    margin: -1rem !important; }\n  .mt-sm--3,\n  .my-sm--3 {\n    margin-top: -1rem !important; }\n  .mr-sm--3,\n  .mx-sm--3 {\n    margin-right: -1rem !important; }\n  .mb-sm--3,\n  .my-sm--3 {\n    margin-bottom: -1rem !important; }\n  .ml-sm--3,\n  .mx-sm--3 {\n    margin-left: -1rem !important; }\n  .m-sm--2 {\n    margin: -0.5rem !important; }\n  .mt-sm--2,\n  .my-sm--2 {\n    margin-top: -0.5rem !important; }\n  .mr-sm--2,\n  .mx-sm--2 {\n    margin-right: -0.5rem !important; }\n  .mb-sm--2,\n  .my-sm--2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-sm--2,\n  .mx-sm--2 {\n    margin-left: -0.5rem !important; }\n  .m-sm--1 {\n    margin: -0.25rem !important; }\n  .mt-sm--1,\n  .my-sm--1 {\n    margin-top: -0.25rem !important; }\n  .mr-sm--1,\n  .mx-sm--1 {\n    margin-right: -0.25rem !important; }\n  .mb-sm--1,\n  .my-sm--1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm--1,\n  .mx-sm--1 {\n    margin-left: -0.25rem !important; }\n  .m-sm-6 {\n    margin: 4.5rem !important; }\n  .mt-sm-6,\n  .my-sm-6 {\n    margin-top: 4.5rem !important; }\n  .mr-sm-6,\n  .mx-sm-6 {\n    margin-right: 4.5rem !important; }\n  .mb-sm-6,\n  .my-sm-6 {\n    margin-bottom: 4.5rem !important; }\n  .ml-sm-6,\n  .mx-sm-6 {\n    margin-left: 4.5rem !important; }\n  .m-sm-7 {\n    margin: 6rem !important; }\n  .mt-sm-7,\n  .my-sm-7 {\n    margin-top: 6rem !important; }\n  .mr-sm-7,\n  .mx-sm-7 {\n    margin-right: 6rem !important; }\n  .mb-sm-7,\n  .my-sm-7 {\n    margin-bottom: 6rem !important; }\n  .ml-sm-7,\n  .mx-sm-7 {\n    margin-left: 6rem !important; }\n  .m-sm-8 {\n    margin: 8rem !important; }\n  .mt-sm-8,\n  .my-sm-8 {\n    margin-top: 8rem !important; }\n  .mr-sm-8,\n  .mx-sm-8 {\n    margin-right: 8rem !important; }\n  .mb-sm-8,\n  .my-sm-8 {\n    margin-bottom: 8rem !important; }\n  .ml-sm-8,\n  .mx-sm-8 {\n    margin-left: 8rem !important; }\n  .m-sm-9 {\n    margin: 10rem !important; }\n  .mt-sm-9,\n  .my-sm-9 {\n    margin-top: 10rem !important; }\n  .mr-sm-9,\n  .mx-sm-9 {\n    margin-right: 10rem !important; }\n  .mb-sm-9,\n  .my-sm-9 {\n    margin-bottom: 10rem !important; }\n  .ml-sm-9,\n  .mx-sm-9 {\n    margin-left: 10rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .p-sm--9 {\n    padding: -10rem !important; }\n  .pt-sm--9,\n  .py-sm--9 {\n    padding-top: -10rem !important; }\n  .pr-sm--9,\n  .px-sm--9 {\n    padding-right: -10rem !important; }\n  .pb-sm--9,\n  .py-sm--9 {\n    padding-bottom: -10rem !important; }\n  .pl-sm--9,\n  .px-sm--9 {\n    padding-left: -10rem !important; }\n  .p-sm--8 {\n    padding: -8rem !important; }\n  .pt-sm--8,\n  .py-sm--8 {\n    padding-top: -8rem !important; }\n  .pr-sm--8,\n  .px-sm--8 {\n    padding-right: -8rem !important; }\n  .pb-sm--8,\n  .py-sm--8 {\n    padding-bottom: -8rem !important; }\n  .pl-sm--8,\n  .px-sm--8 {\n    padding-left: -8rem !important; }\n  .p-sm--7 {\n    padding: -6rem !important; }\n  .pt-sm--7,\n  .py-sm--7 {\n    padding-top: -6rem !important; }\n  .pr-sm--7,\n  .px-sm--7 {\n    padding-right: -6rem !important; }\n  .pb-sm--7,\n  .py-sm--7 {\n    padding-bottom: -6rem !important; }\n  .pl-sm--7,\n  .px-sm--7 {\n    padding-left: -6rem !important; }\n  .p-sm--6 {\n    padding: -4.5rem !important; }\n  .pt-sm--6,\n  .py-sm--6 {\n    padding-top: -4.5rem !important; }\n  .pr-sm--6,\n  .px-sm--6 {\n    padding-right: -4.5rem !important; }\n  .pb-sm--6,\n  .py-sm--6 {\n    padding-bottom: -4.5rem !important; }\n  .pl-sm--6,\n  .px-sm--6 {\n    padding-left: -4.5rem !important; }\n  .p-sm--5 {\n    padding: -3rem !important; }\n  .pt-sm--5,\n  .py-sm--5 {\n    padding-top: -3rem !important; }\n  .pr-sm--5,\n  .px-sm--5 {\n    padding-right: -3rem !important; }\n  .pb-sm--5,\n  .py-sm--5 {\n    padding-bottom: -3rem !important; }\n  .pl-sm--5,\n  .px-sm--5 {\n    padding-left: -3rem !important; }\n  .p-sm--4 {\n    padding: -1.5rem !important; }\n  .pt-sm--4,\n  .py-sm--4 {\n    padding-top: -1.5rem !important; }\n  .pr-sm--4,\n  .px-sm--4 {\n    padding-right: -1.5rem !important; }\n  .pb-sm--4,\n  .py-sm--4 {\n    padding-bottom: -1.5rem !important; }\n  .pl-sm--4,\n  .px-sm--4 {\n    padding-left: -1.5rem !important; }\n  .p-sm--3 {\n    padding: -1rem !important; }\n  .pt-sm--3,\n  .py-sm--3 {\n    padding-top: -1rem !important; }\n  .pr-sm--3,\n  .px-sm--3 {\n    padding-right: -1rem !important; }\n  .pb-sm--3,\n  .py-sm--3 {\n    padding-bottom: -1rem !important; }\n  .pl-sm--3,\n  .px-sm--3 {\n    padding-left: -1rem !important; }\n  .p-sm--2 {\n    padding: -0.5rem !important; }\n  .pt-sm--2,\n  .py-sm--2 {\n    padding-top: -0.5rem !important; }\n  .pr-sm--2,\n  .px-sm--2 {\n    padding-right: -0.5rem !important; }\n  .pb-sm--2,\n  .py-sm--2 {\n    padding-bottom: -0.5rem !important; }\n  .pl-sm--2,\n  .px-sm--2 {\n    padding-left: -0.5rem !important; }\n  .p-sm--1 {\n    padding: -0.25rem !important; }\n  .pt-sm--1,\n  .py-sm--1 {\n    padding-top: -0.25rem !important; }\n  .pr-sm--1,\n  .px-sm--1 {\n    padding-right: -0.25rem !important; }\n  .pb-sm--1,\n  .py-sm--1 {\n    padding-bottom: -0.25rem !important; }\n  .pl-sm--1,\n  .px-sm--1 {\n    padding-left: -0.25rem !important; }\n  .p-sm-6 {\n    padding: 4.5rem !important; }\n  .pt-sm-6,\n  .py-sm-6 {\n    padding-top: 4.5rem !important; }\n  .pr-sm-6,\n  .px-sm-6 {\n    padding-right: 4.5rem !important; }\n  .pb-sm-6,\n  .py-sm-6 {\n    padding-bottom: 4.5rem !important; }\n  .pl-sm-6,\n  .px-sm-6 {\n    padding-left: 4.5rem !important; }\n  .p-sm-7 {\n    padding: 6rem !important; }\n  .pt-sm-7,\n  .py-sm-7 {\n    padding-top: 6rem !important; }\n  .pr-sm-7,\n  .px-sm-7 {\n    padding-right: 6rem !important; }\n  .pb-sm-7,\n  .py-sm-7 {\n    padding-bottom: 6rem !important; }\n  .pl-sm-7,\n  .px-sm-7 {\n    padding-left: 6rem !important; }\n  .p-sm-8 {\n    padding: 8rem !important; }\n  .pt-sm-8,\n  .py-sm-8 {\n    padding-top: 8rem !important; }\n  .pr-sm-8,\n  .px-sm-8 {\n    padding-right: 8rem !important; }\n  .pb-sm-8,\n  .py-sm-8 {\n    padding-bottom: 8rem !important; }\n  .pl-sm-8,\n  .px-sm-8 {\n    padding-left: 8rem !important; }\n  .p-sm-9 {\n    padding: 10rem !important; }\n  .pt-sm-9,\n  .py-sm-9 {\n    padding-top: 10rem !important; }\n  .pr-sm-9,\n  .px-sm-9 {\n    padding-right: 10rem !important; }\n  .pb-sm-9,\n  .py-sm-9 {\n    padding-bottom: 10rem !important; }\n  .pl-sm-9,\n  .px-sm-9 {\n    padding-left: 10rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .m-md--9 {\n    margin: -10rem !important; }\n  .mt-md--9,\n  .my-md--9 {\n    margin-top: -10rem !important; }\n  .mr-md--9,\n  .mx-md--9 {\n    margin-right: -10rem !important; }\n  .mb-md--9,\n  .my-md--9 {\n    margin-bottom: -10rem !important; }\n  .ml-md--9,\n  .mx-md--9 {\n    margin-left: -10rem !important; }\n  .m-md--8 {\n    margin: -8rem !important; }\n  .mt-md--8,\n  .my-md--8 {\n    margin-top: -8rem !important; }\n  .mr-md--8,\n  .mx-md--8 {\n    margin-right: -8rem !important; }\n  .mb-md--8,\n  .my-md--8 {\n    margin-bottom: -8rem !important; }\n  .ml-md--8,\n  .mx-md--8 {\n    margin-left: -8rem !important; }\n  .m-md--7 {\n    margin: -6rem !important; }\n  .mt-md--7,\n  .my-md--7 {\n    margin-top: -6rem !important; }\n  .mr-md--7,\n  .mx-md--7 {\n    margin-right: -6rem !important; }\n  .mb-md--7,\n  .my-md--7 {\n    margin-bottom: -6rem !important; }\n  .ml-md--7,\n  .mx-md--7 {\n    margin-left: -6rem !important; }\n  .m-md--6 {\n    margin: -4.5rem !important; }\n  .mt-md--6,\n  .my-md--6 {\n    margin-top: -4.5rem !important; }\n  .mr-md--6,\n  .mx-md--6 {\n    margin-right: -4.5rem !important; }\n  .mb-md--6,\n  .my-md--6 {\n    margin-bottom: -4.5rem !important; }\n  .ml-md--6,\n  .mx-md--6 {\n    margin-left: -4.5rem !important; }\n  .m-md--5 {\n    margin: -3rem !important; }\n  .mt-md--5,\n  .my-md--5 {\n    margin-top: -3rem !important; }\n  .mr-md--5,\n  .mx-md--5 {\n    margin-right: -3rem !important; }\n  .mb-md--5,\n  .my-md--5 {\n    margin-bottom: -3rem !important; }\n  .ml-md--5,\n  .mx-md--5 {\n    margin-left: -3rem !important; }\n  .m-md--4 {\n    margin: -1.5rem !important; }\n  .mt-md--4,\n  .my-md--4 {\n    margin-top: -1.5rem !important; }\n  .mr-md--4,\n  .mx-md--4 {\n    margin-right: -1.5rem !important; }\n  .mb-md--4,\n  .my-md--4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-md--4,\n  .mx-md--4 {\n    margin-left: -1.5rem !important; }\n  .m-md--3 {\n    margin: -1rem !important; }\n  .mt-md--3,\n  .my-md--3 {\n    margin-top: -1rem !important; }\n  .mr-md--3,\n  .mx-md--3 {\n    margin-right: -1rem !important; }\n  .mb-md--3,\n  .my-md--3 {\n    margin-bottom: -1rem !important; }\n  .ml-md--3,\n  .mx-md--3 {\n    margin-left: -1rem !important; }\n  .m-md--2 {\n    margin: -0.5rem !important; }\n  .mt-md--2,\n  .my-md--2 {\n    margin-top: -0.5rem !important; }\n  .mr-md--2,\n  .mx-md--2 {\n    margin-right: -0.5rem !important; }\n  .mb-md--2,\n  .my-md--2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-md--2,\n  .mx-md--2 {\n    margin-left: -0.5rem !important; }\n  .m-md--1 {\n    margin: -0.25rem !important; }\n  .mt-md--1,\n  .my-md--1 {\n    margin-top: -0.25rem !important; }\n  .mr-md--1,\n  .mx-md--1 {\n    margin-right: -0.25rem !important; }\n  .mb-md--1,\n  .my-md--1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md--1,\n  .mx-md--1 {\n    margin-left: -0.25rem !important; }\n  .m-md-6 {\n    margin: 4.5rem !important; }\n  .mt-md-6,\n  .my-md-6 {\n    margin-top: 4.5rem !important; }\n  .mr-md-6,\n  .mx-md-6 {\n    margin-right: 4.5rem !important; }\n  .mb-md-6,\n  .my-md-6 {\n    margin-bottom: 4.5rem !important; }\n  .ml-md-6,\n  .mx-md-6 {\n    margin-left: 4.5rem !important; }\n  .m-md-7 {\n    margin: 6rem !important; }\n  .mt-md-7,\n  .my-md-7 {\n    margin-top: 6rem !important; }\n  .mr-md-7,\n  .mx-md-7 {\n    margin-right: 6rem !important; }\n  .mb-md-7,\n  .my-md-7 {\n    margin-bottom: 6rem !important; }\n  .ml-md-7,\n  .mx-md-7 {\n    margin-left: 6rem !important; }\n  .m-md-8 {\n    margin: 8rem !important; }\n  .mt-md-8,\n  .my-md-8 {\n    margin-top: 8rem !important; }\n  .mr-md-8,\n  .mx-md-8 {\n    margin-right: 8rem !important; }\n  .mb-md-8,\n  .my-md-8 {\n    margin-bottom: 8rem !important; }\n  .ml-md-8,\n  .mx-md-8 {\n    margin-left: 8rem !important; }\n  .m-md-9 {\n    margin: 10rem !important; }\n  .mt-md-9,\n  .my-md-9 {\n    margin-top: 10rem !important; }\n  .mr-md-9,\n  .mx-md-9 {\n    margin-right: 10rem !important; }\n  .mb-md-9,\n  .my-md-9 {\n    margin-bottom: 10rem !important; }\n  .ml-md-9,\n  .mx-md-9 {\n    margin-left: 10rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .p-md--9 {\n    padding: -10rem !important; }\n  .pt-md--9,\n  .py-md--9 {\n    padding-top: -10rem !important; }\n  .pr-md--9,\n  .px-md--9 {\n    padding-right: -10rem !important; }\n  .pb-md--9,\n  .py-md--9 {\n    padding-bottom: -10rem !important; }\n  .pl-md--9,\n  .px-md--9 {\n    padding-left: -10rem !important; }\n  .p-md--8 {\n    padding: -8rem !important; }\n  .pt-md--8,\n  .py-md--8 {\n    padding-top: -8rem !important; }\n  .pr-md--8,\n  .px-md--8 {\n    padding-right: -8rem !important; }\n  .pb-md--8,\n  .py-md--8 {\n    padding-bottom: -8rem !important; }\n  .pl-md--8,\n  .px-md--8 {\n    padding-left: -8rem !important; }\n  .p-md--7 {\n    padding: -6rem !important; }\n  .pt-md--7,\n  .py-md--7 {\n    padding-top: -6rem !important; }\n  .pr-md--7,\n  .px-md--7 {\n    padding-right: -6rem !important; }\n  .pb-md--7,\n  .py-md--7 {\n    padding-bottom: -6rem !important; }\n  .pl-md--7,\n  .px-md--7 {\n    padding-left: -6rem !important; }\n  .p-md--6 {\n    padding: -4.5rem !important; }\n  .pt-md--6,\n  .py-md--6 {\n    padding-top: -4.5rem !important; }\n  .pr-md--6,\n  .px-md--6 {\n    padding-right: -4.5rem !important; }\n  .pb-md--6,\n  .py-md--6 {\n    padding-bottom: -4.5rem !important; }\n  .pl-md--6,\n  .px-md--6 {\n    padding-left: -4.5rem !important; }\n  .p-md--5 {\n    padding: -3rem !important; }\n  .pt-md--5,\n  .py-md--5 {\n    padding-top: -3rem !important; }\n  .pr-md--5,\n  .px-md--5 {\n    padding-right: -3rem !important; }\n  .pb-md--5,\n  .py-md--5 {\n    padding-bottom: -3rem !important; }\n  .pl-md--5,\n  .px-md--5 {\n    padding-left: -3rem !important; }\n  .p-md--4 {\n    padding: -1.5rem !important; }\n  .pt-md--4,\n  .py-md--4 {\n    padding-top: -1.5rem !important; }\n  .pr-md--4,\n  .px-md--4 {\n    padding-right: -1.5rem !important; }\n  .pb-md--4,\n  .py-md--4 {\n    padding-bottom: -1.5rem !important; }\n  .pl-md--4,\n  .px-md--4 {\n    padding-left: -1.5rem !important; }\n  .p-md--3 {\n    padding: -1rem !important; }\n  .pt-md--3,\n  .py-md--3 {\n    padding-top: -1rem !important; }\n  .pr-md--3,\n  .px-md--3 {\n    padding-right: -1rem !important; }\n  .pb-md--3,\n  .py-md--3 {\n    padding-bottom: -1rem !important; }\n  .pl-md--3,\n  .px-md--3 {\n    padding-left: -1rem !important; }\n  .p-md--2 {\n    padding: -0.5rem !important; }\n  .pt-md--2,\n  .py-md--2 {\n    padding-top: -0.5rem !important; }\n  .pr-md--2,\n  .px-md--2 {\n    padding-right: -0.5rem !important; }\n  .pb-md--2,\n  .py-md--2 {\n    padding-bottom: -0.5rem !important; }\n  .pl-md--2,\n  .px-md--2 {\n    padding-left: -0.5rem !important; }\n  .p-md--1 {\n    padding: -0.25rem !important; }\n  .pt-md--1,\n  .py-md--1 {\n    padding-top: -0.25rem !important; }\n  .pr-md--1,\n  .px-md--1 {\n    padding-right: -0.25rem !important; }\n  .pb-md--1,\n  .py-md--1 {\n    padding-bottom: -0.25rem !important; }\n  .pl-md--1,\n  .px-md--1 {\n    padding-left: -0.25rem !important; }\n  .p-md-6 {\n    padding: 4.5rem !important; }\n  .pt-md-6,\n  .py-md-6 {\n    padding-top: 4.5rem !important; }\n  .pr-md-6,\n  .px-md-6 {\n    padding-right: 4.5rem !important; }\n  .pb-md-6,\n  .py-md-6 {\n    padding-bottom: 4.5rem !important; }\n  .pl-md-6,\n  .px-md-6 {\n    padding-left: 4.5rem !important; }\n  .p-md-7 {\n    padding: 6rem !important; }\n  .pt-md-7,\n  .py-md-7 {\n    padding-top: 6rem !important; }\n  .pr-md-7,\n  .px-md-7 {\n    padding-right: 6rem !important; }\n  .pb-md-7,\n  .py-md-7 {\n    padding-bottom: 6rem !important; }\n  .pl-md-7,\n  .px-md-7 {\n    padding-left: 6rem !important; }\n  .p-md-8 {\n    padding: 8rem !important; }\n  .pt-md-8,\n  .py-md-8 {\n    padding-top: 8rem !important; }\n  .pr-md-8,\n  .px-md-8 {\n    padding-right: 8rem !important; }\n  .pb-md-8,\n  .py-md-8 {\n    padding-bottom: 8rem !important; }\n  .pl-md-8,\n  .px-md-8 {\n    padding-left: 8rem !important; }\n  .p-md-9 {\n    padding: 10rem !important; }\n  .pt-md-9,\n  .py-md-9 {\n    padding-top: 10rem !important; }\n  .pr-md-9,\n  .px-md-9 {\n    padding-right: 10rem !important; }\n  .pb-md-9,\n  .py-md-9 {\n    padding-bottom: 10rem !important; }\n  .pl-md-9,\n  .px-md-9 {\n    padding-left: 10rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .m-lg--9 {\n    margin: -10rem !important; }\n  .mt-lg--9,\n  .my-lg--9 {\n    margin-top: -10rem !important; }\n  .mr-lg--9,\n  .mx-lg--9 {\n    margin-right: -10rem !important; }\n  .mb-lg--9,\n  .my-lg--9 {\n    margin-bottom: -10rem !important; }\n  .ml-lg--9,\n  .mx-lg--9 {\n    margin-left: -10rem !important; }\n  .m-lg--8 {\n    margin: -8rem !important; }\n  .mt-lg--8,\n  .my-lg--8 {\n    margin-top: -8rem !important; }\n  .mr-lg--8,\n  .mx-lg--8 {\n    margin-right: -8rem !important; }\n  .mb-lg--8,\n  .my-lg--8 {\n    margin-bottom: -8rem !important; }\n  .ml-lg--8,\n  .mx-lg--8 {\n    margin-left: -8rem !important; }\n  .m-lg--7 {\n    margin: -6rem !important; }\n  .mt-lg--7,\n  .my-lg--7 {\n    margin-top: -6rem !important; }\n  .mr-lg--7,\n  .mx-lg--7 {\n    margin-right: -6rem !important; }\n  .mb-lg--7,\n  .my-lg--7 {\n    margin-bottom: -6rem !important; }\n  .ml-lg--7,\n  .mx-lg--7 {\n    margin-left: -6rem !important; }\n  .m-lg--6 {\n    margin: -4.5rem !important; }\n  .mt-lg--6,\n  .my-lg--6 {\n    margin-top: -4.5rem !important; }\n  .mr-lg--6,\n  .mx-lg--6 {\n    margin-right: -4.5rem !important; }\n  .mb-lg--6,\n  .my-lg--6 {\n    margin-bottom: -4.5rem !important; }\n  .ml-lg--6,\n  .mx-lg--6 {\n    margin-left: -4.5rem !important; }\n  .m-lg--5 {\n    margin: -3rem !important; }\n  .mt-lg--5,\n  .my-lg--5 {\n    margin-top: -3rem !important; }\n  .mr-lg--5,\n  .mx-lg--5 {\n    margin-right: -3rem !important; }\n  .mb-lg--5,\n  .my-lg--5 {\n    margin-bottom: -3rem !important; }\n  .ml-lg--5,\n  .mx-lg--5 {\n    margin-left: -3rem !important; }\n  .m-lg--4 {\n    margin: -1.5rem !important; }\n  .mt-lg--4,\n  .my-lg--4 {\n    margin-top: -1.5rem !important; }\n  .mr-lg--4,\n  .mx-lg--4 {\n    margin-right: -1.5rem !important; }\n  .mb-lg--4,\n  .my-lg--4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-lg--4,\n  .mx-lg--4 {\n    margin-left: -1.5rem !important; }\n  .m-lg--3 {\n    margin: -1rem !important; }\n  .mt-lg--3,\n  .my-lg--3 {\n    margin-top: -1rem !important; }\n  .mr-lg--3,\n  .mx-lg--3 {\n    margin-right: -1rem !important; }\n  .mb-lg--3,\n  .my-lg--3 {\n    margin-bottom: -1rem !important; }\n  .ml-lg--3,\n  .mx-lg--3 {\n    margin-left: -1rem !important; }\n  .m-lg--2 {\n    margin: -0.5rem !important; }\n  .mt-lg--2,\n  .my-lg--2 {\n    margin-top: -0.5rem !important; }\n  .mr-lg--2,\n  .mx-lg--2 {\n    margin-right: -0.5rem !important; }\n  .mb-lg--2,\n  .my-lg--2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-lg--2,\n  .mx-lg--2 {\n    margin-left: -0.5rem !important; }\n  .m-lg--1 {\n    margin: -0.25rem !important; }\n  .mt-lg--1,\n  .my-lg--1 {\n    margin-top: -0.25rem !important; }\n  .mr-lg--1,\n  .mx-lg--1 {\n    margin-right: -0.25rem !important; }\n  .mb-lg--1,\n  .my-lg--1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg--1,\n  .mx-lg--1 {\n    margin-left: -0.25rem !important; }\n  .m-lg-6 {\n    margin: 4.5rem !important; }\n  .mt-lg-6,\n  .my-lg-6 {\n    margin-top: 4.5rem !important; }\n  .mr-lg-6,\n  .mx-lg-6 {\n    margin-right: 4.5rem !important; }\n  .mb-lg-6,\n  .my-lg-6 {\n    margin-bottom: 4.5rem !important; }\n  .ml-lg-6,\n  .mx-lg-6 {\n    margin-left: 4.5rem !important; }\n  .m-lg-7 {\n    margin: 6rem !important; }\n  .mt-lg-7,\n  .my-lg-7 {\n    margin-top: 6rem !important; }\n  .mr-lg-7,\n  .mx-lg-7 {\n    margin-right: 6rem !important; }\n  .mb-lg-7,\n  .my-lg-7 {\n    margin-bottom: 6rem !important; }\n  .ml-lg-7,\n  .mx-lg-7 {\n    margin-left: 6rem !important; }\n  .m-lg-8 {\n    margin: 8rem !important; }\n  .mt-lg-8,\n  .my-lg-8 {\n    margin-top: 8rem !important; }\n  .mr-lg-8,\n  .mx-lg-8 {\n    margin-right: 8rem !important; }\n  .mb-lg-8,\n  .my-lg-8 {\n    margin-bottom: 8rem !important; }\n  .ml-lg-8,\n  .mx-lg-8 {\n    margin-left: 8rem !important; }\n  .m-lg-9 {\n    margin: 10rem !important; }\n  .mt-lg-9,\n  .my-lg-9 {\n    margin-top: 10rem !important; }\n  .mr-lg-9,\n  .mx-lg-9 {\n    margin-right: 10rem !important; }\n  .mb-lg-9,\n  .my-lg-9 {\n    margin-bottom: 10rem !important; }\n  .ml-lg-9,\n  .mx-lg-9 {\n    margin-left: 10rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .p-lg--9 {\n    padding: -10rem !important; }\n  .pt-lg--9,\n  .py-lg--9 {\n    padding-top: -10rem !important; }\n  .pr-lg--9,\n  .px-lg--9 {\n    padding-right: -10rem !important; }\n  .pb-lg--9,\n  .py-lg--9 {\n    padding-bottom: -10rem !important; }\n  .pl-lg--9,\n  .px-lg--9 {\n    padding-left: -10rem !important; }\n  .p-lg--8 {\n    padding: -8rem !important; }\n  .pt-lg--8,\n  .py-lg--8 {\n    padding-top: -8rem !important; }\n  .pr-lg--8,\n  .px-lg--8 {\n    padding-right: -8rem !important; }\n  .pb-lg--8,\n  .py-lg--8 {\n    padding-bottom: -8rem !important; }\n  .pl-lg--8,\n  .px-lg--8 {\n    padding-left: -8rem !important; }\n  .p-lg--7 {\n    padding: -6rem !important; }\n  .pt-lg--7,\n  .py-lg--7 {\n    padding-top: -6rem !important; }\n  .pr-lg--7,\n  .px-lg--7 {\n    padding-right: -6rem !important; }\n  .pb-lg--7,\n  .py-lg--7 {\n    padding-bottom: -6rem !important; }\n  .pl-lg--7,\n  .px-lg--7 {\n    padding-left: -6rem !important; }\n  .p-lg--6 {\n    padding: -4.5rem !important; }\n  .pt-lg--6,\n  .py-lg--6 {\n    padding-top: -4.5rem !important; }\n  .pr-lg--6,\n  .px-lg--6 {\n    padding-right: -4.5rem !important; }\n  .pb-lg--6,\n  .py-lg--6 {\n    padding-bottom: -4.5rem !important; }\n  .pl-lg--6,\n  .px-lg--6 {\n    padding-left: -4.5rem !important; }\n  .p-lg--5 {\n    padding: -3rem !important; }\n  .pt-lg--5,\n  .py-lg--5 {\n    padding-top: -3rem !important; }\n  .pr-lg--5,\n  .px-lg--5 {\n    padding-right: -3rem !important; }\n  .pb-lg--5,\n  .py-lg--5 {\n    padding-bottom: -3rem !important; }\n  .pl-lg--5,\n  .px-lg--5 {\n    padding-left: -3rem !important; }\n  .p-lg--4 {\n    padding: -1.5rem !important; }\n  .pt-lg--4,\n  .py-lg--4 {\n    padding-top: -1.5rem !important; }\n  .pr-lg--4,\n  .px-lg--4 {\n    padding-right: -1.5rem !important; }\n  .pb-lg--4,\n  .py-lg--4 {\n    padding-bottom: -1.5rem !important; }\n  .pl-lg--4,\n  .px-lg--4 {\n    padding-left: -1.5rem !important; }\n  .p-lg--3 {\n    padding: -1rem !important; }\n  .pt-lg--3,\n  .py-lg--3 {\n    padding-top: -1rem !important; }\n  .pr-lg--3,\n  .px-lg--3 {\n    padding-right: -1rem !important; }\n  .pb-lg--3,\n  .py-lg--3 {\n    padding-bottom: -1rem !important; }\n  .pl-lg--3,\n  .px-lg--3 {\n    padding-left: -1rem !important; }\n  .p-lg--2 {\n    padding: -0.5rem !important; }\n  .pt-lg--2,\n  .py-lg--2 {\n    padding-top: -0.5rem !important; }\n  .pr-lg--2,\n  .px-lg--2 {\n    padding-right: -0.5rem !important; }\n  .pb-lg--2,\n  .py-lg--2 {\n    padding-bottom: -0.5rem !important; }\n  .pl-lg--2,\n  .px-lg--2 {\n    padding-left: -0.5rem !important; }\n  .p-lg--1 {\n    padding: -0.25rem !important; }\n  .pt-lg--1,\n  .py-lg--1 {\n    padding-top: -0.25rem !important; }\n  .pr-lg--1,\n  .px-lg--1 {\n    padding-right: -0.25rem !important; }\n  .pb-lg--1,\n  .py-lg--1 {\n    padding-bottom: -0.25rem !important; }\n  .pl-lg--1,\n  .px-lg--1 {\n    padding-left: -0.25rem !important; }\n  .p-lg-6 {\n    padding: 4.5rem !important; }\n  .pt-lg-6,\n  .py-lg-6 {\n    padding-top: 4.5rem !important; }\n  .pr-lg-6,\n  .px-lg-6 {\n    padding-right: 4.5rem !important; }\n  .pb-lg-6,\n  .py-lg-6 {\n    padding-bottom: 4.5rem !important; }\n  .pl-lg-6,\n  .px-lg-6 {\n    padding-left: 4.5rem !important; }\n  .p-lg-7 {\n    padding: 6rem !important; }\n  .pt-lg-7,\n  .py-lg-7 {\n    padding-top: 6rem !important; }\n  .pr-lg-7,\n  .px-lg-7 {\n    padding-right: 6rem !important; }\n  .pb-lg-7,\n  .py-lg-7 {\n    padding-bottom: 6rem !important; }\n  .pl-lg-7,\n  .px-lg-7 {\n    padding-left: 6rem !important; }\n  .p-lg-8 {\n    padding: 8rem !important; }\n  .pt-lg-8,\n  .py-lg-8 {\n    padding-top: 8rem !important; }\n  .pr-lg-8,\n  .px-lg-8 {\n    padding-right: 8rem !important; }\n  .pb-lg-8,\n  .py-lg-8 {\n    padding-bottom: 8rem !important; }\n  .pl-lg-8,\n  .px-lg-8 {\n    padding-left: 8rem !important; }\n  .p-lg-9 {\n    padding: 10rem !important; }\n  .pt-lg-9,\n  .py-lg-9 {\n    padding-top: 10rem !important; }\n  .pr-lg-9,\n  .px-lg-9 {\n    padding-right: 10rem !important; }\n  .pb-lg-9,\n  .py-lg-9 {\n    padding-bottom: 10rem !important; }\n  .pl-lg-9,\n  .px-lg-9 {\n    padding-left: 10rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .m-xl--9 {\n    margin: -10rem !important; }\n  .mt-xl--9,\n  .my-xl--9 {\n    margin-top: -10rem !important; }\n  .mr-xl--9,\n  .mx-xl--9 {\n    margin-right: -10rem !important; }\n  .mb-xl--9,\n  .my-xl--9 {\n    margin-bottom: -10rem !important; }\n  .ml-xl--9,\n  .mx-xl--9 {\n    margin-left: -10rem !important; }\n  .m-xl--8 {\n    margin: -8rem !important; }\n  .mt-xl--8,\n  .my-xl--8 {\n    margin-top: -8rem !important; }\n  .mr-xl--8,\n  .mx-xl--8 {\n    margin-right: -8rem !important; }\n  .mb-xl--8,\n  .my-xl--8 {\n    margin-bottom: -8rem !important; }\n  .ml-xl--8,\n  .mx-xl--8 {\n    margin-left: -8rem !important; }\n  .m-xl--7 {\n    margin: -6rem !important; }\n  .mt-xl--7,\n  .my-xl--7 {\n    margin-top: -6rem !important; }\n  .mr-xl--7,\n  .mx-xl--7 {\n    margin-right: -6rem !important; }\n  .mb-xl--7,\n  .my-xl--7 {\n    margin-bottom: -6rem !important; }\n  .ml-xl--7,\n  .mx-xl--7 {\n    margin-left: -6rem !important; }\n  .m-xl--6 {\n    margin: -4.5rem !important; }\n  .mt-xl--6,\n  .my-xl--6 {\n    margin-top: -4.5rem !important; }\n  .mr-xl--6,\n  .mx-xl--6 {\n    margin-right: -4.5rem !important; }\n  .mb-xl--6,\n  .my-xl--6 {\n    margin-bottom: -4.5rem !important; }\n  .ml-xl--6,\n  .mx-xl--6 {\n    margin-left: -4.5rem !important; }\n  .m-xl--5 {\n    margin: -3rem !important; }\n  .mt-xl--5,\n  .my-xl--5 {\n    margin-top: -3rem !important; }\n  .mr-xl--5,\n  .mx-xl--5 {\n    margin-right: -3rem !important; }\n  .mb-xl--5,\n  .my-xl--5 {\n    margin-bottom: -3rem !important; }\n  .ml-xl--5,\n  .mx-xl--5 {\n    margin-left: -3rem !important; }\n  .m-xl--4 {\n    margin: -1.5rem !important; }\n  .mt-xl--4,\n  .my-xl--4 {\n    margin-top: -1.5rem !important; }\n  .mr-xl--4,\n  .mx-xl--4 {\n    margin-right: -1.5rem !important; }\n  .mb-xl--4,\n  .my-xl--4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-xl--4,\n  .mx-xl--4 {\n    margin-left: -1.5rem !important; }\n  .m-xl--3 {\n    margin: -1rem !important; }\n  .mt-xl--3,\n  .my-xl--3 {\n    margin-top: -1rem !important; }\n  .mr-xl--3,\n  .mx-xl--3 {\n    margin-right: -1rem !important; }\n  .mb-xl--3,\n  .my-xl--3 {\n    margin-bottom: -1rem !important; }\n  .ml-xl--3,\n  .mx-xl--3 {\n    margin-left: -1rem !important; }\n  .m-xl--2 {\n    margin: -0.5rem !important; }\n  .mt-xl--2,\n  .my-xl--2 {\n    margin-top: -0.5rem !important; }\n  .mr-xl--2,\n  .mx-xl--2 {\n    margin-right: -0.5rem !important; }\n  .mb-xl--2,\n  .my-xl--2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-xl--2,\n  .mx-xl--2 {\n    margin-left: -0.5rem !important; }\n  .m-xl--1 {\n    margin: -0.25rem !important; }\n  .mt-xl--1,\n  .my-xl--1 {\n    margin-top: -0.25rem !important; }\n  .mr-xl--1,\n  .mx-xl--1 {\n    margin-right: -0.25rem !important; }\n  .mb-xl--1,\n  .my-xl--1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl--1,\n  .mx-xl--1 {\n    margin-left: -0.25rem !important; }\n  .m-xl-6 {\n    margin: 4.5rem !important; }\n  .mt-xl-6,\n  .my-xl-6 {\n    margin-top: 4.5rem !important; }\n  .mr-xl-6,\n  .mx-xl-6 {\n    margin-right: 4.5rem !important; }\n  .mb-xl-6,\n  .my-xl-6 {\n    margin-bottom: 4.5rem !important; }\n  .ml-xl-6,\n  .mx-xl-6 {\n    margin-left: 4.5rem !important; }\n  .m-xl-7 {\n    margin: 6rem !important; }\n  .mt-xl-7,\n  .my-xl-7 {\n    margin-top: 6rem !important; }\n  .mr-xl-7,\n  .mx-xl-7 {\n    margin-right: 6rem !important; }\n  .mb-xl-7,\n  .my-xl-7 {\n    margin-bottom: 6rem !important; }\n  .ml-xl-7,\n  .mx-xl-7 {\n    margin-left: 6rem !important; }\n  .m-xl-8 {\n    margin: 8rem !important; }\n  .mt-xl-8,\n  .my-xl-8 {\n    margin-top: 8rem !important; }\n  .mr-xl-8,\n  .mx-xl-8 {\n    margin-right: 8rem !important; }\n  .mb-xl-8,\n  .my-xl-8 {\n    margin-bottom: 8rem !important; }\n  .ml-xl-8,\n  .mx-xl-8 {\n    margin-left: 8rem !important; }\n  .m-xl-9 {\n    margin: 10rem !important; }\n  .mt-xl-9,\n  .my-xl-9 {\n    margin-top: 10rem !important; }\n  .mr-xl-9,\n  .mx-xl-9 {\n    margin-right: 10rem !important; }\n  .mb-xl-9,\n  .my-xl-9 {\n    margin-bottom: 10rem !important; }\n  .ml-xl-9,\n  .mx-xl-9 {\n    margin-left: 10rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .p-xl--9 {\n    padding: -10rem !important; }\n  .pt-xl--9,\n  .py-xl--9 {\n    padding-top: -10rem !important; }\n  .pr-xl--9,\n  .px-xl--9 {\n    padding-right: -10rem !important; }\n  .pb-xl--9,\n  .py-xl--9 {\n    padding-bottom: -10rem !important; }\n  .pl-xl--9,\n  .px-xl--9 {\n    padding-left: -10rem !important; }\n  .p-xl--8 {\n    padding: -8rem !important; }\n  .pt-xl--8,\n  .py-xl--8 {\n    padding-top: -8rem !important; }\n  .pr-xl--8,\n  .px-xl--8 {\n    padding-right: -8rem !important; }\n  .pb-xl--8,\n  .py-xl--8 {\n    padding-bottom: -8rem !important; }\n  .pl-xl--8,\n  .px-xl--8 {\n    padding-left: -8rem !important; }\n  .p-xl--7 {\n    padding: -6rem !important; }\n  .pt-xl--7,\n  .py-xl--7 {\n    padding-top: -6rem !important; }\n  .pr-xl--7,\n  .px-xl--7 {\n    padding-right: -6rem !important; }\n  .pb-xl--7,\n  .py-xl--7 {\n    padding-bottom: -6rem !important; }\n  .pl-xl--7,\n  .px-xl--7 {\n    padding-left: -6rem !important; }\n  .p-xl--6 {\n    padding: -4.5rem !important; }\n  .pt-xl--6,\n  .py-xl--6 {\n    padding-top: -4.5rem !important; }\n  .pr-xl--6,\n  .px-xl--6 {\n    padding-right: -4.5rem !important; }\n  .pb-xl--6,\n  .py-xl--6 {\n    padding-bottom: -4.5rem !important; }\n  .pl-xl--6,\n  .px-xl--6 {\n    padding-left: -4.5rem !important; }\n  .p-xl--5 {\n    padding: -3rem !important; }\n  .pt-xl--5,\n  .py-xl--5 {\n    padding-top: -3rem !important; }\n  .pr-xl--5,\n  .px-xl--5 {\n    padding-right: -3rem !important; }\n  .pb-xl--5,\n  .py-xl--5 {\n    padding-bottom: -3rem !important; }\n  .pl-xl--5,\n  .px-xl--5 {\n    padding-left: -3rem !important; }\n  .p-xl--4 {\n    padding: -1.5rem !important; }\n  .pt-xl--4,\n  .py-xl--4 {\n    padding-top: -1.5rem !important; }\n  .pr-xl--4,\n  .px-xl--4 {\n    padding-right: -1.5rem !important; }\n  .pb-xl--4,\n  .py-xl--4 {\n    padding-bottom: -1.5rem !important; }\n  .pl-xl--4,\n  .px-xl--4 {\n    padding-left: -1.5rem !important; }\n  .p-xl--3 {\n    padding: -1rem !important; }\n  .pt-xl--3,\n  .py-xl--3 {\n    padding-top: -1rem !important; }\n  .pr-xl--3,\n  .px-xl--3 {\n    padding-right: -1rem !important; }\n  .pb-xl--3,\n  .py-xl--3 {\n    padding-bottom: -1rem !important; }\n  .pl-xl--3,\n  .px-xl--3 {\n    padding-left: -1rem !important; }\n  .p-xl--2 {\n    padding: -0.5rem !important; }\n  .pt-xl--2,\n  .py-xl--2 {\n    padding-top: -0.5rem !important; }\n  .pr-xl--2,\n  .px-xl--2 {\n    padding-right: -0.5rem !important; }\n  .pb-xl--2,\n  .py-xl--2 {\n    padding-bottom: -0.5rem !important; }\n  .pl-xl--2,\n  .px-xl--2 {\n    padding-left: -0.5rem !important; }\n  .p-xl--1 {\n    padding: -0.25rem !important; }\n  .pt-xl--1,\n  .py-xl--1 {\n    padding-top: -0.25rem !important; }\n  .pr-xl--1,\n  .px-xl--1 {\n    padding-right: -0.25rem !important; }\n  .pb-xl--1,\n  .py-xl--1 {\n    padding-bottom: -0.25rem !important; }\n  .pl-xl--1,\n  .px-xl--1 {\n    padding-left: -0.25rem !important; }\n  .p-xl-6 {\n    padding: 4.5rem !important; }\n  .pt-xl-6,\n  .py-xl-6 {\n    padding-top: 4.5rem !important; }\n  .pr-xl-6,\n  .px-xl-6 {\n    padding-right: 4.5rem !important; }\n  .pb-xl-6,\n  .py-xl-6 {\n    padding-bottom: 4.5rem !important; }\n  .pl-xl-6,\n  .px-xl-6 {\n    padding-left: 4.5rem !important; }\n  .p-xl-7 {\n    padding: 6rem !important; }\n  .pt-xl-7,\n  .py-xl-7 {\n    padding-top: 6rem !important; }\n  .pr-xl-7,\n  .px-xl-7 {\n    padding-right: 6rem !important; }\n  .pb-xl-7,\n  .py-xl-7 {\n    padding-bottom: 6rem !important; }\n  .pl-xl-7,\n  .px-xl-7 {\n    padding-left: 6rem !important; }\n  .p-xl-8 {\n    padding: 8rem !important; }\n  .pt-xl-8,\n  .py-xl-8 {\n    padding-top: 8rem !important; }\n  .pr-xl-8,\n  .px-xl-8 {\n    padding-right: 8rem !important; }\n  .pb-xl-8,\n  .py-xl-8 {\n    padding-bottom: 8rem !important; }\n  .pl-xl-8,\n  .px-xl-8 {\n    padding-left: 8rem !important; }\n  .p-xl-9 {\n    padding: 10rem !important; }\n  .pt-xl-9,\n  .py-xl-9 {\n    padding-top: 10rem !important; }\n  .pr-xl-9,\n  .px-xl-9 {\n    padding-right: 10rem !important; }\n  .pb-xl-9,\n  .py-xl-9 {\n    padding-bottom: 10rem !important; }\n  .pl-xl-9,\n  .px-xl-9 {\n    padding-left: 10rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 600 !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #5e72e4 !important; }\n\na.text-primary:hover, a.text-primary:focus {\n  color: #324cdd !important; }\n\n.text-secondary {\n  color: #f7fafc !important; }\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #d2e3ee !important; }\n\n.text-success {\n  color: #2dce89 !important; }\n\na.text-success:hover, a.text-success:focus {\n  color: #24a46d !important; }\n\n.text-info {\n  color: #11cdef !important; }\n\na.text-info:hover, a.text-info:focus {\n  color: #0da5c0 !important; }\n\n.text-warning {\n  color: #fb6340 !important; }\n\na.text-warning:hover, a.text-warning:focus {\n  color: #fa3a0e !important; }\n\n.text-danger {\n  color: #f5365c !important; }\n\na.text-danger:hover, a.text-danger:focus {\n  color: #ec0c38 !important; }\n\n.text-light {\n  color: #adb5bd !important; }\n\na.text-light:hover, a.text-light:focus {\n  color: #919ca6 !important; }\n\n.text-dark {\n  color: #212529 !important; }\n\na.text-dark:hover, a.text-dark:focus {\n  color: #0a0c0d !important; }\n\n.text-default {\n  color: #172b4d !important; }\n\na.text-default:hover, a.text-default:focus {\n  color: #0b1526 !important; }\n\n.text-white {\n  color: #fff !important; }\n\na.text-white:hover, a.text-white:focus {\n  color: #e6e6e6 !important; }\n\n.text-neutral {\n  color: #fff !important; }\n\na.text-neutral:hover, a.text-neutral:focus {\n  color: #e6e6e6 !important; }\n\n.text-darker {\n  color: black !important; }\n\na.text-darker:hover, a.text-darker:focus {\n  color: black !important; }\n\n.text-body {\n  color: #525f7f !important; }\n\n.text-muted {\n  color: #8898aa !important; }\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a:not(.btn) {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body {\n    min-width: 992px !important; }\n  .container {\n    min-width: 992px !important; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important; }\n  .table-dark {\n    color: inherit; }\n    .table-dark th,\n    .table-dark td,\n    .table-dark thead th,\n    .table-dark tbody + tbody {\n      border-color: #e9ecef; }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #e9ecef; } }\n\niframe {\n  border: 0; }\n\nfigcaption,\nfigure,\nmain {\n  display: block; }\n\nmain {\n  overflow: hidden; }\n\n.bg-blue {\n  background-color: #5e72e4 !important; }\n\na.bg-blue:hover, a.bg-blue:focus,\nbutton.bg-blue:hover,\nbutton.bg-blue:focus {\n  background-color: #324cdd !important; }\n\n.bg-indigo {\n  background-color: #5603ad !important; }\n\na.bg-indigo:hover, a.bg-indigo:focus,\nbutton.bg-indigo:hover,\nbutton.bg-indigo:focus {\n  background-color: #3d027b !important; }\n\n.bg-purple {\n  background-color: #161A40 !important; }\n\na.bg-purple:hover, a.bg-purple:focus,\nbutton.bg-purple:hover,\nbutton.bg-purple:focus {\n  background-color: #090b1a !important; }\n\n.bg-pink {\n  background-color: #f3a4b5 !important; }\n\na.bg-pink:hover, a.bg-pink:focus,\nbutton.bg-pink:hover,\nbutton.bg-pink:focus {\n  background-color: #ed7790 !important; }\n\n.bg-red {\n  background-color: #f5365c !important; }\n\na.bg-red:hover, a.bg-red:focus,\nbutton.bg-red:hover,\nbutton.bg-red:focus {\n  background-color: #ec0c38 !important; }\n\n.bg-orange {\n  background-color: #fb6340 !important; }\n\na.bg-orange:hover, a.bg-orange:focus,\nbutton.bg-orange:hover,\nbutton.bg-orange:focus {\n  background-color: #fa3a0e !important; }\n\n.bg-yellow {\n  background-color: #ffd600 !important; }\n\na.bg-yellow:hover, a.bg-yellow:focus,\nbutton.bg-yellow:hover,\nbutton.bg-yellow:focus {\n  background-color: #ccab00 !important; }\n\n.bg-green {\n  background-color: #2dce89 !important; }\n\na.bg-green:hover, a.bg-green:focus,\nbutton.bg-green:hover,\nbutton.bg-green:focus {\n  background-color: #24a46d !important; }\n\n.bg-teal {\n  background-color: #11cdef !important; }\n\na.bg-teal:hover, a.bg-teal:focus,\nbutton.bg-teal:hover,\nbutton.bg-teal:focus {\n  background-color: #0da5c0 !important; }\n\n.bg-cyan {\n  background-color: #2bffc6 !important; }\n\na.bg-cyan:hover, a.bg-cyan:focus,\nbutton.bg-cyan:hover,\nbutton.bg-cyan:focus {\n  background-color: #00f7b5 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\na.bg-white:hover, a.bg-white:focus,\nbutton.bg-white:hover,\nbutton.bg-white:focus {\n  background-color: #e6e6e6 !important; }\n\n.bg-gray {\n  background-color: #8898aa !important; }\n\na.bg-gray:hover, a.bg-gray:focus,\nbutton.bg-gray:hover,\nbutton.bg-gray:focus {\n  background-color: #6a7e95 !important; }\n\n.bg-gray-dark {\n  background-color: #32325d !important; }\n\na.bg-gray-dark:hover, a.bg-gray-dark:focus,\nbutton.bg-gray-dark:hover,\nbutton.bg-gray-dark:focus {\n  background-color: #20203c !important; }\n\n.bg-light {\n  background-color: #ced4da !important; }\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #b1bbc4 !important; }\n\n.bg-lighter {\n  background-color: #e9ecef !important; }\n\na.bg-lighter:hover, a.bg-lighter:focus,\nbutton.bg-lighter:hover,\nbutton.bg-lighter:focus {\n  background-color: #cbd3da !important; }\n\n.bg-gradient-primary {\n  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important; }\n\n.bg-gradient-secondary {\n  background: linear-gradient(87deg, #f7fafc 0, #f7f8fc 100%) !important; }\n\n.bg-gradient-success {\n  background: linear-gradient(87deg, #2dce89 0, #2dcecc 100%) !important; }\n\n.bg-gradient-info {\n  background: linear-gradient(87deg, #11cdef 0, #1171ef 100%) !important; }\n\n.bg-gradient-warning {\n  background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important; }\n\n.bg-gradient-danger {\n  background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important; }\n\n.bg-gradient-light {\n  background: linear-gradient(87deg, #adb5bd 0, #adaebd 100%) !important; }\n\n.bg-gradient-dark {\n  background: linear-gradient(87deg, #212529 0, #212229 100%) !important; }\n\n.bg-gradient-default {\n  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important; }\n\n.bg-gradient-white {\n  background: linear-gradient(87deg, #fff 0, white 100%) !important; }\n\n.bg-gradient-neutral {\n  background: linear-gradient(87deg, #fff 0, white 100%) !important; }\n\n.bg-gradient-darker {\n  background: linear-gradient(87deg, black 0, black 100%) !important; }\n\n.bg-gradient-blue {\n  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important; }\n\n.bg-gradient-indigo {\n  background: linear-gradient(87deg, #5603ad 0, #9d03ad 100%) !important; }\n\n.bg-gradient-purple {\n  background: linear-gradient(87deg, #161A40 0, #241640 100%) !important; }\n\n.bg-gradient-pink {\n  background: linear-gradient(87deg, #f3a4b5 0, #f3b4a4 100%) !important; }\n\n.bg-gradient-red {\n  background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important; }\n\n.bg-gradient-orange {\n  background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important; }\n\n.bg-gradient-yellow {\n  background: linear-gradient(87deg, #ffd600 0, #beff00 100%) !important; }\n\n.bg-gradient-green {\n  background: linear-gradient(87deg, #2dce89 0, #2dcecc 100%) !important; }\n\n.bg-gradient-teal {\n  background: linear-gradient(87deg, #11cdef 0, #1171ef 100%) !important; }\n\n.bg-gradient-cyan {\n  background: linear-gradient(87deg, #2bffc6 0, #2be0ff 100%) !important; }\n\n.bg-gradient-white {\n  background: linear-gradient(87deg, #fff 0, white 100%) !important; }\n\n.bg-gradient-gray {\n  background: linear-gradient(87deg, #8898aa 0, #888aaa 100%) !important; }\n\n.bg-gradient-gray-dark {\n  background: linear-gradient(87deg, #32325d 0, #44325d 100%) !important; }\n\n.bg-gradient-light {\n  background: linear-gradient(87deg, #ced4da 0, #cecfda 100%) !important; }\n\n.bg-gradient-lighter {\n  background: linear-gradient(87deg, #e9ecef 0, #e9eaef 100%) !important; }\n\n.bg-translucent-primary {\n  background-color: rgba(63, 87, 223, 0.6) !important; }\n\na.bg-translucent-primary:hover, a.bg-translucent-primary:focus,\nbutton.bg-translucent-primary:hover,\nbutton.bg-translucent-primary:focus {\n  background-color: rgba(42, 68, 219, 0.6) !important; }\n\n.bg-translucent-secondary {\n  background-color: rgba(221, 234, 242, 0.6) !important; }\n\na.bg-translucent-secondary:hover, a.bg-translucent-secondary:focus,\nbutton.bg-translucent-secondary:hover,\nbutton.bg-translucent-secondary:focus {\n  background-color: rgba(202, 222, 235, 0.6) !important; }\n\n.bg-translucent-success {\n  background-color: rgba(39, 177, 118, 0.6) !important; }\n\na.bg-translucent-success:hover, a.bg-translucent-success:focus,\nbutton.bg-translucent-success:hover,\nbutton.bg-translucent-success:focus {\n  background-color: rgba(34, 156, 104, 0.6) !important; }\n\n.bg-translucent-info {\n  background-color: rgba(14, 177, 206, 0.6) !important; }\n\na.bg-translucent-info:hover, a.bg-translucent-info:focus,\nbutton.bg-translucent-info:hover,\nbutton.bg-translucent-info:focus {\n  background-color: rgba(12, 156, 183, 0.6) !important; }\n\n.bg-translucent-warning {\n  background-color: rgba(250, 70, 29, 0.6) !important; }\n\na.bg-translucent-warning:hover, a.bg-translucent-warning:focus,\nbutton.bg-translucent-warning:hover,\nbutton.bg-translucent-warning:focus {\n  background-color: rgba(249, 51, 5, 0.6) !important; }\n\n.bg-translucent-danger {\n  background-color: rgba(243, 20, 64, 0.6) !important; }\n\na.bg-translucent-danger:hover, a.bg-translucent-danger:focus,\nbutton.bg-translucent-danger:hover,\nbutton.bg-translucent-danger:focus {\n  background-color: rgba(227, 11, 54, 0.6) !important; }\n\n.bg-translucent-light {\n  background-color: rgba(153, 163, 173, 0.6) !important; }\n\na.bg-translucent-light:hover, a.bg-translucent-light:focus,\nbutton.bg-translucent-light:hover,\nbutton.bg-translucent-light:focus {\n  background-color: rgba(139, 150, 162, 0.6) !important; }\n\n.bg-translucent-dark {\n  background-color: rgba(17, 19, 21, 0.6) !important; }\n\na.bg-translucent-dark:hover, a.bg-translucent-dark:focus,\nbutton.bg-translucent-dark:hover,\nbutton.bg-translucent-dark:focus {\n  background-color: rgba(6, 6, 7, 0.6) !important; }\n\n.bg-translucent-default {\n  background-color: rgba(15, 28, 50, 0.6) !important; }\n\na.bg-translucent-default:hover, a.bg-translucent-default:focus,\nbutton.bg-translucent-default:hover,\nbutton.bg-translucent-default:focus {\n  background-color: rgba(9, 17, 30, 0.6) !important; }\n\n.bg-translucent-white {\n  background-color: rgba(237, 237, 237, 0.6) !important; }\n\na.bg-translucent-white:hover, a.bg-translucent-white:focus,\nbutton.bg-translucent-white:hover,\nbutton.bg-translucent-white:focus {\n  background-color: rgba(224, 224, 224, 0.6) !important; }\n\n.bg-translucent-neutral {\n  background-color: rgba(237, 237, 237, 0.6) !important; }\n\na.bg-translucent-neutral:hover, a.bg-translucent-neutral:focus,\nbutton.bg-translucent-neutral:hover,\nbutton.bg-translucent-neutral:focus {\n  background-color: rgba(224, 224, 224, 0.6) !important; }\n\n.bg-translucent-darker {\n  background-color: rgba(0, 0, 0, 0.6) !important; }\n\na.bg-translucent-darker:hover, a.bg-translucent-darker:focus,\nbutton.bg-translucent-darker:hover,\nbutton.bg-translucent-darker:focus {\n  background-color: rgba(0, 0, 0, 0.6) !important; }\n\n.section-primary {\n  background-color: #f8f9fe !important; }\n\na.section-primary:hover, a.section-primary:focus,\nbutton.section-primary:hover,\nbutton.section-primary:focus {\n  background-color: #cbd3f8 !important; }\n\n.section-secondary {\n  background-color: #f7fafc !important; }\n\na.section-secondary:hover, a.section-secondary:focus,\nbutton.section-secondary:hover,\nbutton.section-secondary:focus {\n  background-color: #d2e3ee !important; }\n\n.section-light {\n  background-color: #ced4da !important; }\n\na.section-light:hover, a.section-light:focus,\nbutton.section-light:hover,\nbutton.section-light:focus {\n  background-color: #b1bbc4 !important; }\n\n.section-dark {\n  background-color: #212529 !important; }\n\na.section-dark:hover, a.section-dark:focus,\nbutton.section-dark:hover,\nbutton.section-dark:focus {\n  background-color: #0a0c0d !important; }\n\n.section-darker {\n  background-color: black !important; }\n\na.section-darker:hover, a.section-darker:focus,\nbutton.section-darker:hover,\nbutton.section-darker:focus {\n  background-color: black !important; }\n\n.bg-gradient-primary {\n  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important; }\n\n.bg-gradient-secondary {\n  background: linear-gradient(87deg, #f7fafc 0, #f7f8fc 100%) !important; }\n\n.bg-gradient-success {\n  background: linear-gradient(87deg, #2dce89 0, #2dcecc 100%) !important; }\n\n.bg-gradient-info {\n  background: linear-gradient(87deg, #11cdef 0, #1171ef 100%) !important; }\n\n.bg-gradient-warning {\n  background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important; }\n\n.bg-gradient-danger {\n  background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important; }\n\n.bg-gradient-light {\n  background: linear-gradient(87deg, #adb5bd 0, #adaebd 100%) !important; }\n\n.bg-gradient-dark {\n  background: linear-gradient(87deg, #212529 0, #212229 100%) !important; }\n\n.bg-gradient-default {\n  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important; }\n\n.bg-gradient-white {\n  background: linear-gradient(87deg, #fff 0, white 100%) !important; }\n\n.bg-gradient-neutral {\n  background: linear-gradient(87deg, #fff 0, white 100%) !important; }\n\n.bg-gradient-darker {\n  background: linear-gradient(87deg, black 0, black 100%) !important; }\n\n.fill-primary {\n  fill: #5e72e4; }\n\n.stroke-primary {\n  stroke: #5e72e4; }\n\n.fill-secondary {\n  fill: #f7fafc; }\n\n.stroke-secondary {\n  stroke: #f7fafc; }\n\n.fill-success {\n  fill: #2dce89; }\n\n.stroke-success {\n  stroke: #2dce89; }\n\n.fill-info {\n  fill: #11cdef; }\n\n.stroke-info {\n  stroke: #11cdef; }\n\n.fill-warning {\n  fill: #fb6340; }\n\n.stroke-warning {\n  stroke: #fb6340; }\n\n.fill-danger {\n  fill: #f5365c; }\n\n.stroke-danger {\n  stroke: #f5365c; }\n\n.fill-light {\n  fill: #adb5bd; }\n\n.stroke-light {\n  stroke: #adb5bd; }\n\n.fill-dark {\n  fill: #212529; }\n\n.stroke-dark {\n  stroke: #212529; }\n\n.fill-default {\n  fill: #172b4d; }\n\n.stroke-default {\n  stroke: #172b4d; }\n\n.fill-white {\n  fill: #fff; }\n\n.stroke-white {\n  stroke: #fff; }\n\n.fill-neutral {\n  fill: #fff; }\n\n.stroke-neutral {\n  stroke: #fff; }\n\n.fill-darker {\n  fill: black; }\n\n.stroke-darker {\n  stroke: black; }\n\n.fill-opacity-8 {\n  fill-opacity: .8; }\n\n.floating {\n  animation: floating 3s ease infinite;\n  will-change: transform; }\n  .floating:hover {\n    animation-play-state: paused; }\n\n.floating-lg {\n  animation: floating-lg 3s ease infinite; }\n\n.floating-sm {\n  animation: floating-sm 3s ease infinite; }\n\n@keyframes floating-lg {\n  0% {\n    transform: translateY(0px); }\n  50% {\n    transform: translateY(15px); }\n  100% {\n    transform: translateY(0px); } }\n\n@keyframes floating {\n  0% {\n    transform: translateY(0px); }\n  50% {\n    transform: translateY(10px); }\n  100% {\n    transform: translateY(0px); } }\n\n@keyframes floating-sm {\n  0% {\n    transform: translateY(0px); }\n  50% {\n    transform: translateY(5px); }\n  100% {\n    transform: translateY(0px); } }\n\n.floatfix:before, .floatfix:after {\n  content: '';\n  display: table; }\n\n.floatfix:after {\n  clear: both; }\n\n.img-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.opacity-1 {\n  opacity: .1 !important; }\n\n.opacity-2 {\n  opacity: .2 !important; }\n\n.opacity-3 {\n  opacity: .3 !important; }\n\n.opacity-4 {\n  opacity: .4 !important; }\n\n.opacity-5 {\n  opacity: .5 !important; }\n\n.opacity-6 {\n  opacity: .6 !important; }\n\n.opacity-7 {\n  opacity: .7 !important; }\n\n.opacity-8 {\n  opacity: .8 !important; }\n\n.opacity-8 {\n  opacity: .9 !important; }\n\n.opacity-10 {\n  opacity: 1 !important; }\n\n.overflow-visible {\n  overflow: visible !important; }\n\n.overflow-hidden {\n  overflow: hidden !important; }\n\n.top-0 {\n  top: 0; }\n\n.right-0 {\n  right: 0; }\n\n.bottom-0 {\n  bottom: 0; }\n\n.left-0 {\n  left: 0; }\n\n.top-1 {\n  top: 0.25rem; }\n\n.right-1 {\n  right: 0.25rem; }\n\n.bottom-1 {\n  bottom: 0.25rem; }\n\n.left-1 {\n  left: 0.25rem; }\n\n.top-2 {\n  top: 0.5rem; }\n\n.right-2 {\n  right: 0.5rem; }\n\n.bottom-2 {\n  bottom: 0.5rem; }\n\n.left-2 {\n  left: 0.5rem; }\n\n.top-3 {\n  top: 1rem; }\n\n.right-3 {\n  right: 1rem; }\n\n.bottom-3 {\n  bottom: 1rem; }\n\n.left-3 {\n  left: 1rem; }\n\n.top-4 {\n  top: 1.5rem; }\n\n.right-4 {\n  right: 1.5rem; }\n\n.bottom-4 {\n  bottom: 1.5rem; }\n\n.left-4 {\n  left: 1.5rem; }\n\n.top-5 {\n  top: 3rem; }\n\n.right-5 {\n  right: 3rem; }\n\n.bottom-5 {\n  bottom: 3rem; }\n\n.left-5 {\n  left: 3rem; }\n\n.top--9 {\n  top: -10rem; }\n\n.right--9 {\n  right: -10rem; }\n\n.bottom--9 {\n  bottom: -10rem; }\n\n.left--9 {\n  left: -10rem; }\n\n.top--8 {\n  top: -8rem; }\n\n.right--8 {\n  right: -8rem; }\n\n.bottom--8 {\n  bottom: -8rem; }\n\n.left--8 {\n  left: -8rem; }\n\n.top--7 {\n  top: -6rem; }\n\n.right--7 {\n  right: -6rem; }\n\n.bottom--7 {\n  bottom: -6rem; }\n\n.left--7 {\n  left: -6rem; }\n\n.top--6 {\n  top: -4.5rem; }\n\n.right--6 {\n  right: -4.5rem; }\n\n.bottom--6 {\n  bottom: -4.5rem; }\n\n.left--6 {\n  left: -4.5rem; }\n\n.top--5 {\n  top: -3rem; }\n\n.right--5 {\n  right: -3rem; }\n\n.bottom--5 {\n  bottom: -3rem; }\n\n.left--5 {\n  left: -3rem; }\n\n.top--4 {\n  top: -1.5rem; }\n\n.right--4 {\n  right: -1.5rem; }\n\n.bottom--4 {\n  bottom: -1.5rem; }\n\n.left--4 {\n  left: -1.5rem; }\n\n.top--3 {\n  top: -1rem; }\n\n.right--3 {\n  right: -1rem; }\n\n.bottom--3 {\n  bottom: -1rem; }\n\n.left--3 {\n  left: -1rem; }\n\n.top--2 {\n  top: -0.5rem; }\n\n.right--2 {\n  right: -0.5rem; }\n\n.bottom--2 {\n  bottom: -0.5rem; }\n\n.left--2 {\n  left: -0.5rem; }\n\n.top--1 {\n  top: -0.25rem; }\n\n.right--1 {\n  right: -0.25rem; }\n\n.bottom--1 {\n  bottom: -0.25rem; }\n\n.left--1 {\n  left: -0.25rem; }\n\n.top-6 {\n  top: 4.5rem; }\n\n.right-6 {\n  right: 4.5rem; }\n\n.bottom-6 {\n  bottom: 4.5rem; }\n\n.left-6 {\n  left: 4.5rem; }\n\n.top-7 {\n  top: 6rem; }\n\n.right-7 {\n  right: 6rem; }\n\n.bottom-7 {\n  bottom: 6rem; }\n\n.left-7 {\n  left: 6rem; }\n\n.top-8 {\n  top: 8rem; }\n\n.right-8 {\n  right: 8rem; }\n\n.bottom-8 {\n  bottom: 8rem; }\n\n.left-8 {\n  left: 8rem; }\n\n.top-9 {\n  top: 10rem; }\n\n.right-9 {\n  right: 10rem; }\n\n.bottom-9 {\n  bottom: 10rem; }\n\n.left-9 {\n  left: 10rem; }\n\n.center {\n  left: 50%;\n  transform: translateX(-50%); }\n\n.h-100vh {\n  height: 100vh !important; }\n\n.row.row-grid > [class*=\"col-\"] + [class*=\"col-\"] {\n  margin-top: 3rem; }\n\n@media (min-width: 992px) {\n  .row.row-grid > [class*=\"col-lg-\"] + [class*=\"col-lg-\"] {\n    margin-top: 0; } }\n\n@media (min-width: 768px) {\n  .row.row-grid > [class*=\"col-md-\"] + [class*=\"col-md-\"] {\n    margin-top: 0; } }\n\n@media (min-width: 576px) {\n  .row.row-grid > [class*=\"col-sm-\"] + [class*=\"col-sm-\"] {\n    margin-top: 0; } }\n\n.row-grid + .row-grid {\n  margin-top: 3rem; }\n\n@media (min-width: 992px) {\n  .mt--100 {\n    margin-top: -100px !important; }\n  .mr--100 {\n    margin-right: -100px !important; }\n  .mb--100 {\n    margin-bottom: -100px !important; }\n  .ml--100 {\n    margin-left: -100px !important; }\n  .mt--150 {\n    margin-top: -150px !important; }\n  .mb--150 {\n    margin-bottom: -150px !important; }\n  .mt--200 {\n    margin-top: -200px !important; }\n  .mb--200 {\n    margin-bottom: -200px !important; }\n  .mt--300 {\n    margin-top: -300px !important; }\n  .mb--300 {\n    margin-bottom: -300px !important; }\n  .pt-100 {\n    padding-top: 100px !important; }\n  .pb-100 {\n    padding-bottom: 100px !important; }\n  .pt-150 {\n    padding-top: 150px !important; }\n  .pb-150 {\n    padding-bottom: 150px !important; }\n  .pt-200 {\n    padding-top: 200px !important; }\n  .pb-200 {\n    padding-bottom: 200px !important; }\n  .pt-250 {\n    padding-top: 250px !important; }\n  .pb-250 {\n    padding-bottom: 250px !important; }\n  .pt-300 {\n    padding-top: 300px !important; }\n  .pb-300 {\n    padding-bottom: 300px !important; } }\n\n[class*=\"shadow\"] {\n  transition: all 0.15s ease; }\n\n.shadow-sm--hover:hover {\n  box-shadow: 0 0 0.5rem rgba(136, 152, 170, 0.075) !important; }\n\n.shadow--hover:hover {\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important; }\n\n.shadow-lg--hover:hover {\n  box-shadow: 0 0 3rem rgba(136, 152, 170, 0.175) !important; }\n\n.shadow-none--hover:hover {\n  box-shadow: none !important; }\n\n.font-weight-300 {\n  font-weight: 300 !important; }\n\n.font-weight-400 {\n  font-weight: 400 !important; }\n\n.font-weight-500 {\n  font-weight: 500 !important; }\n\n.font-weight-600 {\n  font-weight: 600 !important; }\n\n.font-weight-700 {\n  font-weight: 700 !important; }\n\n.font-weight-800 {\n  font-weight: 800 !important; }\n\n.font-weight-900 {\n  font-weight: 900 !important; }\n\n.text-underline {\n  text-decoration: underline; }\n\n.text-through {\n  text-decoration: line-through; }\n\n.text-xs {\n  font-size: 0.75rem !important; }\n\n.text-sm {\n  font-size: 0.875rem !important; }\n\n.text-lg {\n  font-size: 1.25rem !important; }\n\n.text-xl {\n  font-size: 1.5rem !important; }\n\n.lh-100 {\n  line-height: 1; }\n\n.lh-110 {\n  line-height: 1.1; }\n\n.lh-120 {\n  line-height: 1.2; }\n\n.lh-130 {\n  line-height: 1.3; }\n\n.lh-140 {\n  line-height: 1.4; }\n\n.lh-150 {\n  line-height: 1.5; }\n\n.lh-160 {\n  line-height: 1.6; }\n\n.lh-170 {\n  line-height: 1.7; }\n\n.lh-180 {\n  line-height: 1.8; }\n\n.ls-1 {\n  letter-spacing: .0625rem; }\n\n.ls-15 {\n  letter-spacing: .09375rem; }\n\n.ls-2 {\n  letter-spacing: 0.125rem; }\n\n.text-blue {\n  color: #5e72e4 !important; }\n\na.text-blue:hover, a.text-blue:focus {\n  color: #324cdd !important; }\n\n.text-indigo {\n  color: #5603ad !important; }\n\na.text-indigo:hover, a.text-indigo:focus {\n  color: #3d027b !important; }\n\n.text-purple {\n  color: #161A40 !important; }\n\na.text-purple:hover, a.text-purple:focus {\n  color: #090b1a !important; }\n\n.text-pink {\n  color: #f3a4b5 !important; }\n\na.text-pink:hover, a.text-pink:focus {\n  color: #ed7790 !important; }\n\n.text-red {\n  color: #f5365c !important; }\n\na.text-red:hover, a.text-red:focus {\n  color: #ec0c38 !important; }\n\n.text-orange {\n  color: #fb6340 !important; }\n\na.text-orange:hover, a.text-orange:focus {\n  color: #fa3a0e !important; }\n\n.text-yellow {\n  color: #ffd600 !important; }\n\na.text-yellow:hover, a.text-yellow:focus {\n  color: #ccab00 !important; }\n\n.text-green {\n  color: #2dce89 !important; }\n\na.text-green:hover, a.text-green:focus {\n  color: #24a46d !important; }\n\n.text-teal {\n  color: #11cdef !important; }\n\na.text-teal:hover, a.text-teal:focus {\n  color: #0da5c0 !important; }\n\n.text-cyan {\n  color: #2bffc6 !important; }\n\na.text-cyan:hover, a.text-cyan:focus {\n  color: #00f7b5 !important; }\n\n.text-white {\n  color: #fff !important; }\n\na.text-white:hover, a.text-white:focus {\n  color: #e6e6e6 !important; }\n\n.text-gray {\n  color: #8898aa !important; }\n\na.text-gray:hover, a.text-gray:focus {\n  color: #6a7e95 !important; }\n\n.text-gray-dark {\n  color: #32325d !important; }\n\na.text-gray-dark:hover, a.text-gray-dark:focus {\n  color: #20203c !important; }\n\n.text-light {\n  color: #ced4da !important; }\n\na.text-light:hover, a.text-light:focus {\n  color: #b1bbc4 !important; }\n\n.text-lighter {\n  color: #e9ecef !important; }\n\na.text-lighter:hover, a.text-lighter:focus {\n  color: #cbd3da !important; }\n\n@media (min-width: 992px) {\n  .transform-perspective-right {\n    transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg); }\n  .transform-perspective-left {\n    transform: scale(1) perspective(2000px) rotateY(11deg) rotateX(2deg) rotate(-2deg); } }\n\n.alert {\n  font-size: 0.875rem; }\n\n.alert-heading {\n  font-weight: 600;\n  font-size: 0.9375rem;\n  margin-top: .15rem; }\n\n.alert-icon {\n  font-size: 1.25rem;\n  margin-right: 1.25rem;\n  display: inline-block;\n  vertical-align: middle; }\n  .alert-icon i.ni {\n    position: relative;\n    top: 1px; }\n\n.alert-text {\n  display: inline-block;\n  vertical-align: middle; }\n\n[class*=\"alert-\"] .alert-link {\n  color: #fff;\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.5); }\n\n.alert-dismissible .close {\n  top: 50%;\n  right: 1.5rem;\n  padding: 0;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 1; }\n  .alert-dismissible .close:hover, .alert-dismissible .close:focus {\n    color: rgba(255, 255, 255, 0.9);\n    opacity: 1 !important; }\n  @media (max-width: 575.98px) {\n    .alert-dismissible .close {\n      top: 1rem;\n      right: .5rem; } }\n  .alert-dismissible .close > span:not(.sr-only) {\n    font-size: 1.5rem;\n    background-color: transparent;\n    color: rgba(255, 255, 255, 0.6); }\n  .alert-dismissible .close:hover > span:not(.sr-only), .alert-dismissible .close:focus > span:not(.sr-only) {\n    background-color: transparent;\n    color: rgba(255, 255, 255, 0.9); }\n\n.avatar {\n  color: #fff;\n  background-color: #adb5bd;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  border-radius: 50%;\n  height: 48px;\n  width: 48px; }\n  .avatar img {\n    width: 100%;\n    border-radius: 50%; }\n  .avatar + .avatar-content {\n    display: inline-block;\n    margin-left: .75rem; }\n\n.avatar-lg {\n  width: 58px;\n  height: 58px;\n  font-size: 0.875rem; }\n\n.avatar-sm {\n  width: 36px;\n  height: 36px;\n  font-size: 0.875rem; }\n\n.avatar-group .avatar {\n  position: relative;\n  z-index: 2;\n  border: 2px solid #fff; }\n  .avatar-group .avatar:hover {\n    z-index: 3; }\n\n.avatar-group .avatar + .avatar {\n  margin-left: -1rem; }\n\n.badge {\n  text-transform: uppercase; }\n  .badge a {\n    color: #fff; }\n\n.badge-md {\n  padding: .65em 1em; }\n\n.badge-lg {\n  padding: .85em 1.375em; }\n\n.badge-inline {\n  margin-right: .625rem; }\n  .badge-inline + span {\n    top: 2px;\n    position: relative; }\n    .badge-inline + span > a {\n      text-decoration: underline; }\n\n.btn .badge:not(:first-child) {\n  margin-left: .5rem; }\n\n.btn .badge:not(:last-child) {\n  margin-right: .5rem; }\n\n.badge-circle {\n  text-align: center;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  font-size: .875rem; }\n\n.badge-dot {\n  padding-left: 0;\n  padding-right: 0;\n  background: transparent;\n  font-weight: 400;\n  font-size: 0.875rem;\n  text-transform: none; }\n  .badge-dot strong {\n    color: #32325d; }\n  .badge-dot i {\n    display: inline-block;\n    vertical-align: middle;\n    width: .375rem;\n    height: .375rem;\n    border-radius: 50%;\n    margin-right: .375rem; }\n  .badge-dot.badge-md i {\n    width: .5rem;\n    height: .5rem; }\n  .badge-dot.badge-lg i {\n    width: .625rem;\n    height: .625rem; }\n\n.btn {\n  position: relative;\n  text-transform: none;\n  transition: all 0.15s ease;\n  letter-spacing: 0.025em;\n  font-size: 0.875rem;\n  will-change: transform; }\n  .btn:hover {\n    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n    transform: translateY(-1px); }\n  .btn:not(:last-child) {\n    margin-right: .5rem; }\n  .btn i:not(:first-child),\n  .btn svg:not(:first-child) {\n    margin-left: .5rem; }\n  .btn i:not(:last-child),\n  .btn svg:not(:last-child) {\n    margin-right: .5rem; }\n\n.btn-group .btn,\n.input-group .btn {\n  margin-right: 0;\n  transform: translateY(0); }\n\n.btn-sm, .btn-group-sm > .btn {\n  font-size: 0.75rem; }\n\n.btn-lg, .btn-group-lg > .btn {\n  font-size: 0.875rem; }\n\n[class*=\"btn-outline-\"] {\n  border-width: 1px; }\n\n.btn-outline-secondary {\n  color: #4385b1; }\n\n.btn-inner--icon i:not(.fa) {\n  position: relative;\n  top: 2px; }\n\n.btn-link {\n  font-weight: 600;\n  box-shadow: none; }\n  .btn-link:hover {\n    box-shadow: none;\n    transform: none; }\n\n.btn-neutral {\n  color: #5e72e4; }\n\n.btn-icon .btn-inner--icon img {\n  width: 20px; }\n\n.btn-icon .btn-inner--text:not(:first-child) {\n  margin-left: 0.75em; }\n\n.btn-icon .btn-inner--text:not(:last-child) {\n  margin-right: 0.75em; }\n\n.btn-icon-only {\n  width: 2.375rem;\n  height: 2.375rem;\n  padding: 0; }\n\na.btn-icon-only {\n  line-height: 2.5; }\n\n.btn-icon-only.btn-sm, .btn-group-sm > .btn-icon-only.btn {\n  width: 2rem;\n  height: 2rem; }\n\n.btn-icon-clipboard {\n  margin: 0;\n  padding: 1.5rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.25;\n  color: #32325d;\n  background-color: #f6f9fc;\n  border-radius: 0.375rem;\n  border: 0;\n  text-align: left;\n  font-family: inherit;\n  display: inline-block;\n  vertical-align: middle;\n  text-decoration: none;\n  -moz-appearance: none;\n  cursor: pointer;\n  width: 100%;\n  margin: .5rem 0; }\n  .btn-icon-clipboard:hover {\n    background-color: #fff;\n    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 4px 16px; }\n  .btn-icon-clipboard > div {\n    align-items: center;\n    display: flex; }\n  .btn-icon-clipboard i {\n    box-sizing: content-box;\n    color: #5e72e4;\n    vertical-align: middle;\n    font-size: 1.5rem; }\n  .btn-icon-clipboard span {\n    display: inline-block;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    margin-left: 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    vertical-align: middle; }\n\n.btn-facebook {\n  color: #fff;\n  background-color: #3b5999;\n  border-color: #3b5999;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-facebook:hover {\n    color: #fff;\n    background-color: #3b5999;\n    border-color: #3b5999; }\n  .btn-facebook:focus, .btn-facebook.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(59, 89, 153, 0.5); }\n  .btn-facebook.disabled, .btn-facebook:disabled {\n    color: #fff;\n    background-color: #3b5999;\n    border-color: #3b5999; }\n  .btn-facebook:not(:disabled):not(.disabled):active, .btn-facebook:not(:disabled):not(.disabled).active,\n  .show > .btn-facebook.dropdown-toggle {\n    color: #fff;\n    background-color: #2d4474;\n    border-color: #3b5999; }\n    .btn-facebook:not(:disabled):not(.disabled):active:focus, .btn-facebook:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-facebook.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(59, 89, 153, 0.5); }\n\n.btn-twitter {\n  color: #fff;\n  background-color: #1da1f2;\n  border-color: #1da1f2;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-twitter:hover {\n    color: #fff;\n    background-color: #1da1f2;\n    border-color: #1da1f2; }\n  .btn-twitter:focus, .btn-twitter.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(29, 161, 242, 0.5); }\n  .btn-twitter.disabled, .btn-twitter:disabled {\n    color: #fff;\n    background-color: #1da1f2;\n    border-color: #1da1f2; }\n  .btn-twitter:not(:disabled):not(.disabled):active, .btn-twitter:not(:disabled):not(.disabled).active,\n  .show > .btn-twitter.dropdown-toggle {\n    color: #fff;\n    background-color: #0c85d0;\n    border-color: #1da1f2; }\n    .btn-twitter:not(:disabled):not(.disabled):active:focus, .btn-twitter:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-twitter.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(29, 161, 242, 0.5); }\n\n.btn-google-plus {\n  color: #fff;\n  background-color: #dd4b39;\n  border-color: #dd4b39;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-google-plus:hover {\n    color: #fff;\n    background-color: #dd4b39;\n    border-color: #dd4b39; }\n  .btn-google-plus:focus, .btn-google-plus.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(221, 75, 57, 0.5); }\n  .btn-google-plus.disabled, .btn-google-plus:disabled {\n    color: #fff;\n    background-color: #dd4b39;\n    border-color: #dd4b39; }\n  .btn-google-plus:not(:disabled):not(.disabled):active, .btn-google-plus:not(:disabled):not(.disabled).active,\n  .show > .btn-google-plus.dropdown-toggle {\n    color: #fff;\n    background-color: #c23321;\n    border-color: #dd4b39; }\n    .btn-google-plus:not(:disabled):not(.disabled):active:focus, .btn-google-plus:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-google-plus.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(221, 75, 57, 0.5); }\n\n.btn-instagram {\n  color: #fff;\n  background-color: #e4405f;\n  border-color: #e4405f;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-instagram:hover {\n    color: #fff;\n    background-color: #e4405f;\n    border-color: #e4405f; }\n  .btn-instagram:focus, .btn-instagram.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(228, 64, 95, 0.5); }\n  .btn-instagram.disabled, .btn-instagram:disabled {\n    color: #fff;\n    background-color: #e4405f;\n    border-color: #e4405f; }\n  .btn-instagram:not(:disabled):not(.disabled):active, .btn-instagram:not(:disabled):not(.disabled).active,\n  .show > .btn-instagram.dropdown-toggle {\n    color: #fff;\n    background-color: #d31e40;\n    border-color: #e4405f; }\n    .btn-instagram:not(:disabled):not(.disabled):active:focus, .btn-instagram:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-instagram.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(228, 64, 95, 0.5); }\n\n.btn-pinterest {\n  color: #fff;\n  background-color: #bd081c;\n  border-color: #bd081c;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-pinterest:hover {\n    color: #fff;\n    background-color: #bd081c;\n    border-color: #bd081c; }\n  .btn-pinterest:focus, .btn-pinterest.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(189, 8, 28, 0.5); }\n  .btn-pinterest.disabled, .btn-pinterest:disabled {\n    color: #fff;\n    background-color: #bd081c;\n    border-color: #bd081c; }\n  .btn-pinterest:not(:disabled):not(.disabled):active, .btn-pinterest:not(:disabled):not(.disabled).active,\n  .show > .btn-pinterest.dropdown-toggle {\n    color: #fff;\n    background-color: #8c0615;\n    border-color: #bd081c; }\n    .btn-pinterest:not(:disabled):not(.disabled):active:focus, .btn-pinterest:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-pinterest.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(189, 8, 28, 0.5); }\n\n.btn-youtube {\n  color: #fff;\n  background-color: #cd201f;\n  border-color: #cd201f;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-youtube:hover {\n    color: #fff;\n    background-color: #cd201f;\n    border-color: #cd201f; }\n  .btn-youtube:focus, .btn-youtube.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(205, 32, 31, 0.5); }\n  .btn-youtube.disabled, .btn-youtube:disabled {\n    color: #fff;\n    background-color: #cd201f;\n    border-color: #cd201f; }\n  .btn-youtube:not(:disabled):not(.disabled):active, .btn-youtube:not(:disabled):not(.disabled).active,\n  .show > .btn-youtube.dropdown-toggle {\n    color: #fff;\n    background-color: #a11918;\n    border-color: #cd201f; }\n    .btn-youtube:not(:disabled):not(.disabled):active:focus, .btn-youtube:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-youtube.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(205, 32, 31, 0.5); }\n\n.btn-slack {\n  color: #fff;\n  background-color: #3aaf85;\n  border-color: #3aaf85;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-slack:hover {\n    color: #fff;\n    background-color: #3aaf85;\n    border-color: #3aaf85; }\n  .btn-slack:focus, .btn-slack.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(58, 175, 133, 0.5); }\n  .btn-slack.disabled, .btn-slack:disabled {\n    color: #fff;\n    background-color: #3aaf85;\n    border-color: #3aaf85; }\n  .btn-slack:not(:disabled):not(.disabled):active, .btn-slack:not(:disabled):not(.disabled).active,\n  .show > .btn-slack.dropdown-toggle {\n    color: #fff;\n    background-color: #2d8968;\n    border-color: #3aaf85; }\n    .btn-slack:not(:disabled):not(.disabled):active:focus, .btn-slack:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-slack.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(58, 175, 133, 0.5); }\n\n.btn-dribbble {\n  color: #fff;\n  background-color: #ea4c89;\n  border-color: #ea4c89;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-dribbble:hover {\n    color: #fff;\n    background-color: #ea4c89;\n    border-color: #ea4c89; }\n  .btn-dribbble:focus, .btn-dribbble.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(234, 76, 137, 0.5); }\n  .btn-dribbble.disabled, .btn-dribbble:disabled {\n    color: #fff;\n    background-color: #ea4c89;\n    border-color: #ea4c89; }\n  .btn-dribbble:not(:disabled):not(.disabled):active, .btn-dribbble:not(:disabled):not(.disabled).active,\n  .show > .btn-dribbble.dropdown-toggle {\n    color: #fff;\n    background-color: #e51e6b;\n    border-color: #ea4c89; }\n    .btn-dribbble:not(:disabled):not(.disabled):active:focus, .btn-dribbble:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dribbble.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(234, 76, 137, 0.5); }\n\n.btn-github {\n  color: #fff;\n  background-color: #222222;\n  border-color: #222222;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .btn-github:hover {\n    color: #fff;\n    background-color: #222222;\n    border-color: #222222; }\n  .btn-github:focus, .btn-github.focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(34, 34, 34, 0.5); }\n  .btn-github.disabled, .btn-github:disabled {\n    color: #fff;\n    background-color: #222222;\n    border-color: #222222; }\n  .btn-github:not(:disabled):not(.disabled):active, .btn-github:not(:disabled):not(.disabled).active,\n  .show > .btn-github.dropdown-toggle {\n    color: #fff;\n    background-color: #090909;\n    border-color: #222222; }\n    .btn-github:not(:disabled):not(.disabled):active:focus, .btn-github:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-github.dropdown-toggle:focus {\n      box-shadow: none, 0 0 0 0 rgba(34, 34, 34, 0.5); }\n\n.card-translucent {\n  background-color: rgba(18, 91, 152, 0.08); }\n\n.card-profile-image {\n  position: relative; }\n  .card-profile-image img {\n    max-width: 180px;\n    border-radius: 0.375rem;\n    transform: translate(-50%, -30%);\n    position: absolute;\n    left: 50%;\n    transition: all 0.15s ease; }\n    .card-profile-image img:hover {\n      transform: translate(-50%, -33%); }\n\n.card-profile-stats {\n  padding: 1rem 0; }\n  .card-profile-stats > div {\n    text-align: center;\n    margin-right: 1rem;\n    padding: .875rem; }\n    .card-profile-stats > div:last-child {\n      margin-right: 0; }\n    .card-profile-stats > div .heading {\n      font-size: 1.1rem;\n      font-weight: bold;\n      display: block; }\n    .card-profile-stats > div .description {\n      font-size: .875rem;\n      color: #adb5bd; }\n\n.card-profile-actions {\n  padding: .875rem; }\n\n.card-blockquote {\n  padding: 2rem;\n  position: relative; }\n  .card-blockquote .svg-bg {\n    display: block;\n    width: 100%;\n    height: 95px;\n    position: absolute;\n    top: -94px;\n    left: 0; }\n\n.card-lift--hover:hover {\n  transform: translateY(-20px);\n  transition: all 0.15s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .card-lift--hover:hover {\n      transition: none; } }\n\n.card-stats .card-body {\n  padding: 1rem 1.5rem; }\n\n.card-stats .card-status-bullet {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(50%, -50%); }\n\n.chart {\n  position: relative;\n  height: 350px; }\n\n.chart-sm {\n  height: 230px; }\n\n.chart-legend {\n  display: flex;\n  justify-content: center;\n  margin-top: 2.5rem;\n  font-size: 0.875rem;\n  text-align: center;\n  color: #8898aa; }\n\n.chart-legend-item {\n  display: inline-flex;\n  align-items: center; }\n  .chart-legend-item + .chart-legend-item {\n    margin-left: 1rem; }\n\n.chart-legend-indicator {\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-right: 0.375rem;\n  border-radius: 50%; }\n\n#chart-tooltip {\n  z-index: 0; }\n  #chart-tooltip .arrow {\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%) translateX(-0.5rem); }\n\n.chart-info-overlay {\n  position: absolute;\n  top: 0;\n  left: 5%;\n  max-width: 350px;\n  padding: 20px;\n  z-index: 1; }\n\n.close {\n  transition: all 0.15s ease; }\n  .close > span:not(.sr-only) {\n    background-color: transparent;\n    color: rgba(0, 0, 0, 0.6);\n    line-height: 17px;\n    height: 1.25rem;\n    width: 1.25rem;\n    border-radius: 50%;\n    font-size: 1.25rem;\n    display: block;\n    transition: all 0.15s ease; }\n  .close:hover, .close:focus {\n    background-color: transparent;\n    color: rgba(0, 0, 0, 0.9);\n    outline: none; }\n    .close:hover span:not(.sr-only), .close:focus span:not(.sr-only) {\n      background-color: transparent; }\n\n.main-content {\n  position: relative; }\n  .main-content .navbar-top {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n    background-color: transparent;\n    padding-left: 0 !important;\n    padding-right: 0 !important; }\n  @media (min-width: 768px) {\n    .main-content .container-fluid {\n      padding-left: 39px !important;\n      padding-right: 39px !important; } }\n\n.navbar-vertical.navbar-expand-xs.fixed-left + .main-content {\n  margin-left: 250px; }\n\n.navbar-vertical.navbar-expand-xs.fixed-right + .main-content {\n  margin-right: 250px; }\n\n@media (min-width: 576px) {\n  .navbar-vertical.navbar-expand-sm.fixed-left + .main-content {\n    margin-left: 250px; }\n  .navbar-vertical.navbar-expand-sm.fixed-right + .main-content {\n    margin-right: 250px; } }\n\n@media (min-width: 768px) {\n  .navbar-vertical.navbar-expand-md.fixed-left + .main-content {\n    margin-left: 250px; }\n  .navbar-vertical.navbar-expand-md.fixed-right + .main-content {\n    margin-right: 250px; } }\n\n@media (min-width: 992px) {\n  .navbar-vertical.navbar-expand-lg.fixed-left + .main-content {\n    margin-left: 250px; }\n  .navbar-vertical.navbar-expand-lg.fixed-right + .main-content {\n    margin-right: 250px; } }\n\n@media (min-width: 1200px) {\n  .navbar-vertical.navbar-expand-xl.fixed-left + .main-content {\n    margin-left: 250px; }\n  .navbar-vertical.navbar-expand-xl.fixed-right + .main-content {\n    margin-right: 250px; } }\n\n.custom-checkbox .custom-control-input ~ .custom-control-label {\n  cursor: pointer;\n  font-size: 0.875rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  border-color: #5e72e4; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:disabled ~ .custom-control-label::before {\n  border-color: #e9ecef; }\n\n.custom-checkbox .custom-control-input:disabled:checked::before {\n  border-color: rgba(94, 114, 228, 0.5); }\n\n.custom-control-label::before {\n  border: 1px solid #cad1d7;\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.custom-control-label span {\n  position: relative;\n  top: 2px; }\n\n.custom-control-label {\n  margin-bottom: 0; }\n\n.custom-control-alternative .custom-control-label::before {\n  border: 0;\n  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02); }\n\n.custom-control-alternative .custom-control-input:checked ~ .custom-control-label::before {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n\n.custom-control-alternative .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-alternative .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02); }\n\n.custom-checkbox .custom-control-input ~ .custom-control-label {\n  cursor: pointer;\n  font-size: 0.875rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  border-color: #5e72e4; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:disabled ~ .custom-control-label::before {\n  border-color: #e9ecef; }\n\n.custom-checkbox .custom-control-input:disabled:checked::before {\n  border-color: rgba(94, 114, 228, 0.5); }\n\n.custom-radio .custom-control-input ~ .custom-control-label {\n  cursor: pointer;\n  font-size: 0.875rem; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  border-color: #5e72e4; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-radio .custom-control-input:disabled ~ .custom-control-label::before {\n  border-color: #e9ecef; }\n\n.custom-radio .custom-control-input:disabled:checked::before {\n  border-color: rgba(94, 114, 228, 0.5); }\n\n.custom-toggle {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 1.5rem; }\n  .custom-toggle input {\n    display: none; }\n    .custom-toggle input:checked + .custom-toggle-slider {\n      border: 1px solid #5e72e4; }\n      .custom-toggle input:checked + .custom-toggle-slider:before {\n        background: #5e72e4;\n        transform: translateX(1.625rem); }\n    .custom-toggle input:disabled + .custom-toggle-slider {\n      border: 1px solid #e9ecef; }\n    .custom-toggle input:disabled:checked + .custom-toggle-slider {\n      border: 1px solid #e9ecef; }\n      .custom-toggle input:disabled:checked + .custom-toggle-slider:before {\n        background-color: #8a98eb; }\n\n.custom-toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: 1px solid #cad1d7;\n  border-radius: 34px !important;\n  background-color: transparent; }\n  .custom-toggle-slider:before {\n    position: absolute;\n    content: \"\";\n    height: 18px;\n    width: 18px;\n    left: 2px;\n    bottom: 2px;\n    border-radius: 50% !important;\n    background-color: #e9ecef;\n    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.dropdown,\n.dropup,\n.dropright,\n.dropleft {\n  display: inline-block; }\n\n.dropdown-menu {\n  min-width: 12rem; }\n  .dropdown-menu .dropdown-item {\n    padding: .5rem 1rem;\n    font-size: 0.875rem; }\n    .dropdown-menu .dropdown-item > i,\n    .dropdown-menu .dropdown-item > svg {\n      margin-right: 1rem;\n      font-size: 1rem;\n      vertical-align: -17%; }\n\n.dropdown-header {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: #f6f9fc;\n  font-size: .625rem;\n  text-transform: uppercase;\n  font-weight: 700; }\n\n.dropdown-menu a.media > div:first-child {\n  line-height: 1; }\n\n.dropdown-menu a.media p {\n  color: #8898aa; }\n\n.dropdown-menu a.media:hover .heading,\n.dropdown-menu a.media:hover p {\n  color: #172b4d !important; }\n\n.dropdown-menu-sm {\n  min-width: 100px;\n  border: 0.4375rem; }\n\n.dropdown-menu-lg {\n  min-width: 260px;\n  border-radius: 0.4375rem; }\n\n.dropdown-menu-xl {\n  min-width: 450px;\n  border-radius: 0.4375rem; }\n\n.footer {\n  background: #f7fafc;\n  padding: 2.5rem 0; }\n  .footer .col-footer .heading {\n    color: #8898aa;\n    letter-spacing: 0;\n    font-size: 0.875rem;\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-bottom: 1rem; }\n  .footer .nav .nav-item .nav-link,\n  .footer .footer-link {\n    color: #8898aa !important; }\n    .footer .nav .nav-item .nav-link:hover,\n    .footer .footer-link:hover {\n      color: #525f7f !important; }\n  .footer .list-unstyled li a {\n    display: inline-block;\n    padding: .125rem 0;\n    color: #8898aa;\n    font-size: 0.85rem; }\n    .footer .list-unstyled li a:hover {\n      color: #525f7f; }\n  .footer .copyright {\n    font-size: 0.875rem; }\n\n.footer-dark .col-footer .heading {\n  color: #fff; }\n\n.nav-footer .nav-link {\n  font-size: 0.875rem; }\n\n.nav-footer .nav-item:last-child .nav-link {\n  padding-right: 0; }\n\n.footer.has-cards {\n  overflow: hidden;\n  padding-top: 500px;\n  margin-top: -420px;\n  position: relative;\n  background: transparent;\n  pointer-events: none; }\n  .footer.has-cards:before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 600px;\n    height: 2000px;\n    background: #f7fafc;\n    transform: skew(0, -8deg); }\n  .footer.has-cards .container {\n    pointer-events: auto;\n    position: relative; }\n\n.form-control-label {\n  color: #525f7f;\n  font-size: 0.875rem;\n  font-weight: 600; }\n\n.form-control {\n  font-size: 0.875rem; }\n  .form-control:focus::placeholder {\n    color: #adb5bd; }\n\ntextarea[resize=\"none\"] {\n  resize: none !important; }\n\ntextarea[resize=\"both\"] {\n  resize: both !important; }\n\ntextarea[resize=\"vertical\"] {\n  resize: vertical !important; }\n\ntextarea[resize=\"horizontal\"] {\n  resize: horizontal !important; }\n\n.form-control-muted {\n  background-color: #F7FAFE;\n  border-color: #F7FAFE;\n  box-shadow: none; }\n  .form-control-muted:focus {\n    background-color: #fcfdff; }\n\n.form-control-alternative {\n  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);\n  border: 0;\n  transition: box-shadow .15s ease; }\n  .form-control-alternative:focus {\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n\n.form-control-lg {\n  font-size: 1rem; }\n\n.has-success,\n.has-danger {\n  position: relative; }\n  .has-success:after,\n  .has-danger:after {\n    width: 19px;\n    height: 19px;\n    line-height: 19px;\n    text-align: center;\n    font-family: 'NucleoIcons';\n    display: inline-block;\n    position: absolute;\n    right: 15px;\n    top: 2px;\n    transform: translateY(50%);\n    border-radius: 50%;\n    font-size: 9px;\n    opacity: 1; }\n\n.has-success:after {\n  content: \"\\ea26\";\n  color: daken(#2dce89, 18%);\n  background-color: #69deac; }\n\n.has-success .form-control {\n  background-color: #fff; }\n  .has-success .form-control:focus {\n    border-color: rgba(50, 151, 211, 0.25); }\n  .has-success .form-control::placeholder {\n    color: #2dce89; }\n\n.has-danger:after {\n  content: \"\\ea53\";\n  color: daken(#fb6340, 18%);\n  background-color: #fda08b; }\n\n.has-danger .form-control {\n  background-color: #fff; }\n  .has-danger .form-control:focus {\n    border-color: rgba(50, 151, 211, 0.25); }\n  .has-danger .form-control::placeholder {\n    color: #fb6340; }\n\n.input-group {\n  box-shadow: none;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease; }\n  .input-group .form-control {\n    box-shadow: none; }\n    .input-group .form-control:not(:first-child) {\n      border-left: 0;\n      padding-left: 0; }\n    .input-group .form-control:not(:last-child) {\n      border-right: 0;\n      padding-right: 0; }\n    .input-group .form-control:focus {\n      box-shadow: none; }\n\n.input-group-text {\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.input-group-alternative {\n  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);\n  border: 0;\n  transition: box-shadow .15s ease; }\n  .input-group-alternative .form-control,\n  .input-group-alternative .input-group-text {\n    border: 0;\n    box-shadow: none; }\n\n.focused .input-group-alternative {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important; }\n\n.focused .input-group {\n  box-shadow: none; }\n\n.focused .input-group-text {\n  color: #8898aa;\n  background-color: #fff;\n  border-color: rgba(50, 151, 211, 0.25); }\n\n.focused .form-control {\n  border-color: rgba(50, 151, 211, 0.25); }\n\n.header {\n  position: relative; }\n\n.icon {\n  width: 3rem;\n  height: 3rem; }\n  .icon i, .icon svg {\n    font-size: 2.25rem; }\n  .icon + .icon-text {\n    padding-left: 1rem;\n    width: calc(100% - 3rem - 1); }\n\n.icon-xl {\n  width: 5rem;\n  height: 5rem; }\n  .icon-xl i, .icon-xl svg {\n    font-size: 4.25rem; }\n  .icon-xl + .icon-text {\n    width: calc(100% - 5rem - 1); }\n\n.icon-lg {\n  width: 4rem;\n  height: 4rem; }\n  .icon-lg i, .icon-lg svg {\n    font-size: 3.25rem; }\n  .icon-lg + .icon-text {\n    width: calc(100% - 4rem - 1); }\n\n.icon-sm {\n  width: 2rem;\n  height: 2rem; }\n  .icon-sm i, .icon-sm svg {\n    font-size: 1.25rem; }\n  .icon-sm + .icon-text {\n    width: calc(100% - 2rem - 1); }\n\n.icon-shape {\n  padding: 12px;\n  text-align: center;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%; }\n  .icon-shape i, .icon-shape svg {\n    font-size: 1.25rem; }\n  .icon-shape.icon-lg i, .icon-shape.icon-lg svg {\n    font-size: 1.625rem; }\n  .icon-shape.icon-sm i, .icon-shape.icon-sm svg {\n    font-size: .875rem; }\n  .icon-shape svg {\n    width: 30px;\n    height: 30px; }\n\n.icon-shape-primary {\n  color: #2643e9;\n  background-color: rgba(138, 152, 235, 0.5); }\n\n.icon-shape-secondary {\n  color: #cfe3f1;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.icon-shape-success {\n  color: #1aae6f;\n  background-color: rgba(84, 218, 161, 0.5); }\n\n.icon-shape-info {\n  color: #03acca;\n  background-color: rgba(65, 215, 242, 0.5); }\n\n.icon-shape-warning {\n  color: #ff3709;\n  background-color: rgba(252, 140, 114, 0.5); }\n\n.icon-shape-danger {\n  color: #f80031;\n  background-color: rgba(247, 103, 131, 0.5); }\n\n.icon-shape-light {\n  color: #879cb0;\n  background-color: rgba(201, 207, 212, 0.5); }\n\n.icon-shape-dark {\n  color: #090c0e;\n  background-color: rgba(56, 63, 69, 0.5); }\n\n.icon-shape-default {\n  color: #091428;\n  background-color: rgba(35, 65, 116, 0.5); }\n\n.icon-shape-white {\n  color: #e8e3e3;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.icon-shape-neutral {\n  color: #e8e3e3;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.icon-shape-darker {\n  color: black;\n  background-color: rgba(26, 26, 26, 0.5); }\n\n.input-group {\n  box-shadow: none;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease; }\n  .input-group .form-control {\n    box-shadow: none; }\n    .input-group .form-control:not(:first-child) {\n      border-left: 0;\n      padding-left: 0; }\n    .input-group .form-control:not(:last-child) {\n      border-right: 0;\n      padding-right: 0; }\n    .input-group .form-control:focus {\n      box-shadow: none; }\n\n.input-group-text {\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.input-group-alternative {\n  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);\n  border: 0;\n  transition: box-shadow .15s ease; }\n  .input-group-alternative .form-control,\n  .input-group-alternative .input-group-text {\n    border: 0;\n    box-shadow: none; }\n\n.focused .input-group-alternative {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important; }\n\n.focused .input-group {\n  box-shadow: none; }\n\n.focused .input-group-text {\n  color: #8898aa;\n  background-color: #fff;\n  border-color: rgba(50, 151, 211, 0.25); }\n\n.focused .form-control {\n  border-color: rgba(50, 151, 211, 0.25); }\n\n.list-group-space .list-group-item {\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem; }\n\n.list-group-img {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  vertical-align: top;\n  margin: -.1rem 1.2rem 0 -.2rem; }\n\n.list-group-content {\n  flex: 1;\n  min-width: 0; }\n  .list-group-content > p {\n    color: #adb5bd;\n    line-height: 1.5;\n    margin: .2rem 0 0; }\n\n.list-group-heading {\n  font-size: 1rem;\n  color: #32325d; }\n  .list-group-heading > small {\n    float: right;\n    color: #adb5bd;\n    font-weight: 500; }\n\n.map-canvas {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  border-radius: 0.375rem; }\n\n.mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.15s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .mask {\n      transition: none; } }\n\n.modal-fluid .modal-dialog {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.modal-fluid .modal-content {\n  border-radius: 0; }\n\n.modal-primary .modal-title {\n  color: #fff; }\n\n.modal-primary .modal-header,\n.modal-primary .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-primary .modal-content {\n  background-color: #5e72e4;\n  color: #fff; }\n  .modal-primary .modal-content .heading {\n    color: #fff; }\n\n.modal-primary .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-secondary .modal-title {\n  color: #212529; }\n\n.modal-secondary .modal-header,\n.modal-secondary .modal-footer {\n  border-color: rgba(33, 37, 41, 0.075); }\n\n.modal-secondary .modal-content {\n  background-color: #f7fafc;\n  color: #212529; }\n  .modal-secondary .modal-content .heading {\n    color: #212529; }\n\n.modal-secondary .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-success .modal-title {\n  color: #fff; }\n\n.modal-success .modal-header,\n.modal-success .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-success .modal-content {\n  background-color: #2dce89;\n  color: #fff; }\n  .modal-success .modal-content .heading {\n    color: #fff; }\n\n.modal-success .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-info .modal-title {\n  color: #fff; }\n\n.modal-info .modal-header,\n.modal-info .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-info .modal-content {\n  background-color: #11cdef;\n  color: #fff; }\n  .modal-info .modal-content .heading {\n    color: #fff; }\n\n.modal-info .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-warning .modal-title {\n  color: #fff; }\n\n.modal-warning .modal-header,\n.modal-warning .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-warning .modal-content {\n  background-color: #fb6340;\n  color: #fff; }\n  .modal-warning .modal-content .heading {\n    color: #fff; }\n\n.modal-warning .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-danger .modal-title {\n  color: #fff; }\n\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-danger .modal-content {\n  background-color: #f5365c;\n  color: #fff; }\n  .modal-danger .modal-content .heading {\n    color: #fff; }\n\n.modal-danger .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-light .modal-title {\n  color: #fff; }\n\n.modal-light .modal-header,\n.modal-light .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-light .modal-content {\n  background-color: #adb5bd;\n  color: #fff; }\n  .modal-light .modal-content .heading {\n    color: #fff; }\n\n.modal-light .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-dark .modal-title {\n  color: #fff; }\n\n.modal-dark .modal-header,\n.modal-dark .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-dark .modal-content {\n  background-color: #212529;\n  color: #fff; }\n  .modal-dark .modal-content .heading {\n    color: #fff; }\n\n.modal-dark .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-default .modal-title {\n  color: #fff; }\n\n.modal-default .modal-header,\n.modal-default .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-default .modal-content {\n  background-color: #172b4d;\n  color: #fff; }\n  .modal-default .modal-content .heading {\n    color: #fff; }\n\n.modal-default .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-white .modal-title {\n  color: #212529; }\n\n.modal-white .modal-header,\n.modal-white .modal-footer {\n  border-color: rgba(33, 37, 41, 0.075); }\n\n.modal-white .modal-content {\n  background-color: #fff;\n  color: #212529; }\n  .modal-white .modal-content .heading {\n    color: #212529; }\n\n.modal-white .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-neutral .modal-title {\n  color: #212529; }\n\n.modal-neutral .modal-header,\n.modal-neutral .modal-footer {\n  border-color: rgba(33, 37, 41, 0.075); }\n\n.modal-neutral .modal-content {\n  background-color: #fff;\n  color: #212529; }\n  .modal-neutral .modal-content .heading {\n    color: #212529; }\n\n.modal-neutral .close > span:not(.sr-only) {\n  color: #fff; }\n\n.modal-darker .modal-title {\n  color: #fff; }\n\n.modal-darker .modal-header,\n.modal-darker .modal-footer {\n  border-color: rgba(255, 255, 255, 0.075); }\n\n.modal-darker .modal-content {\n  background-color: black;\n  color: #fff; }\n  .modal-darker .modal-content .heading {\n    color: #fff; }\n\n.modal-darker .close > span:not(.sr-only) {\n  color: #fff; }\n\n.nav-wrapper {\n  padding: 1rem 0;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem; }\n  .nav-wrapper + .card {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem; }\n\n.nav-link {\n  color: #fff; }\n  .nav-link:hover {\n    color: #ced4da; }\n  .nav-link i.ni {\n    position: relative;\n    top: 2px; }\n\n.nav-pills .nav-item:not(:last-child) {\n  padding-right: 1rem; }\n\n.nav-pills .nav-link {\n  padding: 0.75rem 1rem;\n  color: #5e72e4;\n  font-weight: 500;\n  font-size: 0.875rem;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n  background-color: #fff;\n  transition: all 0.15s ease; }\n  .nav-pills .nav-link:hover {\n    color: #485fe0; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #5e72e4; }\n\n@media (max-width: 575.98px) {\n  .nav-pills .nav-item {\n    margin-bottom: 1rem; } }\n\n@media (max-width: 767.98px) {\n  .nav-pills:not(.nav-pills-circle) .nav-item {\n    padding-right: 0; } }\n\n.nav-pills-circle .nav-link {\n  text-align: center;\n  height: 60px;\n  width: 60px;\n  padding: 0;\n  line-height: 60px;\n  border-radius: 50%; }\n\n.nav-pills-circle .nav-link-icon i, .nav-pills-circle .nav-link-icon svg {\n  font-size: 1rem; }\n\n.navbar-horizontal .navbar-nav .nav-link {\n  font-size: 0.9rem;\n  font-weight: 400;\n  text-transform: normal;\n  letter-spacing: 0;\n  transition: all 0.15s linear; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .navbar-horizontal .navbar-nav .nav-link {\n      transition: none; } }\n  .navbar-horizontal .navbar-nav .nav-link .nav-link-inner--text {\n    margin-left: .25rem; }\n\n.navbar-horizontal .navbar-brand {\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: .875rem;\n  letter-spacing: .05px; }\n  .navbar-horizontal .navbar-brand img {\n    height: 30px; }\n\n.navbar-horizontal .navbar-dark .navbar-brand {\n  color: #fff; }\n\n.navbar-horizontal .navbar-light .navbar-brand {\n  color: #32325d; }\n\n.navbar-horizontal .navbar-nav .nav-item .media:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n@media (min-width: 992px) {\n  .navbar-horizontal .navbar-nav .nav-item {\n    margin-right: .5rem; }\n    .navbar-horizontal .navbar-nav .nav-item [data-toggle=\"dropdown\"]::after {\n      transition: all 0.15s ease; }\n    .navbar-horizontal .navbar-nav .nav-item.show [data-toggle=\"dropdown\"]::after {\n      transform: rotate(180deg); }\n  .navbar-horizontal .navbar-nav .nav-link {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    border-radius: 0.375rem; }\n    .navbar-horizontal .navbar-nav .nav-link i {\n      margin-right: .625rem; }\n  .navbar-horizontal .navbar-nav .nav-link-icon {\n    padding-left: .5rem !important;\n    padding-right: .5rem !important;\n    font-size: 1rem;\n    border-radius: 0.375rem; }\n    .navbar-horizontal .navbar-nav .nav-link-icon i {\n      margin-right: 0; } }\n\n.navbar-horizontal .navbar-transparent {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  background-color: transparent;\n  border: 0;\n  box-shadow: none; }\n  .navbar-horizontal .navbar-transparent .navbar-brand {\n    color: white; }\n  .navbar-horizontal .navbar-transparent .navbar-toggler {\n    color: white; }\n  .navbar-horizontal .navbar-transparent .navbar-toggler-icon {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.95)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n@media (min-width: 768px) {\n  .navbar-horizontal .navbar-transparent .navbar-nav .nav-link {\n    color: rgba(255, 255, 255, 0.95); }\n    .navbar-horizontal .navbar-transparent .navbar-nav .nav-link:hover, .navbar-horizontal .navbar-transparent .navbar-nav .nav-link:focus {\n      color: rgba(255, 255, 255, 0.65); }\n    .navbar-horizontal .navbar-transparent .navbar-nav .nav-link.disabled {\n      color: rgba(255, 255, 255, 0.25); }\n  .navbar-horizontal .navbar-transparent .navbar-nav .show > .nav-link,\n  .navbar-horizontal .navbar-transparent .navbar-nav .active > .nav-link,\n  .navbar-horizontal .navbar-transparent .navbar-nav .nav-link.show,\n  .navbar-horizontal .navbar-transparent .navbar-nav .nav-link.active {\n    color: rgba(255, 255, 255, 0.65); }\n  .navbar-horizontal .navbar-transparent .navbar-brand {\n    color: rgba(255, 255, 255, 0.95); }\n    .navbar-horizontal .navbar-transparent .navbar-brand:hover, .navbar-horizontal .navbar-transparent .navbar-brand:focus {\n      color: rgba(255, 255, 255, 0.95); } }\n\n.navbar-vertical {\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;\n  background: linear-gradient(194deg, #161A40 0, #000 100%) !important; }\n  .navbar-vertical .navbar {\n    border-width: 0 0 1px 0;\n    border-style: solid; }\n  .navbar-vertical .navbar-light {\n    background-color: transparent;\n    border-color: #f6f9fc; }\n  .navbar-vertical .navbar-brand {\n    margin-right: 0; }\n  .navbar-vertical .navbar-brand-img,\n  .navbar-vertical .navbar-brand > img {\n    max-width: 100%;\n    max-height: 2rem; }\n  @media (min-width: 768px) {\n    .navbar-vertical .navbar-collapse {\n      margin-left: -1rem;\n      margin-right: -1rem;\n      padding-left: 1rem;\n      padding-right: 1rem; }\n      .navbar-vertical .navbar-collapse:before {\n        content: '';\n        display: block;\n        margin: 1rem -1rem; } }\n  .navbar-vertical .navbar-nav {\n    margin-left: -1rem;\n    margin-right: -1rem; }\n    .navbar-vertical .navbar-nav .nav-link {\n      padding-left: 1rem;\n      padding-right: 1rem;\n      font-size: 0.9rem; }\n      .navbar-vertical .navbar-nav .nav-link.active {\n        position: relative; }\n        .navbar-vertical .navbar-nav .nav-link.active:before {\n          content: '';\n          position: absolute;\n          left: 0;\n          top: 0.25rem;\n          bottom: 0.25rem;\n          border-left: 2px solid #5e72e4; }\n      .navbar-vertical .navbar-nav .nav-link > i {\n        min-width: 2.25rem;\n        font-size: .9375rem;\n        line-height: 1.5rem; }\n      .navbar-vertical .navbar-nav .nav-link .dropdown-menu {\n        border: none; }\n        .navbar-vertical .navbar-nav .nav-link .dropdown-menu .dropdown-menu {\n          margin-left: 0.75rem; }\n  .navbar-vertical .navbar-nav .nav-link {\n    display: flex;\n    align-items: center; }\n  .navbar-vertical .navbar-nav .nav-link[data-toggle=\"collapse\"]:after {\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Font Awesome 5 Free';\n    font-weight: 700;\n    content: \"\\f105\";\n    margin-left: auto;\n    color: #8898aa;\n    transition: all 0.15s ease; }\n  .navbar-vertical .navbar-nav .nav-link[data-toggle=\"collapse\"][aria-expanded=\"true\"]:after {\n    transform: rotate(90deg); }\n  .navbar-vertical .navbar-nav .nav .nav-link {\n    padding-left: 3.25rem; }\n  .navbar-vertical .navbar-nav .nav .nav .nav-link {\n    padding-left: 3.75rem; }\n  .navbar-vertical .navbar-heading {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: .04em; }\n  .navbar-vertical.navbar-expand-xs {\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    max-width: 250px;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    overflow-y: auto; }\n    .navbar-vertical.navbar-expand-xs > [class*=\"container\"] {\n      flex-direction: column;\n      align-items: stretch;\n      min-height: 100%;\n      padding-left: 0;\n      padding-right: 0; }\n      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n        .navbar-vertical.navbar-expand-xs > [class*=\"container\"] {\n          min-height: none;\n          height: 100%; } }\n    .navbar-vertical.navbar-expand-xs.fixed-left {\n      left: 0;\n      border-width: 0 1px 0 0; }\n    .navbar-vertical.navbar-expand-xs.fixed-right {\n      right: 0;\n      border-width: 0 0 0 1px; }\n    .navbar-vertical.navbar-expand-xs .navbar-collapse {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: stretch;\n      margin-left: -1.5rem;\n      margin-right: -1.5rem;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem; }\n      .navbar-vertical.navbar-expand-xs .navbar-collapse > * {\n        min-width: 100%; }\n    .navbar-vertical.navbar-expand-xs .navbar-nav {\n      flex-direction: column;\n      margin-left: -1.5rem;\n      margin-right: -1.5rem; }\n    .navbar-vertical.navbar-expand-xs .navbar-nav .nav-link {\n      padding: 0.65rem 1.5rem; }\n      .navbar-vertical.navbar-expand-xs .navbar-nav .nav-link.active:before {\n        top: 0.25rem;\n        bottom: 0.25rem;\n        left: 0;\n        right: auto;\n        border-left: 2px solid #5e72e4;\n        border-bottom: 0; }\n    .navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link {\n      padding-left: 3.75rem; }\n    .navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav .nav-link {\n      padding-left: 4.5rem; }\n    .navbar-vertical.navbar-expand-xs .navbar-brand {\n      display: block;\n      text-align: center;\n      padding-top: 1rem;\n      padding-bottom: 1rem; }\n    .navbar-vertical.navbar-expand-xs .navbar-brand-img {\n      max-height: 2.5rem; }\n    .navbar-vertical.navbar-expand-xs .navbar-user {\n      margin-left: -1.5rem;\n      margin-right: -1.5rem;\n      padding-top: 1rem;\n      padding-bottom: 0rem;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem;\n      border-top: 1px solid #e9ecef; }\n      .navbar-vertical.navbar-expand-xs .navbar-user .dropup .dropdown-menu {\n        left: 50%;\n        transform: translateX(-50%); }\n  @media (min-width: 576px) {\n    .navbar-vertical.navbar-expand-sm {\n      display: block;\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      max-width: 250px;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem;\n      overflow-y: auto; }\n      .navbar-vertical.navbar-expand-sm > [class*=\"container\"] {\n        flex-direction: column;\n        align-items: stretch;\n        min-height: 100%;\n        padding-left: 0;\n        padding-right: 0; } }\n    @media all and (min-width: 576px) and (-ms-high-contrast: none), (min-width: 576px) and (-ms-high-contrast: active) {\n      .navbar-vertical.navbar-expand-sm > [class*=\"container\"] {\n        min-height: none;\n        height: 100%; } }\n  @media (min-width: 576px) {\n      .navbar-vertical.navbar-expand-sm.fixed-left {\n        left: 0;\n        border-width: 0 1px 0 0; }\n      .navbar-vertical.navbar-expand-sm.fixed-right {\n        right: 0;\n        border-width: 0 0 0 1px; }\n      .navbar-vertical.navbar-expand-sm .navbar-collapse {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n        margin-left: -1.5rem;\n        margin-right: -1.5rem;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem; }\n        .navbar-vertical.navbar-expand-sm .navbar-collapse > * {\n          min-width: 100%; }\n      .navbar-vertical.navbar-expand-sm .navbar-nav {\n        flex-direction: column;\n        margin-left: -1.5rem;\n        margin-right: -1.5rem; }\n      .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link {\n        padding: 0.65rem 1.5rem; }\n        .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link.active:before {\n          top: 0.25rem;\n          bottom: 0.25rem;\n          left: 0;\n          right: auto;\n          border-left: 2px solid #5e72e4;\n          border-bottom: 0; }\n      .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav-link {\n        padding-left: 3.75rem; }\n      .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav .nav-link {\n        padding-left: 4.5rem; }\n      .navbar-vertical.navbar-expand-sm .navbar-brand {\n        display: block;\n        text-align: center;\n        padding-top: 1rem;\n        padding-bottom: 1rem; }\n      .navbar-vertical.navbar-expand-sm .navbar-brand-img {\n        max-height: 2.5rem; }\n      .navbar-vertical.navbar-expand-sm .navbar-user {\n        margin-left: -1.5rem;\n        margin-right: -1.5rem;\n        padding-top: 1rem;\n        padding-bottom: 0rem;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n        border-top: 1px solid #e9ecef; }\n        .navbar-vertical.navbar-expand-sm .navbar-user .dropup .dropdown-menu {\n          left: 50%;\n          transform: translateX(-50%); } }\n  @media (min-width: 768px) {\n    .navbar-vertical.navbar-expand-md {\n      display: block;\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      max-width: 250px;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem;\n      overflow-y: auto; }\n      .navbar-vertical.navbar-expand-md > [class*=\"container\"] {\n        flex-direction: column;\n        align-items: stretch;\n        min-height: 100%;\n        padding-left: 0;\n        padding-right: 0; } }\n    @media all and (min-width: 768px) and (-ms-high-contrast: none), (min-width: 768px) and (-ms-high-contrast: active) {\n      .navbar-vertical.navbar-expand-md > [class*=\"container\"] {\n        min-height: none;\n        height: 100%; } }\n  @media (min-width: 768px) {\n      .navbar-vertical.navbar-expand-md.fixed-left {\n        left: 0;\n        border-width: 0 1px 0 0; }\n      .navbar-vertical.navbar-expand-md.fixed-right {\n        right: 0;\n        border-width: 0 0 0 1px; }\n      .navbar-vertical.navbar-expand-md .navbar-collapse {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n        margin-left: -1.5rem;\n        margin-right: -1.5rem;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem; }\n        .navbar-vertical.navbar-expand-md .navbar-collapse > * {\n          min-width: 100%; }\n      .navbar-vertical.navbar-expand-md .navbar-nav {\n        flex-direction: column;\n        margin-left: -1.5rem;\n        margin-right: -1.5rem; }\n      .navbar-vertical.navbar-expand-md .navbar-nav .nav-link {\n        padding: 0.65rem 1.5rem; }\n        .navbar-vertical.navbar-expand-md .navbar-nav .nav-link.active:before {\n          top: 0.25rem;\n          bottom: 0.25rem;\n          left: 0;\n          right: auto;\n          border-left: 2px solid #5e72e4;\n          border-bottom: 0; }\n      .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav-link {\n        padding-left: 3.75rem; }\n      .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav .nav-link {\n        padding-left: 4.5rem; }\n      .navbar-vertical.navbar-expand-md .navbar-brand {\n        display: block;\n        text-align: center;\n        padding-top: 1rem;\n        padding-bottom: 1rem; }\n      .navbar-vertical.navbar-expand-md .navbar-brand-img {\n        max-height: 2.5rem; }\n      .navbar-vertical.navbar-expand-md .navbar-user {\n        margin-left: -1.5rem;\n        margin-right: -1.5rem;\n        padding-top: 1rem;\n        padding-bottom: 0rem;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n        border-top: 1px solid #e9ecef; }\n        .navbar-vertical.navbar-expand-md .navbar-user .dropup .dropdown-menu {\n          left: 50%;\n          transform: translateX(-50%); } }\n  @media (min-width: 992px) {\n    .navbar-vertical.navbar-expand-lg {\n      display: block;\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      max-width: 250px;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem;\n      overflow-y: auto; }\n      .navbar-vertical.navbar-expand-lg > [class*=\"container\"] {\n        flex-direction: column;\n        align-items: stretch;\n        min-height: 100%;\n        padding-left: 0;\n        padding-right: 0; } }\n    @media all and (min-width: 992px) and (-ms-high-contrast: none), (min-width: 992px) and (-ms-high-contrast: active) {\n      .navbar-vertical.navbar-expand-lg > [class*=\"container\"] {\n        min-height: none;\n        height: 100%; } }\n  @media (min-width: 992px) {\n      .navbar-vertical.navbar-expand-lg.fixed-left {\n        left: 0;\n        border-width: 0 1px 0 0; }\n      .navbar-vertical.navbar-expand-lg.fixed-right {\n        right: 0;\n        border-width: 0 0 0 1px; }\n      .navbar-vertical.navbar-expand-lg .navbar-collapse {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n        margin-left: -1.5rem;\n        margin-right: -1.5rem;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem; }\n        .navbar-vertical.navbar-expand-lg .navbar-collapse > * {\n          min-width: 100%; }\n      .navbar-vertical.navbar-expand-lg .navbar-nav {\n        flex-direction: column;\n        margin-left: -1.5rem;\n        margin-right: -1.5rem; }\n      .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link {\n        padding: 0.65rem 1.5rem; }\n        .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link.active:before {\n          top: 0.25rem;\n          bottom: 0.25rem;\n          left: 0;\n          right: auto;\n          border-left: 2px solid #5e72e4;\n          border-bottom: 0; }\n      .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav-link {\n        padding-left: 3.75rem; }\n      .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav .nav-link {\n        padding-left: 4.5rem; }\n      .navbar-vertical.navbar-expand-lg .navbar-brand {\n        display: block;\n        text-align: center;\n        padding-top: 1rem;\n        padding-bottom: 1rem; }\n      .navbar-vertical.navbar-expand-lg .navbar-brand-img {\n        max-height: 2.5rem; }\n      .navbar-vertical.navbar-expand-lg .navbar-user {\n        margin-left: -1.5rem;\n        margin-right: -1.5rem;\n        padding-top: 1rem;\n        padding-bottom: 0rem;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n        border-top: 1px solid #e9ecef; }\n        .navbar-vertical.navbar-expand-lg .navbar-user .dropup .dropdown-menu {\n          left: 50%;\n          transform: translateX(-50%); } }\n  @media (min-width: 1200px) {\n    .navbar-vertical.navbar-expand-xl {\n      display: block;\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      max-width: 250px;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem;\n      overflow-y: auto; }\n      .navbar-vertical.navbar-expand-xl > [class*=\"container\"] {\n        flex-direction: column;\n        align-items: stretch;\n        min-height: 100%;\n        padding-left: 0;\n        padding-right: 0; } }\n    @media all and (min-width: 1200px) and (-ms-high-contrast: none), (min-width: 1200px) and (-ms-high-contrast: active) {\n      .navbar-vertical.navbar-expand-xl > [class*=\"container\"] {\n        min-height: none;\n        height: 100%; } }\n  @media (min-width: 1200px) {\n      .navbar-vertical.navbar-expand-xl.fixed-left {\n        left: 0;\n        border-width: 0 1px 0 0; }\n      .navbar-vertical.navbar-expand-xl.fixed-right {\n        right: 0;\n        border-width: 0 0 0 1px; }\n      .navbar-vertical.navbar-expand-xl .navbar-collapse {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n        margin-left: -1.5rem;\n        margin-right: -1.5rem;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem; }\n        .navbar-vertical.navbar-expand-xl .navbar-collapse > * {\n          min-width: 100%; }\n      .navbar-vertical.navbar-expand-xl .navbar-nav {\n        flex-direction: column;\n        margin-left: -1.5rem;\n        margin-right: -1.5rem; }\n      .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link {\n        padding: 0.65rem 1.5rem; }\n        .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link.active:before {\n          top: 0.25rem;\n          bottom: 0.25rem;\n          left: 0;\n          right: auto;\n          border-left: 2px solid #5e72e4;\n          border-bottom: 0; }\n      .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav-link {\n        padding-left: 3.75rem; }\n      .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav .nav-link {\n        padding-left: 4.5rem; }\n      .navbar-vertical.navbar-expand-xl .navbar-brand {\n        display: block;\n        text-align: center;\n        padding-top: 1rem;\n        padding-bottom: 1rem; }\n      .navbar-vertical.navbar-expand-xl .navbar-brand-img {\n        max-height: 2.5rem; }\n      .navbar-vertical.navbar-expand-xl .navbar-user {\n        margin-left: -1.5rem;\n        margin-right: -1.5rem;\n        padding-top: 1rem;\n        padding-bottom: 0rem;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n        border-top: 1px solid #e9ecef; }\n        .navbar-vertical.navbar-expand-xl .navbar-user .dropup .dropdown-menu {\n          left: 50%;\n          transform: translateX(-50%); } }\n\n.navbar-search .input-group {\n  border-radius: 2rem;\n  border: 2px solid;\n  background-color: transparent; }\n  .navbar-search .input-group .input-group-text {\n    background-color: transparent;\n    padding-left: 1rem; }\n\n.navbar-search .form-control {\n  width: 270px;\n  background-color: transparent; }\n\n.navbar-search-dark .input-group {\n  border-color: rgba(255, 255, 255, 0.6); }\n\n.navbar-search-dark .input-group-text {\n  color: rgba(255, 255, 255, 0.6); }\n\n.navbar-search-dark .form-control {\n  color: rgba(255, 255, 255, 0.9); }\n  .navbar-search-dark .form-control::placeholder {\n    color: rgba(255, 255, 255, 0.6); }\n\n.navbar-search-dark .focused .input-group {\n  border-color: rgba(255, 255, 255, 0.9); }\n\n.navbar-search-light .input-group {\n  border-color: rgba(0, 0, 0, 0.6); }\n\n.navbar-search-light .input-group-text {\n  color: rgba(0, 0, 0, 0.6); }\n\n.navbar-search-light .form-control {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-search-light .form-control::placeholder {\n    color: rgba(0, 0, 0, 0.6); }\n\n.navbar-search-light .focused .input-group {\n  border-color: rgba(0, 0, 0, 0.9); }\n\n@media (min-width: 768px) {\n  .navbar .dropdown-menu {\n    opacity: 0;\n    pointer-events: none;\n    margin: 0; }\n  .navbar .dropdown-menu-arrow:before {\n    background: #fff;\n    box-shadow: none;\n    content: '';\n    display: block;\n    height: 12px;\n    width: 12px;\n    left: 20px;\n    position: absolute;\n    bottom: 100%;\n    transform: rotate(-45deg) translateY(12px);\n    z-index: -5;\n    border-radius: 2px; }\n  .navbar .dropdown-menu-right:before {\n    right: 20px;\n    left: auto; }\n  .navbar:not(.navbar-nav-hover) .dropdown-menu.show {\n    opacity: 1;\n    pointer-events: auto;\n    animation: show-navbar-dropdown .25s ease forwards; }\n  .navbar:not(.navbar-nav-hover) .dropdown-menu.close {\n    display: block;\n    animation: hide-navbar-dropdown .15s ease backwards; }\n  .navbar.navbar-nav-hover .dropdown-menu {\n    opacity: 0;\n    display: block;\n    pointer-events: none;\n    transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\n    transition: visibility 0.25s, opacity 0.25s, transform 0.25s; }\n  .navbar.navbar-nav-hover .nav-item.dropdown:hover > .dropdown-menu {\n    display: block;\n    opacity: 1;\n    pointer-events: auto;\n    visibility: visible;\n    transform: translate(0, 0);\n    animation: none; }\n  .navbar .dropdown-menu-inner {\n    position: relative;\n    padding: 1rem; }\n  @keyframes show-navbar-dropdown {\n    0% {\n      opacity: 0;\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\n      transition: visibility 0.25s, opacity 0.25s, transform 0.25s; }\n    100% {\n      transform: translate(0, 0);\n      opacity: 1; } }\n  @keyframes hide-navbar-dropdown {\n    from {\n      opacity: 1; }\n    to {\n      opacity: 0;\n      transform: translate(0, 10px); } } }\n\n.navbar-collapse-header {\n  display: none; }\n\n@media (max-width: 767.98px) {\n  .navbar-nav .nav-link {\n    padding: .625rem 0;\n    color: #172b4d !important; }\n  .navbar-nav .dropdown-menu {\n    box-shadow: none;\n    min-width: auto; }\n    .navbar-nav .dropdown-menu .media svg {\n      width: 30px; }\n  .navbar-collapse {\n    width: calc(100% - 1.4rem);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1050;\n    margin: .7rem;\n    overflow-y: auto;\n    height: auto !important;\n    opacity: 0; }\n    .navbar-collapse .navbar-toggler {\n      width: 20px;\n      height: 20px;\n      position: relative;\n      cursor: pointer;\n      display: inline-block;\n      padding: 0; }\n      .navbar-collapse .navbar-toggler span {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        border-radius: 2px;\n        opacity: 1;\n        background: #283448; }\n      .navbar-collapse .navbar-toggler :nth-child(1) {\n        transform: rotate(135deg); }\n      .navbar-collapse .navbar-toggler :nth-child(2) {\n        transform: rotate(-135deg); }\n    .navbar-collapse .navbar-collapse-header {\n      display: block;\n      padding-bottom: 1rem;\n      margin-bottom: 1rem;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n    .navbar-collapse .collapse-brand img {\n      height: 36px; }\n    .navbar-collapse .collapse-close {\n      text-align: right; }\n  .navbar-collapse.collapsing,\n  .navbar-collapse.show {\n    padding: 1.5rem;\n    border-radius: 0.375rem;\n    background: #161A40;\n    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n    animation: show-navbar-collapse .2s ease forwards; }\n  .navbar-collapse.collapsing-out {\n    animation: hide-navbar-collapse .2s ease forwards; } }\n\n@keyframes show-navbar-collapse {\n  0% {\n    opacity: 0;\n    transform: scale(0.95);\n    transform-origin: 100% 0; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@keyframes hide-navbar-collapse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n    transform-origin: 100% 0; }\n  to {\n    opacity: 0;\n    transform: scale(0.95); } }\n\n.page-item.active .page-link {\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08); }\n\n.page-item .page-link,\n.page-item span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0 3px;\n  border-radius: 50% !important;\n  width: 36px;\n  height: 36px;\n  font-size: 0.875rem; }\n\n.pagination-lg .page-item .page-link,\n.pagination-lg .page-item span {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.pagination-sm .page-item .page-link,\n.pagination-sm .page-item span {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.popover {\n  border: 0; }\n\n.popover-header {\n  font-weight: 600; }\n\n.popover-primary {\n  background-color: #5e72e4; }\n  .popover-primary .popover-header {\n    background-color: #5e72e4;\n    color: #fff; }\n  .popover-primary .popover-body {\n    color: #fff; }\n  .popover-primary .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-primary.bs-popover-top .arrow::after, .popover-primary.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #5e72e4; }\n  .popover-primary.bs-popover-right .arrow::after, .popover-primary.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #5e72e4; }\n  .popover-primary.bs-popover-bottom .arrow::after, .popover-primary.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #5e72e4; }\n  .popover-primary.bs-popover-left .arrow::after, .popover-primary.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #5e72e4; }\n\n.popover-secondary {\n  background-color: #f7fafc; }\n  .popover-secondary .popover-header {\n    background-color: #f7fafc;\n    color: #212529; }\n  .popover-secondary .popover-body {\n    color: #212529; }\n  .popover-secondary .popover-header {\n    border-color: rgba(33, 37, 41, 0.2); }\n  .popover-secondary.bs-popover-top .arrow::after, .popover-secondary.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #f7fafc; }\n  .popover-secondary.bs-popover-right .arrow::after, .popover-secondary.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #f7fafc; }\n  .popover-secondary.bs-popover-bottom .arrow::after, .popover-secondary.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #f7fafc; }\n  .popover-secondary.bs-popover-left .arrow::after, .popover-secondary.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #f7fafc; }\n\n.popover-success {\n  background-color: #2dce89; }\n  .popover-success .popover-header {\n    background-color: #2dce89;\n    color: #fff; }\n  .popover-success .popover-body {\n    color: #fff; }\n  .popover-success .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-success.bs-popover-top .arrow::after, .popover-success.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #2dce89; }\n  .popover-success.bs-popover-right .arrow::after, .popover-success.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #2dce89; }\n  .popover-success.bs-popover-bottom .arrow::after, .popover-success.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #2dce89; }\n  .popover-success.bs-popover-left .arrow::after, .popover-success.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #2dce89; }\n\n.popover-info {\n  background-color: #11cdef; }\n  .popover-info .popover-header {\n    background-color: #11cdef;\n    color: #fff; }\n  .popover-info .popover-body {\n    color: #fff; }\n  .popover-info .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-info.bs-popover-top .arrow::after, .popover-info.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #11cdef; }\n  .popover-info.bs-popover-right .arrow::after, .popover-info.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #11cdef; }\n  .popover-info.bs-popover-bottom .arrow::after, .popover-info.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #11cdef; }\n  .popover-info.bs-popover-left .arrow::after, .popover-info.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #11cdef; }\n\n.popover-warning {\n  background-color: #fb6340; }\n  .popover-warning .popover-header {\n    background-color: #fb6340;\n    color: #fff; }\n  .popover-warning .popover-body {\n    color: #fff; }\n  .popover-warning .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-warning.bs-popover-top .arrow::after, .popover-warning.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #fb6340; }\n  .popover-warning.bs-popover-right .arrow::after, .popover-warning.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #fb6340; }\n  .popover-warning.bs-popover-bottom .arrow::after, .popover-warning.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #fb6340; }\n  .popover-warning.bs-popover-left .arrow::after, .popover-warning.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #fb6340; }\n\n.popover-danger {\n  background-color: #f5365c; }\n  .popover-danger .popover-header {\n    background-color: #f5365c;\n    color: #fff; }\n  .popover-danger .popover-body {\n    color: #fff; }\n  .popover-danger .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-danger.bs-popover-top .arrow::after, .popover-danger.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #f5365c; }\n  .popover-danger.bs-popover-right .arrow::after, .popover-danger.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #f5365c; }\n  .popover-danger.bs-popover-bottom .arrow::after, .popover-danger.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #f5365c; }\n  .popover-danger.bs-popover-left .arrow::after, .popover-danger.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #f5365c; }\n\n.popover-light {\n  background-color: #adb5bd; }\n  .popover-light .popover-header {\n    background-color: #adb5bd;\n    color: #fff; }\n  .popover-light .popover-body {\n    color: #fff; }\n  .popover-light .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-light.bs-popover-top .arrow::after, .popover-light.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #adb5bd; }\n  .popover-light.bs-popover-right .arrow::after, .popover-light.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #adb5bd; }\n  .popover-light.bs-popover-bottom .arrow::after, .popover-light.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #adb5bd; }\n  .popover-light.bs-popover-left .arrow::after, .popover-light.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #adb5bd; }\n\n.popover-dark {\n  background-color: #212529; }\n  .popover-dark .popover-header {\n    background-color: #212529;\n    color: #fff; }\n  .popover-dark .popover-body {\n    color: #fff; }\n  .popover-dark .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-dark.bs-popover-top .arrow::after, .popover-dark.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #212529; }\n  .popover-dark.bs-popover-right .arrow::after, .popover-dark.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #212529; }\n  .popover-dark.bs-popover-bottom .arrow::after, .popover-dark.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #212529; }\n  .popover-dark.bs-popover-left .arrow::after, .popover-dark.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #212529; }\n\n.popover-default {\n  background-color: #172b4d; }\n  .popover-default .popover-header {\n    background-color: #172b4d;\n    color: #fff; }\n  .popover-default .popover-body {\n    color: #fff; }\n  .popover-default .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-default.bs-popover-top .arrow::after, .popover-default.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #172b4d; }\n  .popover-default.bs-popover-right .arrow::after, .popover-default.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #172b4d; }\n  .popover-default.bs-popover-bottom .arrow::after, .popover-default.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #172b4d; }\n  .popover-default.bs-popover-left .arrow::after, .popover-default.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #172b4d; }\n\n.popover-white {\n  background-color: #fff; }\n  .popover-white .popover-header {\n    background-color: #fff;\n    color: #212529; }\n  .popover-white .popover-body {\n    color: #212529; }\n  .popover-white .popover-header {\n    border-color: rgba(33, 37, 41, 0.2); }\n  .popover-white.bs-popover-top .arrow::after, .popover-white.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #fff; }\n  .popover-white.bs-popover-right .arrow::after, .popover-white.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #fff; }\n  .popover-white.bs-popover-bottom .arrow::after, .popover-white.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #fff; }\n  .popover-white.bs-popover-left .arrow::after, .popover-white.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #fff; }\n\n.popover-neutral {\n  background-color: #fff; }\n  .popover-neutral .popover-header {\n    background-color: #fff;\n    color: #212529; }\n  .popover-neutral .popover-body {\n    color: #212529; }\n  .popover-neutral .popover-header {\n    border-color: rgba(33, 37, 41, 0.2); }\n  .popover-neutral.bs-popover-top .arrow::after, .popover-neutral.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: #fff; }\n  .popover-neutral.bs-popover-right .arrow::after, .popover-neutral.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: #fff; }\n  .popover-neutral.bs-popover-bottom .arrow::after, .popover-neutral.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: #fff; }\n  .popover-neutral.bs-popover-left .arrow::after, .popover-neutral.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: #fff; }\n\n.popover-darker {\n  background-color: black; }\n  .popover-darker .popover-header {\n    background-color: black;\n    color: #fff; }\n  .popover-darker .popover-body {\n    color: #fff; }\n  .popover-darker .popover-header {\n    border-color: rgba(255, 255, 255, 0.2); }\n  .popover-darker.bs-popover-top .arrow::after, .popover-darker.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-top-color: black; }\n  .popover-darker.bs-popover-right .arrow::after, .popover-darker.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-right-color: black; }\n  .popover-darker.bs-popover-bottom .arrow::after, .popover-darker.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-bottom-color: black; }\n  .popover-darker.bs-popover-left .arrow::after, .popover-darker.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-left-color: black; }\n\n.progress-wrapper {\n  position: relative;\n  padding-top: 1.5rem; }\n\n.progress {\n  height: 8px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n  border-radius: 0.25rem;\n  background-color: #e9ecef;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n  .progress .sr-only {\n    width: auto;\n    height: 20px;\n    margin: 0 0 0 30px;\n    left: 0;\n    clip: auto;\n    line-height: 20px;\n    font-size: 13px; }\n\n.progress-heading {\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0 0 2px;\n  padding: 0; }\n\n.progress-bar {\n  box-shadow: none;\n  border-radius: 0;\n  height: auto; }\n\n.progress-info {\n  margin-bottom: .5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.progress-label span {\n  display: inline-block;\n  color: #5e72e4;\n  font-size: .625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  background: rgba(94, 114, 228, 0.1);\n  padding: .25rem 1rem;\n  border-radius: 30px; }\n\n.progress-percentage {\n  text-align: right; }\n  .progress-percentage span {\n    display: inline-block;\n    color: #8898aa;\n    font-size: .875rem;\n    font-weight: 600; }\n\n.separator {\n  position: absolute;\n  top: auto;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 150px;\n  transform: translateZ(0);\n  overflow: hidden;\n  pointer-events: none; }\n  .separator svg {\n    position: absolute;\n    pointer-events: none; }\n\n.separator-top {\n  top: 0;\n  bottom: auto; }\n  .separator-top svg {\n    top: 0; }\n\n.separator-bottom {\n  top: auto;\n  bottom: 0; }\n  .separator-bottom svg {\n    bottom: 0; }\n\n.separator-inverse {\n  transform: rotate(180deg); }\n\n.separator-skew {\n  height: 60px; }\n  @media (min-width: 1200px) {\n    .separator-skew {\n      height: 70px; } }\n\n.table thead th {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-bottom: 1px solid #e9ecef; }\n\n.table th {\n  font-weight: 600; }\n\n.table td .progress {\n  height: 3px;\n  width: 120px;\n  margin: 0; }\n\n.table td,\n.table th {\n  font-size: 0.8125rem;\n  white-space: nowrap; }\n\n.table.align-items-center td,\n.table.align-items-center th {\n  vertical-align: middle; }\n\n.table .thead-dark th {\n  background-color: #1c345d;\n  color: #4d7bca; }\n\n.table .thead-light th {\n  background-color: #f6f9fc;\n  color: #8898aa; }\n\n.table-hover tr {\n  transition: all 0.15s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .table-hover tr {\n      transition: none; } }\n\n.table-flush td,\n.table-flush th {\n  border-left: 0;\n  border-right: 0; }\n\n.table-flush tbody tr:first-child td,\n.table-flush tbody tr:first-child th {\n  border-top: 0; }\n\n.table-flush tbody tr:last-child td,\n.table-flush tbody tr:last-child th {\n  border-bottom: 0; }\n\n.card .table {\n  margin-bottom: 0; }\n  .card .table td,\n  .card .table th {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; }\n\np {\n  font-size: 1rem;\n  font-weight: 300;\n  line-height: 1.7; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1.7;\n  margin-top: 1.5rem; }\n  .lead + .btn-wrapper {\n    margin-top: 3rem; }\n\n.description {\n  font-size: 0.875rem; }\n\n.heading {\n  letter-spacing: 0.025em;\n  font-size: 0.95rem;\n  text-transform: uppercase;\n  font-weight: 600; }\n\n.heading-small {\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  font-size: .75rem;\n  text-transform: uppercase;\n  letter-spacing: .04em; }\n\n.heading-title {\n  letter-spacing: 0.025em;\n  font-size: 1.375rem;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.heading-section {\n  letter-spacing: 0.025em;\n  font-size: 1.375rem;\n  font-weight: 600;\n  text-transform: uppercase; }\n  .heading-section img {\n    display: block;\n    width: 72px;\n    height: 72px;\n    margin-bottom: 1.5rem; }\n  .heading-section.text-center img {\n    margin-left: auto;\n    margin-right: auto; }\n\n.display-1 span,\n.display-2 span,\n.display-3 span,\n.display-4 span {\n  display: block;\n  font-weight: 300; }\n\narticle h4:not(:first-child),\narticle h5:not(:first-child) {\n  margin-top: 3rem; }\n\narticle h4, article h5 {\n  margin-bottom: 1.5rem; }\n\narticle figure {\n  margin: 3rem 0; }\n\narticle h5 + figure {\n  margin-top: 0; }\n\n.datepicker {\n  border-radius: 0.375rem;\n  direction: ltr; }\n  .datepicker-inline {\n    width: 220px; }\n  .datepicker-rtl {\n    direction: rtl; }\n    .datepicker-rtl.dropdown-menu {\n      left: auto; }\n    .datepicker-rtl table tr td span {\n      float: right; }\n  .datepicker-dropdown {\n    top: 0;\n    left: 0;\n    padding: 20px 22px;\n    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1); }\n    .datepicker-dropdown.datepicker-orient-left:before {\n      left: 6px; }\n    .datepicker-dropdown.datepicker-orient-left:after {\n      left: 7px; }\n    .datepicker-dropdown.datepicker-orient-right:before {\n      right: 6px; }\n    .datepicker-dropdown.datepicker-orient-right:after {\n      right: 7px; }\n    .datepicker-dropdown.datepicker-orient-bottom:before {\n      top: -7px; }\n    .datepicker-dropdown.datepicker-orient-bottom:after {\n      top: -6px; }\n    .datepicker-dropdown.datepicker-orient-top:before {\n      bottom: -7px;\n      border-bottom: 0;\n      border-top: 7px solid white; }\n    .datepicker-dropdown.datepicker-orient-top:after {\n      bottom: -6px;\n      border-bottom: 0;\n      border-top: 6px solid #fff; }\n  .datepicker table {\n    margin: 0;\n    -webkit-touch-callout: none;\n    user-select: none; }\n    .datepicker table tr td {\n      border-radius: 50%; }\n    .datepicker table tr th {\n      border-radius: 0.375rem;\n      font-weight: 500; }\n    .datepicker table tr td,\n    .datepicker table tr th {\n      transition: all 0.15s ease;\n      width: 36px;\n      height: 36px;\n      border: none;\n      text-align: center;\n      font-size: 0.875rem; }\n  .table-striped .datepicker table tr td,\n  .table-striped .datepicker table tr th {\n    background-color: transparent; }\n  .datepicker table tr td.old, .datepicker table tr td.new {\n    color: #adb5bd; }\n  .datepicker table tr td.day:hover, .datepicker table tr td.focused {\n    background: white;\n    cursor: pointer; }\n  .datepicker table tr td.disabled, .datepicker table tr td.disabled:hover {\n    background: none;\n    color: #dee2e6;\n    cursor: default; }\n  .datepicker table tr td.highlighted {\n    border-radius: 0; }\n    .datepicker table tr td.highlighted.focused {\n      background: #5e72e4; }\n    .datepicker table tr td.highlighted.disabled, .datepicker table tr td.highlighted.disabled:active {\n      background: #5e72e4;\n      color: #ced4da; }\n  .datepicker table tr td.today {\n    background: white; }\n    .datepicker table tr td.today.focused {\n      background: white; }\n    .datepicker table tr td.today.disabled, .datepicker table tr td.today.disabled:active {\n      background: white;\n      color: #8898aa; }\n  .datepicker table tr td.range {\n    background: #5e72e4;\n    color: #fff;\n    border-radius: 0; }\n    .datepicker table tr td.range.focused {\n      background: #3b53de; }\n    .datepicker table tr td.range.disabled, .datepicker table tr td.range.disabled:active, .datepicker table tr td.range.day.disabled:hover {\n      background: #324cdd;\n      color: #8a98eb; }\n  .datepicker table tr td.range.highlighted.focused {\n    background: #cbd3da; }\n  .datepicker table tr td.range.highlighted.disabled, .datepicker table tr td.range.highlighted.disabled:active {\n    background: #e9ecef;\n    color: #dee2e6; }\n  .datepicker table tr td.range.today.disabled, .datepicker table tr td.range.today.disabled:active {\n    background: #5e72e4;\n    color: #fff; }\n  .datepicker table tr td.day.range-start {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .datepicker table tr td.day.range-end {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .datepicker table tr td.day.range-start.range-end {\n    border-radius: 50%; }\n  .datepicker table tr td.selected, .datepicker table tr td.selected.highlighted, .datepicker table tr td.selected:hover, .datepicker table tr td.selected.highlighted:hover, .datepicker table tr td.day.range:hover {\n    background: #5e72e4;\n    color: #fff; }\n  .datepicker table tr td.active, .datepicker table tr td.active.highlighted, .datepicker table tr td.active:hover, .datepicker table tr td.active.highlighted:hover {\n    background: #5e72e4;\n    color: #fff;\n    box-shadow: none; }\n  .datepicker table tr td span {\n    display: block;\n    width: 23%;\n    height: 54px;\n    line-height: 54px;\n    float: left;\n    margin: 1%;\n    cursor: pointer;\n    border-radius: 4px; }\n    .datepicker table tr td span:hover, .datepicker table tr td span.focused {\n      background: #e9ecef; }\n    .datepicker table tr td span.disabled, .datepicker table tr td span.disabled:hover {\n      background: none;\n      color: #dee2e6;\n      cursor: default; }\n    .datepicker table tr td span.active, .datepicker table tr td span.active:hover, .datepicker table tr td span.active.disabled, .datepicker table tr td span.active.disabled:hover {\n      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); }\n    .datepicker table tr td span.old, .datepicker table tr td span.new {\n      color: #8898aa; }\n  .datepicker .datepicker-switch {\n    width: 145px; }\n  .datepicker .datepicker-switch,\n  .datepicker .prev,\n  .datepicker .next,\n  .datepicker tfoot tr th {\n    cursor: pointer; }\n    .datepicker .datepicker-switch:hover,\n    .datepicker .prev:hover,\n    .datepicker .next:hover,\n    .datepicker tfoot tr th:hover {\n      background: #e9ecef; }\n  .datepicker .prev.disabled,\n  .datepicker .next.disabled {\n    visibility: hidden; }\n  .datepicker .cw {\n    font-size: 10px;\n    width: 12px;\n    padding: 0 2px 0 5px;\n    vertical-align: middle; }\n\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  touch-action: none;\n  user-select: none;\n  box-sizing: border-box; }\n\n.noUi-target {\n  position: relative;\n  direction: ltr; }\n\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1; }\n\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0; }\n\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transform-origin: 0 0; }\n\nhtml:not([dir=\"rtl\"]) .noUi-horizontal .noUi-origin {\n  left: auto;\n  right: 0; }\n\n.noUi-vertical .noUi-origin {\n  width: 0; }\n\n.noUi-horizontal .noUi-origin {\n  height: 0; }\n\n.noUi-handle {\n  position: absolute; }\n\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  transition: transform .3s; }\n\n.noUi-state-drag * {\n  cursor: inherit !important; }\n\n.noUi-horizontal {\n  height: 5px; }\n\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  left: -17px;\n  top: -6px; }\n\n.noUi-vertical {\n  width: 5px; }\n\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  left: -6px;\n  top: -17px; }\n\nhtml:not([dir=\"rtl\"]) .noUi-horizontal .noUi-handle {\n  right: -17px;\n  left: auto; }\n\n.noUi-connects {\n  border-radius: 3px; }\n\n.noUi-connect {\n  background: #5e72e4; }\n\n.noUi-draggable {\n  cursor: ew-resize; }\n\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize; }\n\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n  outline: none; }\n\n.noUi-active {\n  outline: none; }\n\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8; }\n\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed; }\n\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.noUi-pips {\n  position: absolute;\n  color: #999; }\n\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center; }\n\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px; }\n\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC; }\n\n.noUi-marker-sub {\n  background: #AAA; }\n\n.noUi-marker-large {\n  background: #AAA; }\n\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%; }\n\n.noUi-value-horizontal {\n  transform: translate(-50%, 50%); }\n\n.noUi-rtl .noUi-value-horizontal {\n  transform: translate(50%, 50%); }\n\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px; }\n\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px; }\n\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px; }\n\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%; }\n\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%, 0);\n  padding-left: 25px; }\n\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%); }\n\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px; }\n\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px; }\n\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px; }\n\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap; }\n\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%; }\n\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%; }\n\n.noUi-target {\n  background: #eceeef;\n  border-radius: 5px;\n  border: 0;\n  box-shadow: inset 0 1px 2px rgba(90, 97, 105, 0.1);\n  margin: 15px 0;\n  cursor: pointer; }\n\n.noUi-horizontal {\n  height: 5px; }\n\nhtml:not([dir=\"rtl\"]) .noUi-horizontal .noUi-handle {\n  right: -10px; }\n\n.noUi-vertical {\n  width: 5px; }\n\n.noUi-connect {\n  background: #5e72e4;\n  box-shadow: none; }\n\n.noUi-horizontal .noUi-handle,\n.noUi-vertical .noUi-handle {\n  top: -5px;\n  width: 15px;\n  height: 15px;\n  border-radius: 100%;\n  box-shadow: none;\n  cursor: pointer;\n  background-color: #5e72e4;\n  border: 0;\n  transition: box-shadow .15s, transform .15s; }\n\n.noUi-horizontal .noUi-handle.noUi-active,\n.noUi-vertical .noUi-handle.noUi-active {\n  box-shadow: 0px 0px 0px 2px #5e72e4; }\n\n.input-slider--cyan .noUi-connect {\n  background: #2bffc6; }\n\n/* Disabled state */\n[disabled] .noUi-connect,\n[disabled].noUi-connect {\n  background: #b2b2b2; }\n\n[disabled] .noUi-handle,\n[disabled].noUi-origin {\n  cursor: not-allowed; }\n\n/* Range slider value labels */\n.range-slider-value {\n  font-size: 0.75rem;\n  font-weight: 500;\n  background-color: rgba(33, 37, 41, 0.7);\n  color: #fff;\n  border-radius: 10px;\n  padding: .4em .8em .3em .85em; }\n\n.range-slider-wrapper .upper-info {\n  font-weight: 400;\n  margin-bottom: 5px; }\n\n.input-slider-value-output {\n  background: #333;\n  color: #fff;\n  padding: 4px 8px;\n  position: relative;\n  top: 12px;\n  font-size: 11px;\n  border-radius: 2px; }\n\n.input-slider-value-output:after {\n  bottom: 100%;\n  left: 10px;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(136, 183, 213, 0);\n  border-bottom-color: #333;\n  border-width: 4px;\n  margin-left: -4px; }\n\n.input-slider-value-output.left:after {\n  left: 10px;\n  right: auto; }\n\n.input-slider-value-output.right:after {\n  right: 10px;\n  left: auto; }\n\n.scrollbar-inner {\n  height: 100%; }\n  .scrollbar-inner:not(:hover) .scroll-element {\n    opacity: 0; }\n  .scrollbar-inner .scroll-element {\n    transition: opacity 300ms;\n    margin-right: 2px; }\n    .scrollbar-inner .scroll-element .scroll-bar,\n    .scrollbar-inner .scroll-element .scroll-element_track {\n      transition: background-color 300ms; }\n    .scrollbar-inner .scroll-element .scroll-element_track {\n      background-color: transparent; }\n  .scrollbar-inner .scroll-element.scroll-y {\n    width: 3px;\n    right: 0; }\n  .scrollbar-inner .scroll-element.scroll-x {\n    height: 3px;\n    bottom: 0; }\n\n/*!\n* https://github.com/YouCanBookMe/react-datetime\n*/\n.rdt {\n  position: relative; }\n  .rdt .rdtPicker {\n    -webkit-transition: all 150ms linear;\n    -moz-transition: all 150ms linear;\n    -o-transition: all 150ms linear;\n    -ms-transition: all 150ms linear;\n    transition: all 150ms linear;\n    margin-top: -20px;\n    visibility: hidden;\n    display: block;\n    opacity: 0; }\n  .rdt.rdtOpen .rdtPicker {\n    opacity: 1;\n    visibility: visible;\n    margin-top: 0; }\n\n.rdtPicker {\n  display: none;\n  position: absolute;\n  padding: 20px;\n  margin-top: 1px;\n  z-index: 99999 !important;\n  background: #fff;\n  border-radius: .375rem;\n  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  min-width: 160px; }\n  .rdtPicker:before {\n    display: inline-block;\n    position: absolute;\n    width: 0;\n    height: 0;\n    vertical-align: middle;\n    content: \"\";\n    top: -5px;\n    left: 10px;\n    right: auto;\n    color: #ffffff;\n    border-bottom: 0.4em solid;\n    border-right: 0.4em solid transparent;\n    border-left: 0.4em solid transparent; }\n  .rdtPicker:after {\n    border-bottom: 0.4em solid #ffffff;\n    border-right: 0.4em solid transparent;\n    border-left: 0.4em solid transparent;\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: -5px;\n    left: 10px; }\n\n.rdtPicker {\n  display: block;\n  top: 40px; }\n\n.rdtStatic .rdtPicker {\n  box-shadow: none;\n  position: static; }\n\n.rdtPicker .rdtTimeToggle {\n  text-align: center;\n  padding: 10px;\n  border-radius: 4px;\n  visibility: hidden;\n  position: relative; }\n  .rdtPicker .rdtTimeToggle:before {\n    visibility: visible;\n    width: 100%;\n    height: 100%;\n    border-radius: 3px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font: normal normal normal 1em/1 \"Nucleo\";\n    font-size: 18px;\n    content: \"\\EA5E\"; }\n\n.rdtPicker table {\n  width: 100%;\n  margin: 0;\n  border-color: #fff !important; }\n\n.rdtPicker td,\n.rdtPicker th {\n  text-align: center;\n  padding: 1px; }\n\n.rdtPicker td {\n  cursor: pointer; }\n\n.rdtDay {\n  font-size: .875rem;\n  width: 36px;\n  height: 36px;\n  transition: all .15s ease;\n  text-align: center;\n  border: none;\n  border-radius: 50%; }\n  .rdtDay.rdtToday.rdtActive, .rdtDay.rdtActive, .rdtDay.rdtActive:hover, .rdtDay.start-date, .rdtDay.end-date, .rdtDay.middle-date, .rdtDay.start-date:hover, .rdtDay.end-date:hover, .rdtDay.middle-date:hover {\n    background-color: #11cdef !important;\n    color: #fff !important; }\n  .rdtDay.start-date {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .rdtDay.middle-date {\n    border-radius: 0; }\n  .rdtDay.end-date {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n\n.rdtDays tr .dow {\n  text-align: center;\n  font-size: 12px;\n  font-weight: inherit;\n  padding-bottom: 5px;\n  padding-top: 10px;\n  font-weight: 300;\n  font-size: .875rem;\n  width: 20px;\n  height: 20px; }\n\n.rdtDays tr .rdtDay {\n  color: #525f7f;\n  font-size: .875rem; }\n  .rdtDays tr .rdtDay.rdtOld, .rdtDays tr .rdtDay.rdtNew {\n    color: #adb5bd;\n    font-weight: 300; }\n\n.rdtPicker td.rdtDay:hover,\n.rdtPicker td.rdtHour:hover,\n.rdtPicker td.rdtMinute:hover,\n.rdtPicker td.rdtSecond:hover,\n.rdtPicker .rdtTimeToggle:hover,\n.rdtPicker .rdtTimeToggle:hover:before {\n  background: #eeeeee;\n  cursor: pointer; }\n\n.rdtPicker td.rdtToday {\n  position: relative; }\n\n.rdtPicker td.rdtActive.rdtToday:before {\n  border-bottom-color: #fff; }\n\n.rdtPicker td.rdtDisabled,\n.rdtPicker td.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed; }\n\n.rdtPicker td span.rdtOld {\n  color: #999999; }\n\n.rdtPicker td span.rdtDisabled,\n.rdtPicker td span.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed; }\n\n.rdtPicker tr .dow {\n  width: 14.2857%;\n  border-bottom: none;\n  font-size: .875rem;\n  width: 36px;\n  height: 36px;\n  transition: all .15s ease;\n  text-align: center;\n  border: none;\n  font-weight: 500;\n  border-radius: .375rem; }\n\n.rdtPicker th.rdtSwitch {\n  font-weight: 500;\n  border-radius: .375rem;\n  font-size: .875rem;\n  width: 145px;\n  height: 36px;\n  transition: all .15s ease;\n  text-align: center;\n  border: none; }\n\n.rdtPicker th.rdtNext,\n.rdtPicker th.rdtPrev {\n  font-size: .875rem;\n  width: 36px;\n  height: 36px;\n  transition: all .15s ease;\n  text-align: center;\n  border: none;\n  border-radius: .375rem;\n  cursor: pointer; }\n\n.rdtPicker .dow,\n.rdtPicker th.rdtSwitch,\n.rdtPicker th.rdtNext,\n.rdtPicker th.rdtPrev,\n.rdtPicker .rdtTimeToggle {\n  color: #525f7f; }\n\n.rdtPrev span,\n.rdtNext span {\n  display: block;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  -khtml-user-select: none;\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none; }\n\n.rdtPicker th.rdtDisabled,\n.rdtPicker th.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed; }\n\n.rdtPicker thead tr:first-child th {\n  cursor: pointer; }\n\n.rdtPicker thead tr:first-child th:hover {\n  background: #eeeeee; }\n\n.rdtPicker button {\n  border: none;\n  background: none;\n  cursor: pointer; }\n\n.rdtPicker button:hover {\n  background-color: #eee; }\n\n.rdtPicker thead button {\n  width: 100%;\n  height: 100%; }\n\ntd.rdtMonth,\ntd.rdtYear {\n  height: 50px;\n  width: 25%;\n  cursor: pointer; }\n\ntd.rdtMonth:hover,\ntd.rdtYear:hover {\n  background: #eee; }\n\n.rdtCounters {\n  display: inline-block; }\n\n.rdtCounters > div {\n  float: left;\n  width: 40px;\n  font-weight: inherit;\n  margin: 3px;\n  border-radius: 50%; }\n\n.rdtCounters .rdtCounterSeparator {\n  width: 0;\n  border: 1px solid transparent; }\n\n.rdtCounter {\n  height: 100px; }\n\n.rdtCounter {\n  width: 40px; }\n  .rdtCounter .rdtCount {\n    padding: 7px;\n    height: 40px;\n    border: 1px solid transparent; }\n\n.rdtCounters .rdtCounter:last-child .rdtCount {\n  color: #11cdef;\n  border-radius: 50%;\n  border: 1px solid #11cdef; }\n\n.rdtCounterSeparator {\n  padding: 7px;\n  line-height: 100px; }\n\n.rdtCounter .rdtBtn {\n  line-height: 40px;\n  cursor: pointer;\n  display: block;\n  border-radius: 50%;\n  color: #adb5bd;\n  -webkit-transition: all 60ms ease-in;\n  -moz-transition: all 60ms ease-in;\n  -o-transition: all 60ms ease-in;\n  -ms-transition: all 60ms ease-in;\n  transition: all 60ms ease-in;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  -khtml-user-select: none;\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none; }\n\n.rdtCounter .rdtBtn:hover {\n  background: #eee;\n  color: #797979; }\n\n.rdtCounter .rdtCount {\n  font-size: inherit;\n  line-height: 25px; }\n\n.rdtMilli {\n  vertical-align: middle;\n  padding-left: 8px;\n  width: 48px; }\n\n.rdtMilli input {\n  width: 100%;\n  font-size: inherit;\n  margin-top: 37px; }\n\n.rdtMonths,\n.rdtYears {\n  padding-bottom: 10px; }\n  .rdtMonths .rdtMonth,\n  .rdtMonths .rdtYear,\n  .rdtYears .rdtMonth,\n  .rdtYears .rdtYear {\n    display: inline-block;\n    width: 56px;\n    height: 56px;\n    line-height: 56px;\n    margin: 3px 3px;\n    cursor: pointer;\n    border-radius: 50%;\n    text-align: center; }\n    .rdtMonths .rdtMonth.rdtActive, .rdtMonths .rdtMonth.start-date, .rdtMonths .rdtMonth.end-date, .rdtMonths .rdtMonth.middle-date,\n    .rdtMonths .rdtYear.rdtActive,\n    .rdtMonths .rdtYear.start-date,\n    .rdtMonths .rdtYear.end-date,\n    .rdtMonths .rdtYear.middle-date,\n    .rdtYears .rdtMonth.rdtActive,\n    .rdtYears .rdtMonth.start-date,\n    .rdtYears .rdtMonth.end-date,\n    .rdtYears .rdtMonth.middle-date,\n    .rdtYears .rdtYear.rdtActive,\n    .rdtYears .rdtYear.start-date,\n    .rdtYears .rdtYear.end-date,\n    .rdtYears .rdtYear.middle-date {\n      background-color: #11cdef !important;\n      color: #fff; }\n\n.input-group .input-group-prepend + .rdt .form-control {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.input-group .input-group-prepend + .rdt .form-control {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.input-group > .rdt:not(:last-child) .form-control {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.form-group .rdt {\n  width: 1%;\n  margin-bottom: 0;\n  flex: 1 1 auto; }\n\n.btn .btn-inner--icon {\n  margin-right: 4px; }\n\n.btn + .btn {\n  margin-left: 4px; }\n\nbutton:focus, :focus {\n  outline: none; }\n\n@keyframes show-navbar-dropdown {\n  0% {\n    opacity: 0;\n    transition: visibility 0.25s, opacity 0.25s; }\n  100% {\n    opacity: 1; } }\n\n.navbar .collapsing .navbar-toggler {\n  pointer-events: none; }\n\n.navbar .nav-item .nav-link-icon.nav-link i {\n  margin-right: 4px; }\n\n.table .avatar-group .avatar {\n  margin-right: 4px; }\n\n.table .badge i {\n  margin-right: 10px; }\n";
styleInject(css);

var Container$1 = (function (props) { return (React.createElement(Container, { fluid: true, className: "mb-4" },
    React.createElement(Row, null,
        React.createElement("div", { className: "col" },
            React.createElement(Card, { className: "shadow" },
                props.title &&
                    React.createElement(CardHeader, { className: "border-0" },
                        React.createElement("h3", { className: "mb-0" }, props.title)),
                React.createElement(CardBody, null, props.children)))))); });

var Pagination$1 = /** @class */ (function (_super) {
    __extends(Pagination$$1, _super);
    function Pagination$$1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activePage: 1,
        };
        return _this;
    }
    Pagination$$1.prototype.buildPaginationItems = function (numberOfPages) {
        var paginationItems = [];
        for (var i = 1; i <= numberOfPages; i++) {
            paginationItems.push(React.createElement(PaginationItem, { key: "pagination-item-" + i, active: this.state.activePage === i },
                React.createElement(PaginationLink, { onClick: this.onItemClick.bind(this, i) }, i)));
        }
        return paginationItems;
    };
    Pagination$$1.prototype.onFirstClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pages = {
                            currentPage: this.state.activePage,
                            newPage: 1,
                        };
                        return [4 /*yield*/, this.setState({
                                activePage: pages.newPage,
                            })];
                    case 1:
                        _a.sent();
                        this.props.onFirstClick(pages);
                        return [2 /*return*/];
                }
            });
        });
    };
    Pagination$$1.prototype.onPrevClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pages = {
                            currentPage: this.state.activePage,
                            newPage: this.state.activePage - 1,
                        };
                        return [4 /*yield*/, this.setState({
                                activePage: pages.newPage,
                            })];
                    case 1:
                        _a.sent();
                        this.props.onPrevClick(pages);
                        return [2 /*return*/];
                }
            });
        });
    };
    Pagination$$1.prototype.onNextClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pages = {
                            currentPage: this.state.activePage,
                            newPage: this.state.activePage + 1,
                        };
                        return [4 /*yield*/, this.setState({
                                activePage: pages.newPage,
                            })];
                    case 1:
                        _a.sent();
                        this.props.onNextClick(pages);
                        return [2 /*return*/];
                }
            });
        });
    };
    Pagination$$1.prototype.onLastClick = function (numberOfPages) {
        return __awaiter(this, void 0, void 0, function () {
            var pages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pages = {
                            currentPage: this.state.activePage,
                            newPage: numberOfPages,
                        };
                        return [4 /*yield*/, this.setState({
                                activePage: pages.newPage,
                            })];
                    case 1:
                        _a.sent();
                        this.props.onFirstClick(pages);
                        return [2 /*return*/];
                }
            });
        });
    };
    Pagination$$1.prototype.onItemClick = function (clickedItem) {
        return __awaiter(this, void 0, void 0, function () {
            var pages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pages = {
                            currentPage: this.state.activePage,
                            newPage: clickedItem,
                        };
                        return [4 /*yield*/, this.setState({
                                activePage: clickedItem,
                            })];
                    case 1:
                        _a.sent();
                        this.props.onItemClick(pages);
                        return [2 /*return*/];
                }
            });
        });
    };
    Pagination$$1.prototype.render = function () {
        var numberOfPages = Math.ceil(this.props.totalItems / this.props.itemsPerPage);
        return (React.createElement(Pagination, { className: "pagination justify-content-end mb-0", listClassName: "justify-content-end mb-0" },
            this.props.useFirstLast
                && (React.createElement(PaginationItem, null,
                    React.createElement(PaginationLink, { onClick: this.onFirstClick.bind(this), disabled: this.state.activePage === 1, first: true }))),
            this.props.usePrevNext
                && (React.createElement(PaginationItem, null,
                    React.createElement(PaginationLink, { onClick: this.onPrevClick.bind(this), disabled: this.state.activePage === 1, previous: true }))),
            this.props.totalItems
                && this.buildPaginationItems(numberOfPages),
            this.props.usePrevNext
                && (React.createElement(PaginationItem, null,
                    React.createElement(PaginationLink, { onClick: this.onNextClick.bind(this), disabled: this.state.activePage === numberOfPages, next: true }))),
            this.props.useFirstLast
                && (React.createElement(PaginationItem, null,
                    React.createElement(PaginationLink, { onClick: this.onLastClick.bind(this, numberOfPages), disabled: this.state.activePage === numberOfPages, last: true })))));
    };
    return Pagination$$1;
}(React.Component));

exports.Container = Container$1;
exports.Footer = Footer;
exports.AdminNavbar = AdminNavbar;
exports.Layout = Layout;
exports.Sidebar = Sidebar;
exports.UserHeader = UserHeader;
exports.Pagination = Pagination$1;
//# sourceMappingURL=index.js.map
