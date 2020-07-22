(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/dimensions-control/style.scss":
/*!********************************************!*\
  !*** ./util/dimensions-control/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/image-avatar/style.scss":
/*!**************************************!*\
  !*** ./util/image-avatar/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/unit-control/style.scss":
/*!**************************************!*\
  !*** ./util/unit-control/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
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
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
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
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  fontSize: {
    type: "number",
    "default": 16
  },
  displayAvatar: {
    type: "boolean",
    "default": true
  },
  avatarInline: {
    type: "boolean",
    "default": true
  },
  avatarPosition: {
    type: "string",
    "default": "flex-start"
  },
  avatarAlign: {
    type: "string",
    "default": "center"
  },
  borderRadius: {
    type: "number",
    "default": 50
  },
  imageUrl: {
    type: "string"
  },
  imageId: {
    type: "string"
  },
  avatarOrder: {
    type: "number",
    "default": 1
  },
  userName: {
    selector: ".username-one",
    source: "html",
    "default": "John Doe"
  },
  companyName: {
    selector: ".company-one",
    source: "html",
    "default": "Company Name"
  },
  description: {
    selector: ".description-one",
    source: "html",
    "default": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  textAlign: {
    type: "string",
    "default": "center"
  },
  userInfoPos: {
    type: "string",
    "default": "flex-start"
  },
  imagePosition: {
    type: "number",
    "default": 0
  },
  userNameColor: {
    type: "string"
  },
  descriptionColor: {
    type: "string"
  },
  quoteColor: {
    type: "string"
  },
  userNameFontSize: {
    type: "number"
  },
  companyFontSize: {
    type: "number"
  },
  descriptionFontSize: {
    type: "number"
  },
  quoteSize: {
    type: "number"
  },
  userInfoAlign: {
    type: "string",
    "default": "center"
  },
  backgroundColor: {
    type: "string"
  },
  backgroundImageURL: {
    type: "string"
  },
  linkedMargin: {
    type: "boolean",
    "default": false
  },
  marginTop: {
    type: "number"
  },
  marginRight: {
    type: "number"
  },
  marginBottom: {
    type: "number"
  },
  marginLeft: {
    type: "number"
  },
  linkedPadding: {
    type: "boolean",
    "default": false
  },
  paddingTop: {
    type: "number"
  },
  paddingRight: {
    type: "number"
  },
  paddingBottom: {
    type: "number"
  },
  paddingLeft: {
    type: "number"
  },
  shadowColor: {
    type: "string"
  },
  shadowHOffset: {
    type: "number"
  },
  shadowVOffset: {
    type: "number"
  },
  shadowBlur: {
    type: "number"
  },
  shadowSpread: {
    type: "number"
  },
  marginUnit: {
    type: "string",
    "default": "px"
  },
  paddingUnit: {
    type: "string",
    "default": "px"
  },
  nameSizeUnit: {
    type: "string",
    "default": "px"
  },
  companySizeUnit: {
    type: "string",
    "default": "px"
  },
  descriptionSizeUnit: {
    type: "string",
    "default": "px"
  },
  quoteSizeUnit: {
    type: "string",
    "default": "px"
  },
  companyColor: {
    type: "string"
  },
  backgroundType: {
    type: "string",
    "default": "color"
  },
  nameFontFamily: {
    type: "string"
  },
  nameFontWeight: {
    type: "string",
    "default": "normal"
  },
  nameFontSize: {
    type: "number"
  },
  nameFontSizeUnit: {
    type: "string",
    "default": "string"
  },
  nameTextTransform: {
    type: "string"
  },
  nameTextDecoration: {
    type: "string"
  },
  nameLetterSpacing: {
    type: "number"
  },
  nameLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  nameLineHeight: {
    type: "number"
  },
  nameLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  companyFontFamily: {
    type: "string"
  },
  companyFontWeight: {
    type: "string",
    "default": "normal"
  },
  companyFontSizeUnit: {
    type: "string",
    "default": "string"
  },
  companyTextTransform: {
    type: "string"
  },
  companyTextDecoration: {
    type: "string"
  },
  companyLetterSpacing: {
    type: "number"
  },
  companyLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  companyLineHeight: {
    type: "number"
  },
  companyLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  descriptionFontFamily: {
    type: "string"
  },
  descriptionFontWeight: {
    type: "string",
    "default": "normal"
  },
  descriptionFontSizeUnit: {
    type: "string",
    "default": "string"
  },
  descriptionTextTransform: {
    type: "string"
  },
  descriptionTextDecoration: {
    type: "string"
  },
  descriptionLetterSpacing: {
    type: "number"
  },
  descriptionLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  descriptionLineHeight: {
    type: "number"
  },
  descriptionLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  bgPositon: {
    type: "string"
  },
  bgXPos: {
    type: "number",
    "default": 0
  },
  bgXPosUnit: {
    type: "string",
    "default": "%"
  },
  bgYPos: {
    type: "number",
    "default": 0
  },
  bgYPosUnit: {
    type: "string",
    "default": "%"
  },
  bgSize: {
    type: "string"
  },
  bgWidth: {
    type: "number"
  },
  bgWidthUnit: {
    type: "string",
    "default": "%"
  },
  bgRepeat: {
    type: "string"
  },
  bgAttachment: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: DEFAULT_BACKGROUND, DEFAULT_NAME_COLOR, DEFAULT_NAME_SIZE, DEFAULT_DESCRIPTION_COLOR, DEFAULT_DESCRIPTION_SIZE, DEFAULT_COMPANY_COLOR, DEFAULT_COMPANY_SIZE, DEFAULT_QUOTE_COLOR, DEFAULT_QUOTE_SIZE, DEFAULT_SHADOW_COLOR, COLUMN_NUMBERS, DESC_POSITIONS, TEXT_ALIGN, ALIGN_ITEMS, IMG_POSITIONS, BG_TYPES, TEXT_TRANSFORM, FONT_WEIGHTS, TEXT_DECORATION, BACKGROUND_SIZE, BACKGROUND_REPEAT, BACKGROUND_POSITION, BACKGROUND_ATTACHMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BACKGROUND", function() { return DEFAULT_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NAME_COLOR", function() { return DEFAULT_NAME_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NAME_SIZE", function() { return DEFAULT_NAME_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DESCRIPTION_COLOR", function() { return DEFAULT_DESCRIPTION_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DESCRIPTION_SIZE", function() { return DEFAULT_DESCRIPTION_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COMPANY_COLOR", function() { return DEFAULT_COMPANY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COMPANY_SIZE", function() { return DEFAULT_COMPANY_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_QUOTE_COLOR", function() { return DEFAULT_QUOTE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_QUOTE_SIZE", function() { return DEFAULT_QUOTE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SHADOW_COLOR", function() { return DEFAULT_SHADOW_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_NUMBERS", function() { return COLUMN_NUMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESC_POSITIONS", function() { return DESC_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_ALIGN", function() { return TEXT_ALIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGN_ITEMS", function() { return ALIGN_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_POSITIONS", function() { return IMG_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BG_TYPES", function() { return BG_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHTS", function() { return FONT_WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECORATION", function() { return TEXT_DECORATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_SIZE", function() { return BACKGROUND_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_REPEAT", function() { return BACKGROUND_REPEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_POSITION", function() { return BACKGROUND_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_ATTACHMENT", function() { return BACKGROUND_ATTACHMENT; });
var __ = wp.i18n.__;
var DEFAULT_BACKGROUND = "transparent";
var DEFAULT_NAME_COLOR = "#7967ff";
var DEFAULT_NAME_SIZE = "20";
var DEFAULT_DESCRIPTION_COLOR = "#4a5059";
var DEFAULT_DESCRIPTION_SIZE = "18";
var DEFAULT_COMPANY_COLOR = "#4a5059";
var DEFAULT_COMPANY_SIZE = "14";
var DEFAULT_QUOTE_COLOR = "#edf1f7";
var DEFAULT_QUOTE_SIZE = "48";
var DEFAULT_SHADOW_COLOR = "#000000";
var COLUMN_NUMBERS = [{
  label: __("One"),
  value: 1
}, {
  label: __("Two"),
  value: 2
}, {
  label: __("Three"),
  value: 3
}];
var DESC_POSITIONS = [{
  label: __("Top"),
  value: 1
}, {
  label: __("Bottom"),
  value: 0
}];
var TEXT_ALIGN = [{
  label: "Left",
  value: "left"
}, {
  label: "Center",
  value: "center"
}, {
  label: "Right",
  value: "right"
}];
var ALIGN_ITEMS = [{
  label: __("Start"),
  value: "flex-start"
}, {
  label: __("Center"),
  value: "center"
}, {
  label: __("End"),
  value: "flex-end"
}];
var IMG_POSITIONS = [{
  label: __("Before"),
  value: 0
}, {
  label: __("After"),
  value: 1
}];
var BG_TYPES = [{
  label: "Color",
  value: "color"
}, {
  label: "Image",
  value: "image"
}];
var TEXT_TRANSFORM = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: __("Lighter"),
  value: "lighter"
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}, {
  label: __("Bolder"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];
var BACKGROUND_SIZE = [{
  label: __("Auto"),
  value: "auto"
}, {
  label: __("Cover"),
  value: "cover"
}, {
  label: __("Contain"),
  value: "contain"
}, {
  label: __("Custom"),
  value: "custom"
}];
var BACKGROUND_REPEAT = [{
  label: __("Default"),
  value: ""
}, {
  label: __("No-repeat"),
  value: "no-repeat"
}, {
  label: __("Repeat"),
  value: "repeat"
}, {
  label: __("Repeat-x"),
  value: "repeat-x"
}, {
  label: __("Repeat-y"),
  value: "repeat-y"
}];
var BACKGROUND_POSITION = [{
  label: __("Default"),
  value: "initial"
}, {
  label: __("Center Center"),
  value: "center center"
}, {
  label: __("Center Left"),
  value: "center left"
}, {
  label: __("Center Right"),
  value: "center right"
}, {
  label: __("Top Center"),
  value: "top center"
}, {
  label: __("Top Left"),
  value: "top left"
}, {
  label: __("Top Right"),
  value: "top right"
}, {
  label: __("Bottom Center"),
  value: "bottom center"
}, {
  label: __("Bottom Left"),
  value: "bottom left"
}, {
  label: __("Bottom Right"),
  value: "bottom right"
}, {
  label: __("Custom"),
  value: "custom"
}];
var BACKGROUND_ATTACHMENT = [{
  label: __("Default"),
  value: "initial"
}, {
  label: __("Fixed"),
  value: "fixed"
}, {
  label: __("Scroll"),
  value: "scroll"
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    RichText = _wp$blockEditor.RichText;
var Button = wp.components.Button;
/**
 * Internal dependencies
 */




var Edit = function Edit(props) {
  var isSelected = props.isSelected,
      attributes = props.attributes,
      setAttributes = props.setAttributes;
  var fontSize = attributes.fontSize,
      displayAvatar = attributes.displayAvatar,
      avatarInline = attributes.avatarInline,
      avatarPosition = attributes.avatarPosition,
      avatarAlign = attributes.avatarAlign,
      borderRadius = attributes.borderRadius,
      avatarOrder = attributes.avatarOrder,
      imageId = attributes.imageId,
      imageUrl = attributes.imageUrl,
      userName = attributes.userName,
      companyName = attributes.companyName,
      description = attributes.description,
      userInfoAlign = attributes.userInfoAlign,
      textAlign = attributes.textAlign,
      userInfoPos = attributes.userInfoPos,
      imagePosition = attributes.imagePosition,
      userNameColor = attributes.userNameColor,
      descriptionColor = attributes.descriptionColor,
      quoteColor = attributes.quoteColor,
      quoteSize = attributes.quoteSize,
      backgroundType = attributes.backgroundType,
      backgroundColor = attributes.backgroundColor,
      backgroundImageURL = attributes.backgroundImageURL,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      shadowColor = attributes.shadowColor,
      shadowHOffset = attributes.shadowHOffset,
      shadowVOffset = attributes.shadowVOffset,
      shadowSpread = attributes.shadowSpread,
      shadowBlur = attributes.shadowBlur,
      marginUnit = attributes.marginUnit,
      paddingUnit = attributes.paddingUnit,
      quoteSizeUnit = attributes.quoteSizeUnit,
      companyColor = attributes.companyColor,
      nameFontFamily = attributes.nameFontFamily,
      nameFontSize = attributes.nameFontSize,
      nameSizeUnit = attributes.nameSizeUnit,
      nameFontWeight = attributes.nameFontWeight,
      nameTextTransform = attributes.nameTextTransform,
      nameTextDecoration = attributes.nameTextDecoration,
      nameLetterSpacing = attributes.nameLetterSpacing,
      nameLetterSpacingUnit = attributes.nameLetterSpacingUnit,
      nameLineHeight = attributes.nameLineHeight,
      nameLineHeightUnit = attributes.nameLineHeightUnit,
      companyFontFamily = attributes.companyFontFamily,
      companyFontSize = attributes.companyFontSize,
      companySizeUnit = attributes.companySizeUnit,
      companyFontWeight = attributes.companyFontWeight,
      companyTextTransform = attributes.companyTextTransform,
      companyTextDecoration = attributes.companyTextDecoration,
      companyLetterSpacing = attributes.companyLetterSpacing,
      companyLetterSpacingUnit = attributes.companyLetterSpacingUnit,
      companyLineHeight = attributes.companyLineHeight,
      companyLineHeightUnit = attributes.companyLineHeightUnit,
      descriptionFontFamily = attributes.descriptionFontFamily,
      descriptionFontSize = attributes.descriptionFontSize,
      descriptionSizeUnit = attributes.descriptionSizeUnit,
      descriptionFontWeight = attributes.descriptionFontWeight,
      descriptionTextTransform = attributes.descriptionTextTransform,
      descriptionTextDecoration = attributes.descriptionTextDecoration,
      descriptionLetterSpacing = attributes.descriptionLetterSpacing,
      descriptionLetterSpacingUnit = attributes.descriptionLetterSpacingUnit,
      descriptionLineHeight = attributes.descriptionLineHeight,
      descriptionLineHeightUnit = attributes.descriptionLineHeightUnit,
      bgPosition = attributes.bgPosition,
      bgXPos = attributes.bgXPos,
      bgXPosUnit = attributes.bgXPosUnit,
      bgYPos = attributes.bgYPos,
      bgYPosUnit = attributes.bgYPosUnit,
      bgSize = attributes.bgSize,
      bgWidth = attributes.bgWidth,
      bgWidthUnit = attributes.bgWidthUnit,
      bgRepeat = attributes.bgRepeat,
      bgAttachment = attributes.bgAttachment;
  var containerStyle = {
    backgroundImage: backgroundType === "image" && backgroundImageURL ? "url('".concat(backgroundImageURL, "')") : "none",
    backgroundColor: backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_BACKGROUND"],
    backgroundPosition: bgPosition === "custom" ? "".concat(bgXPos).concat(bgXPosUnit, " ").concat(bgYPos).concat(bgYPosUnit) : bgPosition,
    backgroundSize: bgSize === "custom" ? bgWidth + bgWidthUnit : bgSize,
    backgroundRepeat: bgRepeat || "none",
    backgroundAttachment: bgAttachment,
    margin: "".concat(marginTop || 0).concat(marginUnit, " ").concat(marginRight || 0).concat(marginUnit, " ").concat(marginBottom || 0).concat(marginUnit, " ").concat(marginLeft || 0).concat(marginUnit),
    padding: "".concat(paddingTop || 10).concat(paddingUnit, " ").concat(paddingRight || 10).concat(paddingUnit, " ").concat(paddingBottom || 10).concat(paddingUnit, " ").concat(paddingLeft || 10).concat(paddingUnit),
    boxShadow: "".concat(shadowHOffset || 0, "px ").concat(shadowVOffset || 0, "px ").concat(shadowBlur || 0, "px ").concat(shadowSpread || 0, "px ").concat(shadowColor || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_SHADOW_COLOR"])
  };
  var avatarContainerStyle = {
    order: avatarOrder,
    justifyContent: avatarPosition,
    alignItems: avatarAlign,
    fontSize: "".concat(fontSize, "px"),
    flexDirection: avatarInline ? "row" : "column"
  };
  var imageContainerStyle = {
    order: imagePosition
  };
  var userInfoStyle = {
    textAlign: textAlign,
    justifyContent: userInfoPos,
    alignSelf: userInfoAlign
  };
  var userNameStyle = {
    fontSize: "".concat(nameFontSize || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_NAME_SIZE"]).concat(nameSizeUnit),
    fontFamily: nameFontFamily,
    fontWeight: nameFontWeight,
    textTransform: nameTextTransform,
    textDecoration: nameTextDecoration,
    letterSpacing: nameLetterSpacing ? "".concat(nameLetterSpacing).concat(nameLetterSpacingUnit) : undefined,
    lineHeight: nameLineHeight ? "".concat(nameLineHeight).concat(nameLineHeightUnit) : undefined,
    color: userNameColor || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_NAME_COLOR"]
  };
  var companyNameStyle = {
    fontSize: "".concat(companyFontSize || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_COMPANY_SIZE"]).concat(companySizeUnit),
    fontFamily: companyFontFamily,
    fontWeight: companyFontWeight,
    textTransform: companyTextTransform,
    textDecoration: companyTextDecoration,
    letterSpacing: companyLetterSpacing ? "".concat(companyLetterSpacing).concat(companyLetterSpacingUnit) : undefined,
    lineHeight: companyLineHeight ? "".concat(companyLineHeight).concat(companyLineHeightUnit) : undefined,
    color: companyColor || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_COMPANY_COLOR"]
  };
  var descriptionStyle = {
    fontSize: "".concat(descriptionFontSize || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_DESCRIPTION_SIZE"]).concat(descriptionSizeUnit),
    fontFamily: descriptionFontFamily,
    fontWeight: descriptionFontWeight,
    textTransform: descriptionTextTransform,
    textDecoration: descriptionTextDecoration,
    letterSpacing: descriptionLetterSpacing ? "".concat(descriptionLetterSpacing).concat(companyLetterSpacingUnit) : undefined,
    lineHeight: descriptionLineHeight ? "".concat(descriptionLineHeight).concat(companyLineHeightUnit) : undefined,
    color: descriptionColor || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_DESCRIPTION_COLOR"],
    paddingRight: 20
  };
  var quoteStyle = {
    color: quoteColor || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_QUOTE_COLOR"],
    fontSize: "".concat(quoteSize || _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_QUOTE_SIZE"]).concat(quoteSizeUnit)
  };
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], props),
  /*#__PURE__*/
  // Edit view here
  React.createElement("div", {
    className: "eb-testimonial-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-container",
    style: containerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-avatar-container",
    style: avatarContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-container",
    style: _objectSpread(_objectSpread({}, imageContainerStyle), {}, {
      display: displayAvatar ? "block" : "none"
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-avatar-style",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")"),
      borderRadius: "".concat(borderRadius, "%"),
      display: imageUrl ? "block" : "none"
    }
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageUrl: media.url,
        imageId: media.id
      });
    },
    type: "image",
    value: imageId,
    render: function render(_ref) {
      var open = _ref.open;
      return !imageUrl && /*#__PURE__*/React.createElement(Button, {
        className: "eb-testimonial-image components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-userinfo-container",
    style: userInfoStyle
  }, /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    className: "eb-testimonial-username",
    value: userName,
    onChange: function onChange(newName) {
      return setAttributes({
        userName: newName
      });
    },
    style: userNameStyle
  }), /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    className: "eb-testimonial-company",
    value: companyName,
    onChange: function onChange(newName) {
      return setAttributes({
        companyName: newName
      });
    },
    style: companyNameStyle
  }))), /*#__PURE__*/React.createElement("div", {
    className: "eb-description-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fas fa-quote-left eb-testimonial-quote-style",
    style: quoteStyle
  }), /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    value: description,
    onChange: function onChange(newText) {
      return setAttributes({
        description: newText
      });
    },
    style: descriptionStyle
  }))))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-testimonials",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "8",
    y1: "22.938",
    x2: "8",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M10,26c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_1__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "14",
    y1: "22.938",
    x2: "14",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M16,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_2__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "20",
    y1: "22.938",
    x2: "20",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_3__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "22.938",
    x2: "26",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M28,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_4__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "8",
    y1: "28.813",
    x2: "8",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M10,32c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_5__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "17",
    y1: "28.813",
    x2: "17",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22,32c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h8 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_6__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "28.813",
    x2: "26",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M28,32c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_7__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "28",
    y1: "9.5",
    x2: "28",
    y2: "55.566",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M49,9H19c-2.757,0-5,2.241-5,4.998V17H5c-1.654,0-3,1.344-3,2.998v16C2,37.653,3.346,39,5,39 h9v2.998C14,44.755,16.243,47,19,47h11c0.552,0,1,0.447,1,0.998v4.1c0,1.132,0.658,2.135,1.717,2.617 c0.422,0.193,0.865,0.287,1.302,0.287c0.721,0,1.425-0.256,1.995-0.751l8.077-7.007C44.272,47.086,44.506,47,44.748,47H49 c2.757,0,5-2.245,5-5.002v-28C54,11.241,51.757,9,49,9z M14,35c-1.103,0-2,1-2,2H5c-0.552,0-1-0.45-1-1.002v-16 C4,19.447,4.448,19,5,19h24c0.552,0,1,0.447,1,0.998v16C30,36.55,29.552,37,29,37h-7c0-1-0.897-2-2-2H14z M52,41.998 C52,43.653,50.654,45,49,45h-4.252c-0.724,0-1.424,0.26-1.969,0.734l-8.076,7.007c-0.381,0.328-0.846,0.296-1.156,0.154 C33.383,52.821,33,52.593,33,52.098v-4.1C33,46.344,31.654,45,30,45H19c-1.654,0-3-1.347-3-3.002V39h13c1.654,0,3-1.347,3-3.002v-16 C32,18.344,30.654,17,29,17H16v-3.002C16,12.344,17.346,11,19,11h30c1.654,0,3,1.344,3,2.998V41.998z",
    fill: "url(#SVGID_8__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_9__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "37",
    y: "17",
    width: "10",
    height: "2",
    fill: "url(#SVGID_9__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_10__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "37",
    y: "21",
    width: "10",
    height: "2",
    fill: "url(#SVGID_10__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_11__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M44,25h-4c-1.654,0-3,1.344-3,2.998V39h2v-5h6v5h2V27.998C47,26.344,45.654,25,44,25z M45,32 h-6v-4.002C39,27.447,39.448,27,40,27h4c0.552,0,1,0.447,1,0.998V32z",
    fill: "url(#SVGID_11__43982)"
  }));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("block/testimonial", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Testimonial", "block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("", "block"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/image-avatar/ImageAvater */ "./util/image-avatar/ImageAvater.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dimensions-control */ "./util/dimensions-control/index.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/typography-control/FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */








var Inspector = /*#__PURE__*/function (_Component) {
  _inherits(Inspector, _Component);

  var _super = _createSuper(Inspector);

  function Inspector() {
    _classCallCheck(this, Inspector);

    return _super.apply(this, arguments);
  }

  _createClass(Inspector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var displayAvatar = attributes.displayAvatar,
          avatarInline = attributes.avatarInline,
          avatarPosition = attributes.avatarPosition,
          avatarAlign = attributes.avatarAlign,
          borderRadius = attributes.borderRadius,
          avatarOrder = attributes.avatarOrder,
          imageUrl = attributes.imageUrl,
          userInfoAlign = attributes.userInfoAlign,
          textAlign = attributes.textAlign,
          imagePosition = attributes.imagePosition,
          userNameColor = attributes.userNameColor,
          descriptionColor = attributes.descriptionColor,
          quoteColor = attributes.quoteColor,
          quoteSize = attributes.quoteSize,
          backgroundColor = attributes.backgroundColor,
          backgroundImageURL = attributes.backgroundImageURL,
          marginTop = attributes.marginTop,
          marginRight = attributes.marginRight,
          marginBottom = attributes.marginBottom,
          marginLeft = attributes.marginLeft,
          paddingTop = attributes.paddingTop,
          paddingRight = attributes.paddingRight,
          paddingBottom = attributes.paddingBottom,
          paddingLeft = attributes.paddingLeft,
          shadowColor = attributes.shadowColor,
          shadowHOffset = attributes.shadowHOffset,
          shadowVOffset = attributes.shadowVOffset,
          shadowSpread = attributes.shadowSpread,
          shadowBlur = attributes.shadowBlur,
          marginUnit = attributes.marginUnit,
          paddingUnit = attributes.paddingUnit,
          quoteSizeUnit = attributes.quoteSizeUnit,
          companyColor = attributes.companyColor,
          backgroundType = attributes.backgroundType,
          nameFontFamily = attributes.nameFontFamily,
          nameFontSize = attributes.nameFontSize,
          nameSizeUnit = attributes.nameSizeUnit,
          nameFontWeight = attributes.nameFontWeight,
          nameTextTransform = attributes.nameTextTransform,
          nameTextDecoration = attributes.nameTextDecoration,
          nameLetterSpacing = attributes.nameLetterSpacing,
          nameLetterSpacingUnit = attributes.nameLetterSpacingUnit,
          nameLineHeight = attributes.nameLineHeight,
          nameLineHeightUnit = attributes.nameLineHeightUnit,
          companyFontFamily = attributes.companyFontFamily,
          companyFontSize = attributes.companyFontSize,
          companySizeUnit = attributes.companySizeUnit,
          companyFontWeight = attributes.companyFontWeight,
          companyTextTransform = attributes.companyTextTransform,
          companyTextDecoration = attributes.companyTextDecoration,
          companyLetterSpacing = attributes.companyLetterSpacing,
          companyLetterSpacingUnit = attributes.companyLetterSpacingUnit,
          companyLineHeight = attributes.companyLineHeight,
          companyLineHeightUnit = attributes.companyLineHeightUnit,
          descriptionFontFamily = attributes.descriptionFontFamily,
          descriptionFontSize = attributes.descriptionFontSize,
          descriptionSizeUnit = attributes.descriptionSizeUnit,
          descriptionFontWeight = attributes.descriptionFontWeight,
          descriptionTextTransform = attributes.descriptionTextTransform,
          descriptionTextDecoration = attributes.descriptionTextDecoration,
          descriptionLetterSpacing = attributes.descriptionLetterSpacing,
          descriptionLetterSpacingUnit = attributes.descriptionLetterSpacingUnit,
          descriptionLineHeight = attributes.descriptionLineHeight,
          descriptionLineHeightUnit = attributes.descriptionLineHeightUnit,
          bgPosition = attributes.bgPosition,
          bgXPos = attributes.bgXPos,
          bgXPosUnit = attributes.bgXPosUnit,
          bgYPos = attributes.bgYPos,
          bgYPosUnit = attributes.bgYPosUnit,
          bgSize = attributes.bgSize,
          bgWidth = attributes.bgWidth,
          bgWidthUnit = attributes.bgWidthUnit,
          bgRepeat = attributes.bgRepeat,
          bgAttachment = attributes.bgAttachment;
      var QUOTE_SIZE_STEP = quoteSizeUnit === "em" ? 0.1 : 1;
      var QUOTE_SIZE_MAX = quoteSizeUnit === "em" ? 10 : 100;
      var NAME_SIZE_STEP = nameSizeUnit === "em" ? 0.1 : 1;
      var NAME_SIZE_MAX = nameSizeUnit === "em" ? 10 : 100;
      var NAME_SPACING_STEP = nameLetterSpacingUnit === "em" ? 0.1 : 1;
      var NAME_SPACING_MAX = nameLetterSpacingUnit === "em" ? 10 : 100;
      var NAME_LINE_HEIGHT_STEP = nameLineHeightUnit === "em" ? 0.1 : 1;
      var NAME_LINE_HEIGHT_MAX = nameLineHeightUnit === "em" ? 10 : 100;
      var COMPANY_SIZE_STEP = companySizeUnit === "em" ? 0.1 : 1;
      var COMPANY_SIZE_MAX = companySizeUnit === "em" ? 10 : 100;
      var COMPANY_SPACING_STEP = companyLetterSpacingUnit === "em" ? 0.1 : 1;
      var COMPANY_SPACING_MAX = companyLetterSpacingUnit === "em" ? 10 : 100;
      var COMPANY_LINE_HEIGHT_STEP = companyLineHeightUnit === "em" ? 0.1 : 1;
      var COMPANY_LINE_HEIGHT_MAX = companyLineHeightUnit === "em" ? 10 : 100;
      var DESCRIPTION_SIZE_STEP = descriptionSizeUnit === "em" ? 0.1 : 1;
      var DESCRIPTION_SIZE_MAX = descriptionSizeUnit === "em" ? 10 : 100;
      var DESCRIPTION_SPACING_STEP = descriptionLetterSpacingUnit === "em" ? 0.1 : 1;
      var DESCRIPTION_SPACING_MAX = descriptionLetterSpacingUnit === "em" ? 10 : 100;
      var DESCRIPTION_LINE_HEIGHT_STEP = descriptionLineHeightUnit === "em" ? 0.1 : 1;
      var DESCRIPTION_LINE_HEIGHT_MAX = descriptionLineHeightUnit === "em" ? 10 : 100;
      return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
        key: "controls"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Avatar"),
        initialOpen: false
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Display  Avatar",
        checked: displayAvatar,
        onChange: function onChange() {
          return setAttributes({
            displayAvatar: !displayAvatar
          });
        }
      }), displayAvatar && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Avatar Inline"),
        checked: avatarInline,
        onChange: function onChange() {
          return setAttributes({
            avatarInline: !avatarInline
          });
        }
      }), displayAvatar && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        id: "eb-testimonial-image-pos",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Image Position")
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
        id: "eb-testimonial-image-pos"
      }, _constants__WEBPACK_IMPORTED_MODULE_5__["IMG_POSITIONS"].map(function (item) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          isLarge: true,
          isSecondary: imagePosition !== item.value,
          isPrimary: imagePosition === item.value,
          onClick: function onClick() {
            return setAttributes({
              imagePosition: item.value
            });
          }
        }, item.label);
      }))), displayAvatar && imageUrl && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Image Setting")
      }, imageUrl && /*#__PURE__*/React.createElement(_util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_4__["default"], {
        imageUrl: imageUrl,
        onDeleteImage: function onDeleteImage() {
          return setAttributes({
            imageUrl: null
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Round Avatar"),
        checked: borderRadius === 50,
        onChange: function onChange() {
          return setAttributes({
            borderRadius: borderRadius === 50 ? 0 : 50
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Radius"),
        value: borderRadius,
        onChange: function onChange(newValue) {
          return setAttributes({
            borderRadius: newValue
          });
        },
        min: 0,
        max: 50
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Layout Settings"),
        initialOpen: false
      }, avatarInline && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("User Info Position")
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_5__["ALIGN_ITEMS"].map(function (item) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          isLarge: true,
          isSecondary: avatarPosition !== item.value,
          isPrimary: avatarPosition === item.value,
          onClick: function onClick() {
            return setAttributes({
              avatarPosition: item.value
            });
          }
        }, item.label);
      }))), !avatarInline && displayAvatar && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: avatarInline ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("User Info Align") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Image Align")
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_5__["ALIGN_ITEMS"].map(function (item) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          isLarge: true,
          isSecondary: avatarAlign !== item.value,
          isPrimary: avatarAlign === item.value,
          onClick: function onClick() {
            return setAttributes({
              avatarAlign: item.value
            });
          }
        }, item.label);
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Description Position")
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_5__["DESC_POSITIONS"].map(function (item) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          isLarge: true,
          isSecondary: avatarOrder !== item.value,
          isPrimary: avatarOrder === item.value,
          onClick: function onClick() {
            return setAttributes({
              avatarOrder: item.value
            });
          }
        }, item.label);
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("User Name Align")
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_ALIGN"].map(function (option) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          isLarge: true,
          isSecondary: textAlign !== option.value,
          isPrimary: textAlign === option.value,
          onClick: function onClick() {
            return setAttributes({
              textAlign: option.value
            });
          }
        }, option.label);
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("User Info Align")
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_5__["ALIGN_ITEMS"].map(function (item) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          isLarge: true,
          isSecondary: userInfoAlign !== item.value,
          isPrimary: userInfoAlign === item.value,
          onClick: function onClick() {
            return setAttributes({
              userInfoAlign: item.value
            });
          }
        }, item.label);
      })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Settings"),
        initialOpen: false
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Types")
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_5__["BG_TYPES"].map(function (type) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          isPrimary: backgroundType === type.value,
          isSecondary: backgroundType !== type.value,
          onClick: function onClick() {
            return setAttributes({
              backgroundType: type.value
            });
          }
        }, type.label);
      }))), backgroundType === "image" && !backgroundImageURL && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
        onSelect: function onSelect(media) {
          return setAttributes({
            backgroundImageURL: media.url
          });
        },
        type: "image",
        value: backgroundImageURL,
        render: function render(_ref) {
          var open = _ref.open;
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            className: "eb-testimonial-background-upload components-button",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Upload Background Image"),
            icon: "format-image",
            onClick: open
          });
        }
      }), backgroundType === "image" && backgroundImageURL && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Image")
      }, /*#__PURE__*/React.createElement(_util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_4__["default"], {
        imageUrl: backgroundImageURL,
        onDeleteImage: function onDeleteImage() {
          return setAttributes({
            backgroundImageURL: null
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Position"),
        value: bgPosition,
        options: _constants__WEBPACK_IMPORTED_MODULE_5__["BACKGROUND_POSITION"],
        onChange: function onChange(bgPosition) {
          return setAttributes({
            bgPosition: bgPosition
          });
        }
      }), bgPosition === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: bgXPosUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(bgXPosUnit) {
          return setAttributes({
            bgXPosUnit: bgXPosUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("X Position"),
        value: bgXPos,
        onChange: function onChange(bgXPos) {
          return setAttributes({
            bgXPos: bgXPos
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: bgYPosUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(bgYPosUnit) {
          return setAttributes({
            bgYPosUnit: bgYPosUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Y Position"),
        value: bgYPos,
        onChange: function onChange(bgYPos) {
          return setAttributes({
            bgYPos: bgYPos
          });
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Size"),
        value: bgSize,
        options: _constants__WEBPACK_IMPORTED_MODULE_5__["BACKGROUND_SIZE"],
        onChange: function onChange(bgSize) {
          return setAttributes({
            bgSize: bgSize
          });
        }
      }), bgSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: bgWidthUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(bgWidthUnit) {
          return setAttributes({
            bgWidthUnit: bgWidthUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Width"),
        value: bgWidth,
        onChange: function onChange(bgWidth) {
          return setAttributes({
            bgWidth: bgWidth
          });
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Repeat"),
        value: bgRepeat,
        options: _constants__WEBPACK_IMPORTED_MODULE_5__["BACKGROUND_REPEAT"],
        onChange: function onChange(bgRepeat) {
          return setAttributes({
            bgRepeat: bgRepeat
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Attachment"),
        value: bgAttachment,
        options: _constants__WEBPACK_IMPORTED_MODULE_5__["BACKGROUND_ATTACHMENT"],
        onChange: function onChange(bgAttachment) {
          return setAttributes({
            bgAttachment: bgAttachment
          });
        }
      })), backgroundType === "color" && /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Color"),
        color: backgroundColor,
        onChange: function onChange(backgroundColor) {
          return setAttributes({
            backgroundColor: backgroundColor
          });
        }
      })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Colors"),
        initialOpen: false,
        colorSettings: [{
          value: userNameColor,
          onChange: function onChange(userNameColor) {
            return setAttributes({
              userNameColor: userNameColor
            });
          },
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Username")
        }, {
          value: companyColor,
          onChange: function onChange(companyColor) {
            return setAttributes({
              companyColor: companyColor
            });
          },
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Company")
        }, {
          value: descriptionColor,
          onChange: function onChange(descriptionColor) {
            return setAttributes({
              descriptionColor: descriptionColor
            });
          },
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Description")
        }, {
          value: quoteColor,
          onChange: function onChange(quoteColor) {
            return setAttributes({
              quoteColor: quoteColor
            });
          },
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Quote")
        }]
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography"),
        initialOpen: false
      }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: quoteSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(quoteSizeUnit) {
          return setAttributes({
            quoteSizeUnit: quoteSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Quote Size"),
        value: quoteSize,
        onChange: function onChange(quoteSize) {
          return setAttributes({
            quoteSize: quoteSize
          });
        },
        step: QUOTE_SIZE_STEP,
        min: 0,
        max: QUOTE_SIZE_MAX
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Username"),
        className: "eb-typography-base"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: "eb-typography-dropdown",
        contentClassName: "my-popover-content-classname",
        position: "bottom right",
        renderToggle: function renderToggle(_ref2) {
          var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            isSmall: true,
            onClick: onToggle,
            "aria-expanded": isOpen,
            icon: "edit"
          });
        },
        renderContent: function renderContent() {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              padding: "1rem"
            }
          }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
            value: nameFontFamily,
            onChange: function onChange(nameFontFamily) {
              return setAttributes({
                nameFontFamily: nameFontFamily
              });
            }
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: nameSizeUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "%",
              value: "%"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(nameSizeUnit) {
              return setAttributes({
                nameSizeUnit: nameSizeUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
            value: nameFontSize,
            onChange: function onChange(nameFontSize) {
              return setAttributes({
                nameFontSize: nameFontSize
              });
            },
            step: NAME_SIZE_STEP,
            min: 0,
            max: NAME_SIZE_MAX
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight"),
            value: nameFontWeight,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["FONT_WEIGHTS"],
            onChange: function onChange(nameFontWeight) {
              return setAttributes({
                nameFontWeight: nameFontWeight
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Transform"),
            value: nameTextTransform,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_TRANSFORM"],
            onChange: function onChange(nameTextTransform) {
              return setAttributes({
                nameTextTransform: nameTextTransform
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Decoration"),
            value: nameTextDecoration,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DECORATION"],
            onChange: function onChange(nameTextDecoration) {
              return setAttributes({
                nameTextDecoration: nameTextDecoration
              });
            }
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: nameLetterSpacingUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(nameLetterSpacingUnit) {
              return setAttributes({
                nameLetterSpacingUnit: nameLetterSpacingUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Letter Spacing"),
            value: nameLetterSpacing,
            onChange: function onChange(nameLetterSpacing) {
              return setAttributes({
                nameLetterSpacing: nameLetterSpacing
              });
            },
            min: 0,
            max: NAME_SPACING_MAX,
            step: NAME_SPACING_STEP
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: nameLineHeightUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(nameLineHeightUnit) {
              return setAttributes({
                nameLineHeightUnit: nameLineHeightUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
            value: nameLineHeight,
            onChange: function onChange(nameLineHeight) {
              return setAttributes({
                nameLineHeight: nameLineHeight
              });
            },
            min: 0,
            max: NAME_LINE_HEIGHT_MAX,
            step: NAME_LINE_HEIGHT_STEP
          }));
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Company"),
        className: "eb-typography-base"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: "eb-typography-dropdown",
        contentClassName: "my-popover-content-classcompany",
        position: "bottom right",
        renderToggle: function renderToggle(_ref3) {
          var isOpen = _ref3.isOpen,
              onToggle = _ref3.onToggle;
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            isSmall: true,
            onClick: onToggle,
            "aria-expanded": isOpen,
            icon: "edit"
          });
        },
        renderContent: function renderContent() {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              padding: "1rem"
            }
          }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
            value: companyFontFamily,
            onChange: function onChange(companyFontFamily) {
              return setAttributes({
                companyFontFamily: companyFontFamily
              });
            }
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: companySizeUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "%",
              value: "%"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(companySizeUnit) {
              return setAttributes({
                companySizeUnit: companySizeUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
            value: companyFontSize,
            onChange: function onChange(companyFontSize) {
              return setAttributes({
                companyFontSize: companyFontSize
              });
            },
            step: COMPANY_SIZE_STEP,
            min: 0,
            max: COMPANY_SIZE_MAX
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight"),
            value: companyFontWeight,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["FONT_WEIGHTS"],
            onChange: function onChange(companyFontWeight) {
              return setAttributes({
                companyFontWeight: companyFontWeight
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Transform"),
            value: companyTextTransform,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_TRANSFORM"],
            onChange: function onChange(companyTextTransform) {
              return setAttributes({
                companyTextTransform: companyTextTransform
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Decoration"),
            value: companyTextDecoration,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DECORATION"],
            onChange: function onChange(companyTextDecoration) {
              return setAttributes({
                companyTextDecoration: companyTextDecoration
              });
            }
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: companyLetterSpacingUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(companyLetterSpacingUnit) {
              return setAttributes({
                companyLetterSpacingUnit: companyLetterSpacingUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Letter Spacing"),
            value: companyLetterSpacing,
            onChange: function onChange(companyLetterSpacing) {
              return setAttributes({
                companyLetterSpacing: companyLetterSpacing
              });
            },
            min: 0,
            max: COMPANY_SPACING_MAX,
            step: COMPANY_SPACING_STEP
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: companyLineHeightUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(companyLineHeightUnit) {
              return setAttributes({
                companyLineHeightUnit: companyLineHeightUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
            value: companyLineHeight,
            onChange: function onChange(companyLineHeight) {
              return setAttributes({
                companyLineHeight: companyLineHeight
              });
            },
            min: 0,
            max: COMPANY_LINE_HEIGHT_MAX,
            step: COMPANY_LINE_HEIGHT_STEP
          }));
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Description"),
        className: "eb-typography-base"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: "eb-typography-dropdown",
        contentClassName: "my-popover-content-classdescription",
        position: "bottom right",
        renderToggle: function renderToggle(_ref4) {
          var isOpen = _ref4.isOpen,
              onToggle = _ref4.onToggle;
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            isSmall: true,
            onClick: onToggle,
            "aria-expanded": isOpen,
            icon: "edit"
          });
        },
        renderContent: function renderContent() {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              padding: "1rem"
            }
          }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
            value: descriptionFontFamily,
            onChange: function onChange(descriptionFontFamily) {
              return setAttributes({
                descriptionFontFamily: descriptionFontFamily
              });
            }
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: descriptionSizeUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "%",
              value: "%"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(descriptionSizeUnit) {
              return setAttributes({
                descriptionSizeUnit: descriptionSizeUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
            value: descriptionFontSize,
            onChange: function onChange(descriptionFontSize) {
              return setAttributes({
                descriptionFontSize: descriptionFontSize
              });
            },
            step: DESCRIPTION_SIZE_STEP,
            min: 0,
            max: DESCRIPTION_SIZE_MAX
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight"),
            value: descriptionFontWeight,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["FONT_WEIGHTS"],
            onChange: function onChange(descriptionFontWeight) {
              return setAttributes({
                descriptionFontWeight: descriptionFontWeight
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Transform"),
            value: descriptionTextTransform,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_TRANSFORM"],
            onChange: function onChange(descriptionTextTransform) {
              return setAttributes({
                descriptionTextTransform: descriptionTextTransform
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Decoration"),
            value: descriptionTextDecoration,
            options: _constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_DECORATION"],
            onChange: function onChange(descriptionTextDecoration) {
              return setAttributes({
                descriptionTextDecoration: descriptionTextDecoration
              });
            }
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: descriptionLetterSpacingUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(descriptionLetterSpacingUnit) {
              return setAttributes({
                descriptionLetterSpacingUnit: descriptionLetterSpacingUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Letter Spacing"),
            value: descriptionLetterSpacing,
            onChange: function onChange(descriptionLetterSpacing) {
              return setAttributes({
                descriptionLetterSpacing: descriptionLetterSpacing
              });
            },
            min: 0,
            max: DESCRIPTION_SPACING_MAX,
            step: DESCRIPTION_SPACING_STEP
          }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            selectedUnit: descriptionLineHeightUnit,
            unitTypes: [{
              label: "px",
              value: "px"
            }, {
              label: "em",
              value: "em"
            }],
            onClick: function onClick(descriptionLineHeightUnit) {
              return setAttributes({
                descriptionLineHeightUnit: descriptionLineHeightUnit
              });
            }
          }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
            value: descriptionLineHeight,
            onChange: function onChange(descriptionLineHeight) {
              return setAttributes({
                descriptionLineHeight: descriptionLineHeight
              });
            },
            min: 0,
            max: DESCRIPTION_LINE_HEIGHT_MAX,
            step: DESCRIPTION_LINE_HEIGHT_STEP
          }));
        }
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box Shadow"),
        initialOpen: false
      }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Color"),
        color: shadowColor,
        onChange: function onChange(shadowColor) {
          return setAttributes({
            shadowColor: shadowColor
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal Offset"),
        value: shadowHOffset,
        allowReset: true,
        onChange: function onChange(shadowHOffset) {
          return setAttributes({
            shadowHOffset: shadowHOffset
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical Offset"),
        value: shadowVOffset,
        allowReset: true,
        onChange: function onChange(shadowVOffset) {
          return setAttributes({
            shadowVOffset: shadowVOffset
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Blur"),
        value: shadowBlur,
        allowReset: true,
        onChange: function onChange(shadowBlur) {
          return setAttributes({
            shadowBlur: shadowBlur
          });
        },
        min: 0,
        max: 20
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Spread"),
        value: shadowSpread,
        allowReset: true,
        onChange: function onChange(shadowSpread) {
          return setAttributes({
            shadowSpread: shadowSpread
          });
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin & Padding"),
        initialOpen: false
      }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: marginUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(marginUnit) {
          return setAttributes({
            marginUnit: marginUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin"),
        top: marginTop,
        right: marginRight,
        bottom: marginBottom,
        left: marginLeft,
        onChange: function onChange(_ref5) {
          var top = _ref5.top,
              right = _ref5.right,
              bottom = _ref5.bottom,
              left = _ref5.left;
          return setAttributes({
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: paddingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(paddingUnit) {
          return setAttributes({
            paddingUnit: paddingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
        top: paddingTop,
        right: paddingRight,
        bottom: paddingBottom,
        left: paddingLeft,
        onChange: function onChange(_ref6) {
          var top = _ref6.top,
              right = _ref6.right,
              bottom = _ref6.bottom,
              left = _ref6.left;
          return setAttributes({
            paddingTop: top,
            paddingRight: right,
            paddingBottom: bottom,
            paddingLeft: left
          });
        }
      })));
    }
  }]);

  return Inspector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/**
 * WordPress dependencies
 */
var RichText = wp.blockEditor.RichText;
/**
 * Internal dependencies
 */



var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var fontSize = attributes.fontSize,
      displayAvatar = attributes.displayAvatar,
      avatarInline = attributes.avatarInline,
      avatarPosition = attributes.avatarPosition,
      avatarAlign = attributes.avatarAlign,
      borderRadius = attributes.borderRadius,
      avatarOrder = attributes.avatarOrder,
      imageUrl = attributes.imageUrl,
      userName = attributes.userName,
      companyName = attributes.companyName,
      description = attributes.description,
      userInfoAlign = attributes.userInfoAlign,
      textAlign = attributes.textAlign,
      userInfoPos = attributes.userInfoPos,
      imagePosition = attributes.imagePosition,
      userNameColor = attributes.userNameColor,
      descriptionColor = attributes.descriptionColor,
      quoteColor = attributes.quoteColor,
      quoteSize = attributes.quoteSize,
      backgroundColor = attributes.backgroundColor,
      backgroundImageURL = attributes.backgroundImageURL,
      backgroundType = attributes.backgroundType,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      shadowColor = attributes.shadowColor,
      shadowHOffset = attributes.shadowHOffset,
      shadowVOffset = attributes.shadowVOffset,
      shadowSpread = attributes.shadowSpread,
      shadowBlur = attributes.shadowBlur,
      marginUnit = attributes.marginUnit,
      paddingUnit = attributes.paddingUnit,
      quoteSizeUnit = attributes.quoteSizeUnit,
      companyColor = attributes.companyColor,
      nameFontFamily = attributes.nameFontFamily,
      nameFontSize = attributes.nameFontSize,
      nameSizeUnit = attributes.nameSizeUnit,
      nameFontWeight = attributes.nameFontWeight,
      nameTextTransform = attributes.nameTextTransform,
      nameTextDecoration = attributes.nameTextDecoration,
      nameLetterSpacing = attributes.nameLetterSpacing,
      nameLetterSpacingUnit = attributes.nameLetterSpacingUnit,
      nameLineHeight = attributes.nameLineHeight,
      nameLineHeightUnit = attributes.nameLineHeightUnit,
      companyFontFamily = attributes.companyFontFamily,
      companyFontSize = attributes.companyFontSize,
      companySizeUnit = attributes.companySizeUnit,
      companyFontWeight = attributes.companyFontWeight,
      companyTextTransform = attributes.companyTextTransform,
      companyTextDecoration = attributes.companyTextDecoration,
      companyLetterSpacing = attributes.companyLetterSpacing,
      companyLetterSpacingUnit = attributes.companyLetterSpacingUnit,
      companyLineHeight = attributes.companyLineHeight,
      companyLineHeightUnit = attributes.companyLineHeightUnit,
      descriptionFontFamily = attributes.descriptionFontFamily,
      descriptionFontSize = attributes.descriptionFontSize,
      descriptionSizeUnit = attributes.descriptionSizeUnit,
      descriptionFontWeight = attributes.descriptionFontWeight,
      descriptionTextTransform = attributes.descriptionTextTransform,
      descriptionTextDecoration = attributes.descriptionTextDecoration,
      descriptionLetterSpacing = attributes.descriptionLetterSpacing,
      descriptionLetterSpacingUnit = attributes.descriptionLetterSpacingUnit,
      descriptionLineHeight = attributes.descriptionLineHeight,
      descriptionLineHeightUnit = attributes.descriptionLineHeightUnit,
      bgPosition = attributes.bgPosition,
      bgXPos = attributes.bgXPos,
      bgXPosUnit = attributes.bgXPosUnit,
      bgYPos = attributes.bgYPos,
      bgYPosUnit = attributes.bgYPosUnit,
      bgSize = attributes.bgSize,
      bgWidth = attributes.bgWidth,
      bgWidthUnit = attributes.bgWidthUnit,
      bgRepeat = attributes.bgRepeat,
      bgAttachment = attributes.bgAttachment;
  var containerStyle = {
    backgroundImage: backgroundType === "image" && backgroundImageURL ? "url('".concat(backgroundImageURL, "')") : "none",
    backgroundColor: backgroundColor || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BACKGROUND"],
    backgroundPosition: bgPosition === "custom" ? "".concat(bgXPos).concat(bgXPosUnit, " ").concat(bgYPos).concat(bgYPosUnit) : bgPosition,
    backgroundSize: bgSize === "custom" ? bgWidth + bgWidthUnit : bgSize,
    backgroundRepeat: bgRepeat,
    backgroundAttachment: bgAttachment,
    margin: "".concat(marginTop || 0).concat(marginUnit, " ").concat(marginRight || 0).concat(marginUnit, " ").concat(marginBottom || 0).concat(marginUnit, " ").concat(marginLeft || 0).concat(marginUnit),
    padding: "".concat(paddingTop || 10).concat(paddingUnit, " ").concat(paddingRight || 10).concat(paddingUnit, " ").concat(paddingBottom || 10).concat(paddingUnit, " ").concat(paddingLeft || 10).concat(paddingUnit),
    boxShadow: "".concat(shadowHOffset || 0, "px ").concat(shadowVOffset || 0, "px ").concat(shadowBlur || 0, "px ").concat(shadowSpread || 0, "px ").concat(shadowColor || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SHADOW_COLOR"])
  };
  var avatarContainerStyle = {
    order: avatarOrder,
    justifyContent: avatarPosition,
    alignItems: avatarAlign,
    fontSize: "".concat(fontSize, "px"),
    flexDirection: avatarInline ? "row" : "column"
  };
  var imageContainerStyle = {
    order: imagePosition,
    display: displayAvatar && imageUrl ? "block" : "none"
  };
  var userInfoStyle = {
    textAlign: textAlign,
    justifyContent: userInfoPos,
    alignSelf: userInfoAlign
  };
  var userNameStyle = {
    fontSize: "".concat(nameFontSize || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_NAME_SIZE"]).concat(nameSizeUnit),
    fontFamily: nameFontFamily,
    fontWeight: nameFontWeight,
    textTransform: nameTextTransform,
    textDecoration: nameTextDecoration,
    letterSpacing: nameLetterSpacing ? "".concat(nameLetterSpacing).concat(nameLetterSpacingUnit) : undefined,
    lineHeight: nameLineHeight ? "".concat(nameLineHeight).concat(nameLineHeightUnit) : undefined,
    color: userNameColor || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_NAME_COLOR"],
    margin: 0
  };
  var companyNameStyle = {
    fontSize: "".concat(companyFontSize || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_COMPANY_SIZE"]).concat(companySizeUnit),
    fontFamily: companyFontFamily,
    fontWeight: companyFontWeight,
    textTransform: companyTextTransform,
    textDecoration: companyTextDecoration,
    letterSpacing: companyLetterSpacing ? "".concat(companyLetterSpacing).concat(companyLetterSpacingUnit) : undefined,
    lineHeight: companyLineHeight ? "".concat(companyLineHeight).concat(companyLineHeightUnit) : undefined,
    color: companyColor || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_COMPANY_COLOR"],
    margin: 0
  };
  var descriptionStyle = {
    fontSize: "".concat(descriptionFontSize || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DESCRIPTION_SIZE"]).concat(descriptionSizeUnit),
    fontFamily: descriptionFontFamily,
    fontWeight: descriptionFontWeight,
    textTransform: descriptionTextTransform,
    textDecoration: descriptionTextDecoration,
    letterSpacing: descriptionLetterSpacing ? "".concat(descriptionLetterSpacing).concat(descriptionLetterSpacingUnit) : undefined,
    lineHeight: descriptionLineHeight ? "".concat(descriptionLineHeight).concat(descriptionLineHeightUnit) : undefined,
    color: descriptionColor || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DESCRIPTION_COLOR"],
    margin: 0,
    paddingRight: 20
  };
  var quoteStyle = {
    color: quoteColor || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_QUOTE_COLOR"],
    fontSize: "".concat(quoteSize || _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_QUOTE_SIZE"]).concat(quoteSizeUnit)
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-container",
    style: containerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-avatar-container ".concat(avatarInline ? "avatar-inline" : "avatar-basic", " "),
    style: avatarContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-container",
    style: imageContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(".concat(imageUrl, ")"),
      borderRadius: "".concat(borderRadius, "%")
    },
    className: "eb-avatar-style"
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-userinfo-container",
    style: userInfoStyle
  }, /*#__PURE__*/React.createElement(RichText.Content, {
    tagName: "p",
    className: "username-one",
    value: userName,
    style: userNameStyle
  }), /*#__PURE__*/React.createElement(RichText.Content, {
    tagName: "p",
    className: "company-one",
    value: companyName,
    style: companyNameStyle
  }))), /*#__PURE__*/React.createElement("div", {
    className: "eb-description-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fas fa-quote-left eb-testimonial-quote-style",
    style: quoteStyle
  }), /*#__PURE__*/React.createElement(RichText.Content, {
    tagName: "p",
    className: "description-one",
    value: description,
    style: descriptionStyle
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./util/color-control/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;


var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(color),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    setBgColor(color);
  }, [color]);

  var _onChangeComplete = function onChangeComplete(_ref2) {
    var rgb = _ref2.rgb,
        hex = _ref2.hex;
    var color = rgb ? "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")") : hex;
    onChange(color);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: color || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 32,
          width: 32,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": color || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: color,
        onChangeComplete: function onChangeComplete(color) {
          return _onChangeComplete(color);
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    onClick: function onClick() {
      return onChange(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control/index.js":
/*!******************************************!*\
  !*** ./util/dimensions-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/dimensions-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DimensionsControl = /*#__PURE__*/function (_Component) {
  _inherits(DimensionsControl, _Component);

  var _super = _createSuper(DimensionsControl);

  function DimensionsControl() {
    var _this;

    _classCallCheck(this, DimensionsControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: _this.props.top || 0,
      right: _this.props.right || 0,
      bottom: _this.props.bottom || 0,
      left: _this.props.left || 0,
      isLinked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      return _this.setState({
        isLinked: !_this.state.isLinked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left,
          isLinked = _this$state.isLinked;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = parseInt(value) || 0;

        _this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          var _this$state2 = _this.state,
              top = _this$state2.top,
              right = _this$state2.right,
              bottom = _this$state2.bottom,
              left = _this$state2.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      } else {
        _this.setState(_defineProperty({}, name, parseInt(value) || 0), function () {
          var _this$state3 = _this.state,
              top = _this$state3.top,
              right = _this$state3.right,
              bottom = _this$state3.bottom,
              left = _this$state3.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      }
    });

    return _this;
  }

  _createClass(DimensionsControl, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          top = _this$state4.top,
          right = _this$state4.right,
          bottom = _this$state4.bottom,
          left = _this$state4.left,
          isLinked = _this$state4.isLinked;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-label"
      }, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "top",
        value: top || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "right",
        value: right || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "left",
        value: left || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
        onClick: this.onButtonClick
      }))));
    }
  }]);

  return DimensionsControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DimensionsControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionsControl);

/***/ }),

/***/ "./util/image-avatar/ImageAvater.js":
/*!******************************************!*\
  !*** ./util/image-avatar/ImageAvater.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./util/image-avatar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var ImageAvater = function ImageAvater(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;
  return /*#__PURE__*/React.createElement("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button",
    onClick: function onClick() {
      return onDeleteImage();
    }
  }, "Delete"));
};

ImageAvater.propTypes = {
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onDeleteImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageAvater);

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
}];


/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

UnitControl.propTypes = {
  selectedUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  unitTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map