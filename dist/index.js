/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

var _window$EBTestimonial = window.EBTestimonialControls,
  generateDimensionsAttributes = _window$EBTestimonial.generateDimensionsAttributes,
  generateTypographyAttributes = _window$EBTestimonial.generateTypographyAttributes,
  generateBackgroundAttributes = _window$EBTestimonial.generateBackgroundAttributes,
  generateBorderShadowAttributes = _window$EBTestimonial.generateBorderShadowAttributes,
  generateResponsiveRangeAttributes = _window$EBTestimonial.generateResponsiveRangeAttributes;

var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  blockMeta: {
    type: "object"
  },
  avaterContainerFontSize: {
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
    selector: ".eb-testimonial-username",
    source: "html",
    "default": "John Doe"
  },
  companyName: {
    selector: ".eb-testimonial-company",
    source: "html",
    "default": "Company Name"
  },
  description: {
    selector: ".eb-testimonial-description",
    source: "html",
    "default": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  descTextAlign: {
    type: "string",
    "default": "center"
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
    type: "string",
    "default": "#7967ff"
  },
  descriptionColor: {
    type: "string",
    "default": "#4a5059"
  },
  enableQuote: {
    type: "boolean",
    "default": true
  },
  quoteColor: {
    type: "string",
    "default": "#edf1f7"
  },
  quoteSize: {
    type: "number",
    "default": 60
  },
  quoteHorizontalPosition: {
    type: "string",
    "default": "flex-start"
  },
  quoteVerticalPosition: {
    type: "number",
    "default": 1
  },
  userInfoAlign: {
    type: "string",
    "default": "center"
  },
  //Margin
  linkedMargin: {
    type: "boolean",
    "default": false
  },
  //Padding
  linkedPadding: {
    type: "boolean",
    "default": false
  },
  marginUnit: {
    type: "string",
    "default": "px"
  },
  tabMarginUnit: {
    type: "string",
    "default": "px"
  },
  mobMarginUnit: {
    type: "string",
    "default": "px"
  },
  paddingUnit: {
    type: "string",
    "default": "px"
  },
  tabPaddingUnit: {
    type: "string",
    "default": "px"
  },
  mobPaddingUnit: {
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
    type: "string",
    "default": "#4a5059"
  },
  bgPositon: {
    type: "string"
  }
}, generateDimensionsAttributes("margin", {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10
})), generateDimensionsAttributes("padding", {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10
})), generateTypographyAttributes(Object.values({
  username: "username",
  company: "company",
  description: "description"
}))), generateBorderShadowAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WrpBdShadow, {})), generateBackgroundAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.TestimonialWrapBg, {
  defaultFillColor: "#fff",
  defaultBgGradient: "linear-gradient(45deg,#fff,#fff)"
})), generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.QUOTE_SIZE, {
  defaultRange: 60
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALIGN_ITEMS": () => (/* binding */ ALIGN_ITEMS),
/* harmony export */   "ALIGN_ITEMS_VERTICAL": () => (/* binding */ ALIGN_ITEMS_VERTICAL),
/* harmony export */   "BACKGROUND_ATTACHMENT": () => (/* binding */ BACKGROUND_ATTACHMENT),
/* harmony export */   "BACKGROUND_POSITION": () => (/* binding */ BACKGROUND_POSITION),
/* harmony export */   "BACKGROUND_REPEAT": () => (/* binding */ BACKGROUND_REPEAT),
/* harmony export */   "BACKGROUND_SIZE": () => (/* binding */ BACKGROUND_SIZE),
/* harmony export */   "BG_TYPES": () => (/* binding */ BG_TYPES),
/* harmony export */   "COLUMN_NUMBERS": () => (/* binding */ COLUMN_NUMBERS),
/* harmony export */   "DESC_POSITIONS": () => (/* binding */ DESC_POSITIONS),
/* harmony export */   "FONT_WEIGHTS": () => (/* binding */ FONT_WEIGHTS),
/* harmony export */   "IMG_POSITIONS": () => (/* binding */ IMG_POSITIONS),
/* harmony export */   "QUOTE_SIZE": () => (/* binding */ QUOTE_SIZE),
/* harmony export */   "TEXT_ALIGN": () => (/* binding */ TEXT_ALIGN),
/* harmony export */   "TEXT_DECORATION": () => (/* binding */ TEXT_DECORATION),
/* harmony export */   "TEXT_TRANSFORM": () => (/* binding */ TEXT_TRANSFORM),
/* harmony export */   "TestimonialWrapBg": () => (/* binding */ TestimonialWrapBg),
/* harmony export */   "UNIT_TYPES": () => (/* binding */ UNIT_TYPES),
/* harmony export */   "WrpBdShadow": () => (/* binding */ WrpBdShadow)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var WrpBdShadow = "wrp_";
var TestimonialWrapBg = "wrp_";
var QUOTE_SIZE = "quoteSize";
var COLUMN_NUMBERS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("One", "essential-blocks"),
  value: 1
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Two", "essential-blocks"),
  value: 2
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Three", "essential-blocks"),
  value: 3
}];
var DESC_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "essential-blocks"),
  value: 1
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "essential-blocks"),
  value: 0
}];
var TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}];
var ALIGN_ITEMS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "flex-end"
}];
var UNIT_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PX", "essential-blocks"),
  value: "px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EM", "essential-blocks"),
  value: "em"
}];
var ALIGN_ITEMS_VERTICAL = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Middle", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "essential-blocks"),
  value: "flex-end"
}];
var IMG_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Before", "essential-blocks"),
  value: 0
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("After", "essential-blocks"),
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "essential-blocks"),
  value: "lowercase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "essential-blocks"),
  value: "capitalize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "essential-blocks"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lighter", "essential-blocks"),
  value: "lighter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "essential-blocks"),
  value: "normal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bold", "essential-blocks"),
  value: "bold"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bolder", "essential-blocks"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "essential-blocks"),
  value: "overline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "essential-blocks"),
  value: "line-through"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "essential-blocks"),
  value: "underline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline Oveline", "essential-blocks"),
  value: "underline overline"
}];
var BACKGROUND_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "essential-blocks"),
  value: "auto"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cover", "essential-blocks"),
  value: "cover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contain", "essential-blocks"),
  value: "contain"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "essential-blocks"),
  value: "custom"
}];
var BACKGROUND_REPEAT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: ""
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No-repeat", "essential-blocks"),
  value: "no-repeat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat", "essential-blocks"),
  value: "repeat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat-x", "essential-blocks"),
  value: "repeat-x"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat-y", "essential-blocks"),
  value: "repeat-y"
}];
var BACKGROUND_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center Center", "essential-blocks"),
  value: "center center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center Left", "essential-blocks"),
  value: "center left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center Right", "essential-blocks"),
  value: "center right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Center", "essential-blocks"),
  value: "top center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Left", "essential-blocks"),
  value: "top left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Right", "essential-blocks"),
  value: "top right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Center", "essential-blocks"),
  value: "bottom center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Left", "essential-blocks"),
  value: "bottom left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Right", "essential-blocks"),
  value: "bottom right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "essential-blocks"),
  value: "custom"
}];
var BACKGROUND_ATTACHMENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fixed", "essential-blocks"),
  value: "fixed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scroll", "essential-blocks"),
  value: "scroll"
}];

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _quoteIconSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quoteIconSVG */ "./src/quoteIconSVG.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * WordPress dependencies
 */



var Deprecated = [{
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  supports: {
    align: ["wide", "full"]
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var blockId = attributes.blockId,
      avatarInline = attributes.avatarInline,
      userName = attributes.userName,
      companyName = attributes.companyName,
      description = attributes.description,
      enableQuote = attributes.enableQuote;
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-testimonial-wrapper ".concat(blockId),
      "data-id": blockId
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-testimonial-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-avatar-container ".concat(avatarInline ? "avatar-inline" : "avatar-basic", " ")
    }, /*#__PURE__*/React.createElement("div", {
      className: "image-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-avatar-style"
    })), /*#__PURE__*/React.createElement("div", {
      className: "eb-userinfo-container"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "eb-testimonial-username",
      value: userName
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "eb-testimonial-company",
      value: companyName
    }))), /*#__PURE__*/React.createElement("div", {
      className: "eb-description-container"
    }, enableQuote && /*#__PURE__*/React.createElement("div", {
      className: "eb-testimonial-quote-style"
    }, /*#__PURE__*/React.createElement(_quoteIconSVG__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "eb-testimonial-description",
      value: description
    }))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _quoteIconSVG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quoteIconSVG */ "./src/quoteIconSVG.js");
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


var _window$EBTestimonial = window.EBTestimonialControls,
  softMinifyCssStrings = _window$EBTestimonial.softMinifyCssStrings,
  generateBackgroundControlStyles = _window$EBTestimonial.generateBackgroundControlStyles,
  generateDimensionsControlStyles = _window$EBTestimonial.generateDimensionsControlStyles,
  generateTypographyStyles = _window$EBTestimonial.generateTypographyStyles,
  generateResponsiveRangeStyles = _window$EBTestimonial.generateResponsiveRangeStyles,
  generateBorderShadowStyles = _window$EBTestimonial.generateBorderShadowStyles,
  duplicateBlockIdFix = _window$EBTestimonial.duplicateBlockIdFix;


var Edit = function Edit(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    className = props.className,
    clientId = props.clientId,
    isSelected = props.isSelected;
  var resOption = attributes.resOption,
    blockId = attributes.blockId,
    blockMeta = attributes.blockMeta,
    avaterContainerFontSize = attributes.avaterContainerFontSize,
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
    descTextAlign = attributes.descTextAlign,
    userInfoAlign = attributes.userInfoAlign,
    textAlign = attributes.textAlign,
    userInfoPos = attributes.userInfoPos,
    imagePosition = attributes.imagePosition,
    userNameColor = attributes.userNameColor,
    descriptionColor = attributes.descriptionColor,
    enableQuote = attributes.enableQuote,
    quoteColor = attributes.quoteColor,
    quoteSize = attributes.quoteSize,
    quoteSizeUnit = attributes.quoteSizeUnit,
    companyColor = attributes.companyColor,
    quoteHorizontalPosition = attributes.quoteHorizontalPosition,
    quoteVerticalPosition = attributes.quoteVerticalPosition,
    classHook = attributes.classHook;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var BLOCK_PREFIX = "eb-testimonial";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select,
      clientId: clientId
    });
  }, []);

  //Generate Author Typography
  var _generateTypographySt = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: "username"
    }),
    usernameTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
    usernameTypoStylesTab = _generateTypographySt.typoStylesTab,
    usernameTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  //Generate Comapny Typography
  var _generateTypographySt2 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: "company"
    }),
    companyTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
    companyTypoStylesTab = _generateTypographySt2.typoStylesTab,
    companyTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  //Generate Description Typography
  var _generateTypographySt3 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: "description"
    }),
    descriptionTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
    descriptionTypoStylesTab = _generateTypographySt3.typoStylesTab,
    descriptionTypoStylesMobile = _generateTypographySt3.typoStylesMobile;

  //Generate Margin
  var _generateDimensionsCo = generateDimensionsControlStyles({
      controlName: "margin",
      styleFor: "margin",
      attributes: attributes
    }),
    wrapperMarginStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
    wrapperMarginStylesTab = _generateDimensionsCo.dimensionStylesTab,
    wrapperMarginStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

  //Generate Padding
  var _generateDimensionsCo2 = generateDimensionsControlStyles({
      controlName: "padding",
      styleFor: "padding",
      attributes: attributes
    }),
    wrapperPaddingStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
    wrapperPaddingStylesTab = _generateDimensionsCo2.dimensionStylesTab,
    wrapperPaddingStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

  //Generate Border Shadow
  var _generateBorderShadow = generateBorderShadowStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.WrpBdShadow,
      attributes: attributes
      // noShadow: true,
      // noBorder: true,
    }),
    bdShadowStyesDesktop = _generateBorderShadow.styesDesktop,
    bdShadowStyesTab = _generateBorderShadow.styesTab,
    bdShadowStyesMobile = _generateBorderShadow.styesMobile,
    bdShadowStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
    bdShadowStylesHoverTab = _generateBorderShadow.stylesHoverTab,
    bdShadowStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
    bdShadowTransitionStyle = _generateBorderShadow.transitionStyle;

  // responsive range controller
  var _generateResponsiveRa = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.QUOTE_SIZE,
      property: "height",
      attributes: attributes
    }),
    quoteHeightStylesDesktop = _generateResponsiveRa.rangeStylesDesktop,
    quoteHeightStylesTab = _generateResponsiveRa.rangeStylesTab,
    quoteHeightStylesMobile = _generateResponsiveRa.rangeStylesMobile;
  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.QUOTE_SIZE,
      property: "width",
      attributes: attributes
    }),
    quoteWidthStylesDesktop = _generateResponsiveRa2.rangeStylesDesktop,
    quoteWidthStylesTab = _generateResponsiveRa2.rangeStylesTab,
    quoteWidthStylesMobile = _generateResponsiveRa2.rangeStylesMobile;

  //Generate Background
  var _generateBackgroundCo = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants__WEBPACK_IMPORTED_MODULE_7__.TestimonialWrapBg
    }),
    backgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
    hoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
    backgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
    hoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
    backgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
    hoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
    overlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
    hoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
    overlayStylesTab = _generateBackgroundCo.overlayStylesTab,
    hoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
    overlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
    hoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
    bgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
    ovlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle;

  /**
   * Assign CSS in variable for use in Markup
   */
  var containerStyle = "\n\t\t.eb-testimonial-wrapper.".concat(blockId, " {\n\t\t\t").concat(backgroundStylesDesktop, "\n\t\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t\t").concat(wrapperPaddingStylesDesktop, "\n\t\t\t").concat(bdShadowStyesDesktop, "\n\t\t\ttransition:").concat(bgTransitionStyle, ", ").concat(bdShadowTransitionStyle, ";\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":hover{\n\t\t\t").concat(hoverBackgroundStylesDesktop, "\n\t\t\t").concat(bdShadowStylesHoverDesktop, "\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":before{\n\t\t\t").concat(overlayStylesDesktop, "\n\t\t\ttransition:").concat(ovlTransitionStyle, ";\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":hover:before{\n\t\t\t").concat(hoverOverlayStylesDesktop, "\n\t\t}\n\t");
  var tabContainerStyle = "\n\t\t.eb-testimonial-wrapper.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginStylesTab, "\n\t\t\t").concat(wrapperPaddingStylesTab, "\n\t\t\t").concat(bdShadowStyesTab, "\n\t\t\t").concat(backgroundStylesTab, "\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":hover{\n\t\t\t").concat(hoverBackgroundStylesTab, "\n\t\t\t").concat(bdShadowStylesHoverTab, "\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":before{\n\t\t\t").concat(overlayStylesTab, "\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":hover:before{\n\t\t\t").concat(hoverOverlayStylesTab, "\n\t\t}\n\t");
  var mobContainerStyle = "\n\t\t.eb-testimonial-wrapper.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginStylesMobile, "\n\t\t\t").concat(wrapperPaddingStylesMobile, "\n\t\t\t").concat(bdShadowStyesMobile, "\n\t\t\t").concat(backgroundStylesMobile, "\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":hover{\n\t\t\t").concat(hoverBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStylesHoverMobile, "\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":before{\n\t\t\t").concat(overlayStylesMobile, "\n\t\t}\n\n\t\t.eb-testimonial-wrapper.").concat(blockId, ":hover:before{\n\t\t\t").concat(hoverOverlayStylesMobile, "\n\t\t}\n\t");
  var avatarContainerStyle = "\n\t\t.".concat(blockId, " .eb-avatar-container {\n\t\t\torder: ").concat(avatarOrder, ";\n\t\t\tjustify-content: ").concat(avatarPosition, ";\n\t\t\talign-items: ").concat(avatarAlign, ";\n\t\t\tfont-size: ").concat(avaterContainerFontSize, "px;\n\t\t\tflex-direction: ").concat(avatarInline ? "row" : "column", ";\n\t\t}\n\t");
  var imageContainerStyle = "\n\t\t.".concat(blockId, " .image-container {\n\t\t\torder: ").concat(imagePosition, ";\n\t\t\tdisplay: ").concat(displayAvatar ? "block" : "none", ";\n\t\t}\n\t\t.").concat(blockId, " .eb-avatar-style {\n\t\t\tbackground-image: url(").concat(imageUrl, ");\n\t\t\tborder-radius: ").concat(borderRadius, "%;\n\t\t\tdisplay: ").concat(imageUrl ? "block" : "none", ";\n\t\t}\n\t");
  var userInfoStyle = "\n\t\t.".concat(blockId, " .eb-userinfo-container {\n\t\t\ttext-align: ").concat(textAlign, ";\n\t\t\tjustify-content: ").concat(userInfoPos, ";\n\t\t\talign-self: ").concat(userInfoAlign, ";\n\t\t\tmargin-left: 15px;\n\t\t}\n\t");
  var userNameStyle = "\n\t\t.".concat(blockId, " .eb-testimonial-username {\n\t\t\t").concat(usernameTypoStylesDesktop, "\n\t\t\tcolor: ").concat(userNameColor, ";\n\t\t}\n\t");
  var userNameStyleTab = "\n\t\t.".concat(blockId, " .eb-testimonial-username {\n\t\t\t").concat(usernameTypoStylesTab, "\n\t\t}\n\t");
  var userNameStyleMobile = "\n\t\t.".concat(blockId, " .eb-testimonial-username {\n\t\t\t").concat(usernameTypoStylesMobile, "\n\t\t}\n\t");
  var companyNameStyle = "\n\t\t.".concat(blockId, " .eb-testimonial-company {\n\t\t\t").concat(companyTypoStylesDesktop, "\n\t\t\tcolor: ").concat(companyColor, ";\n\t\t}\n\t");
  var companyNameStyleTab = "\n\t\t.".concat(blockId, " .eb-testimonial-company {\n\t\t\t").concat(companyTypoStylesTab, "\n\t\t}\n\t");
  var companyNameStyleMobile = "\n\t\t.".concat(blockId, " .eb-testimonial-company {\n\t\t\t").concat(companyTypoStylesMobile, "\n\t\t}\n\t");
  var descriptionStyle = "\n\t\t.".concat(blockId, " .eb-description-container p {\n\t\t\t").concat(descriptionTypoStylesDesktop, "\n\t\t\ttext-align: ").concat(descTextAlign, ";\n\t\t\tcolor: ").concat(descriptionColor, ";\n\t\t\tpadding-right: 20px;\n\t\t\tword-break: break-word;\n\t\t}\n\t\t").concat(quoteHorizontalPosition === "flex-end" ? ".".concat(blockId, " .eb-description-container {\n\t\t\t\tflex-direction: row-reverse;\n\t\t\t}\n\t\t\t.").concat(blockId, " .eb-description-container .eb-testimonial-quote-style {\n\t\t\t\ttransform: rotateY(180deg);\n\t\t\t}") : quoteHorizontalPosition === "center" ? quoteVerticalPosition == 1 ? ".".concat(blockId, " .eb-description-container {\n\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t}") : ".".concat(blockId, " .eb-description-container {\n\t\t\t\t\t\tflex-direction: column-reverse;\n\t\t\t\t\t}") : ".".concat(blockId, " .eb-description-container {\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t}"), "\n\t");
  var descriptionStyleTab = "\n\t\t.".concat(blockId, " .eb-description-container p {\n\t\t\t").concat(descriptionTypoStylesTab, "\n\t\t}\n\t");
  var descriptionStyleMobile = "\n\t\t.".concat(blockId, " .eb-description-container p {\n\t\t\t").concat(descriptionTypoStylesMobile, "\n\t\t}\n\t");
  var quoteStyle = "\n\t\t.".concat(blockId, " .eb-testimonial-quote-style:before {\n\t\t\tcontent: none;\n\t\t}\n\t\t.").concat(blockId, " .eb-testimonial-quote-style svg {\n\t\t\tfill: ").concat(quoteColor, ";\n\t\t\t").concat(quoteHeightStylesDesktop, "\n\t\t\t").concat(quoteWidthStylesDesktop, "\n\t\t}\n\t");
  var quoteStyleTab = "\n\t\t.".concat(blockId, " .eb-testimonial-quote-style svg {\n\t\t\t").concat(quoteHeightStylesTab, "\n\t\t\t").concat(quoteWidthStylesTab, "\n\t\t}\n\t");
  var quoteStyleMobile = "\n\t\t.".concat(blockId, " .eb-testimonial-quote-style svg {\n\t\t\t").concat(quoteHeightStylesMobile, "\n\t\t\t").concat(quoteWidthStylesMobile, "\n\t\t}\n\t");
  var desktopAllStyles = softMinifyCssStrings("\n\t\t".concat(containerStyle, "\n\t\t").concat(avatarContainerStyle, "\n\t\t").concat(imageContainerStyle, "\n\t\t").concat(userInfoStyle, "\n\t\t").concat(userNameStyle, "\n\t\t").concat(companyNameStyle, "\n\t\t").concat(descriptionStyle, "\n\t\t").concat(quoteStyle, "\n\t"));
  var tabAllStyles = softMinifyCssStrings("\n\t\t".concat(tabContainerStyle, "\n\t\t").concat(userNameStyleTab, "\n\t\t").concat(companyNameStyleTab, "\n\t\t").concat(descriptionStyleTab, "\n\t\t").concat(quoteStyleTab, "\n\t"));
  var mobileAllStyles = softMinifyCssStrings("\n\t\t".concat(mobContainerStyle, "\n\t\t").concat(userNameStyleMobile, "\n\t\t").concat(companyNameStyleMobile, "\n\t\t").concat(descriptionStyleMobile, "\n\t\t").concat(quoteStyleMobile, "\n\t"));

  // Set All Style in "blockMeta" Attribute
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };
    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, "eb-guten-block-main-parent-wrapper")
  });
  var replaceString = function replaceString(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  };
  blockProps.className = replaceString(blockProps.className, "eb-testimonial-wrapper", "");
  blockProps.className = replaceString(blockProps.className, blockId, "");
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\n\n\t\t\t\t\t/* tabcssStart */\n\t\t\t\t\t").concat(softMinifyCssStrings(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\n\n\t\t\t\t}\n\n\t\t\t\t@media all and (max-width: 767px) {\n\n\t\t\t\t\t/* mobcssStart */\n\t\t\t\t\t").concat(softMinifyCssStrings(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\n\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-wrapper ".concat(blockId),
    "data-id": blockId
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-avatar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-avatar-style"
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
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
      return !imageUrl && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "eb-testimonial-image components-button",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
        icon: "format-image",
        onClick: open
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-userinfo-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "eb-testimonial-username",
    value: userName,
    onChange: function onChange(newName) {
      return setAttributes({
        userName: newName
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "eb-testimonial-company",
    value: companyName,
    onChange: function onChange(newName) {
      return setAttributes({
        companyName: newName
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "eb-description-container"
  }, enableQuote && /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-quote-style"
  }, /*#__PURE__*/React.createElement(_quoteIconSVG__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "eb-testimonial-description",
    value: description,
    onChange: function onChange(newText) {
      return setAttributes({
        description: newText
      });
    }
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Example = {
  attributes: {
    imageUrl: "https://essential-addons.com/elementor/wp-content/uploads/2020/01/Team-Member-15.png"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialIcon": () => (/* binding */ TestimonialIcon)
/* harmony export */ });
var TestimonialIcon = function TestimonialIcon() {
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
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");









var _EBTestimonialControl = EBTestimonialControls,
  ebConditionalRegisterBlockType = _EBTestimonialControl.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_6__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__.TestimonialIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("testimonial", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("about", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb quote", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_7__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/**
 * WordPress dependencies
 */
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var _window$EBTestimonial = window.EBTestimonialControls,
  ImageAvatar = _window$EBTestimonial.ImageAvatar,
  ResponsiveDimensionsControl = _window$EBTestimonial.ResponsiveDimensionsControl,
  TypographyDropdown = _window$EBTestimonial.TypographyDropdown,
  ToggleButton = _window$EBTestimonial.ToggleButton,
  BorderShadowControl = _window$EBTestimonial.BorderShadowControl,
  BackgroundControl = _window$EBTestimonial.BackgroundControl,
  ResponsiveRangeController = _window$EBTestimonial.ResponsiveRangeController,
  AdvancedControls = _window$EBTestimonial.AdvancedControls;
function Inspector(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  var resOption = attributes.resOption,
    displayAvatar = attributes.displayAvatar,
    avatarInline = attributes.avatarInline,
    avatarPosition = attributes.avatarPosition,
    avatarAlign = attributes.avatarAlign,
    borderRadius = attributes.borderRadius,
    avatarOrder = attributes.avatarOrder,
    imageUrl = attributes.imageUrl,
    userInfoAlign = attributes.userInfoAlign,
    textAlign = attributes.textAlign,
    userNameColor = attributes.userNameColor,
    descriptionColor = attributes.descriptionColor,
    enableQuote = attributes.enableQuote,
    quoteColor = attributes.quoteColor,
    companyColor = attributes.companyColor,
    quoteHorizontalPosition = attributes.quoteHorizontalPosition,
    quoteVerticalPosition = attributes.quoteVerticalPosition,
    descTextAlign = attributes.descTextAlign;
  var resRequiredProps = {
    attributes: attributes,
    setAttributes: setAttributes,
    resOption: resOption,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab"
    // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layout Settings", "essential-blocks"),
      initialOpen: true
    }, avatarInline && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("User Info Position", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.ALIGN_ITEMS.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: avatarPosition !== item.value,
        isPrimary: avatarPosition === item.value,
        onClick: function onClick() {
          return setAttributes({
            avatarPosition: item.value
          });
        }
      }, item.label);
    }))), !avatarInline && displayAvatar && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: avatarInline ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("User Info Align", "essential-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Align", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.ALIGN_ITEMS.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: avatarAlign !== item.value,
        isPrimary: avatarAlign === item.value,
        onClick: function onClick() {
          return setAttributes({
            avatarAlign: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description Position", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.DESC_POSITIONS.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: avatarOrder !== item.value,
        isPrimary: avatarOrder === item.value,
        onClick: function onClick() {
          return setAttributes({
            avatarOrder: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description Align", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.TEXT_ALIGN.map(function (option, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: descTextAlign !== option.value,
        isPrimary: descTextAlign === option.value,
        onClick: function onClick() {
          return setAttributes({
            descTextAlign: option.value
          });
        }
      }, option.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("User Name Align", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.TEXT_ALIGN.map(function (option, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: textAlign !== option.value,
        isPrimary: textAlign === option.value,
        onClick: function onClick() {
          return setAttributes({
            textAlign: option.value
          });
        }
      }, option.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("User Info Align", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.ALIGN_ITEMS_VERTICAL.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: userInfoAlign !== item.value,
        isPrimary: userInfoAlign === item.value,
        onClick: function onClick() {
          return setAttributes({
            userInfoAlign: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Enable Quote",
      checked: enableQuote,
      onChange: function onChange() {
        return setAttributes({
          enableQuote: !enableQuote
        });
      }
    }), enableQuote && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quote Horizontal Align", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.ALIGN_ITEMS.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: quoteHorizontalPosition !== item.value,
        isPrimary: quoteHorizontalPosition === item.value,
        onClick: function onClick() {
          return setAttributes({
            quoteHorizontalPosition: item.value
          });
        }
      }, item.label);
    }))), quoteHorizontalPosition === "center" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quote Vertical Position", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.DESC_POSITIONS.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: quoteVerticalPosition !== item.value,
        isPrimary: quoteVerticalPosition === item.value,
        onClick: function onClick() {
          return setAttributes({
            quoteVerticalPosition: item.value
          });
        }
      }, item.label);
    }))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Avatar", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Display Avatar",
      checked: displayAvatar,
      onChange: function onChange() {
        return setAttributes({
          displayAvatar: !displayAvatar
        });
      }
    }), displayAvatar && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Avatar Inline", "essential-blocks"),
      checked: avatarInline,
      onChange: function onChange() {
        return setAttributes({
          avatarInline: !avatarInline
        });
      }
    }), displayAvatar && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-testimonial-image-pos",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Position", "essential-blocks")
    }, /*#__PURE__*/React.createElement(ToggleButton, {
      options: _constants__WEBPACK_IMPORTED_MODULE_6__.IMG_POSITIONS,
      onChange: function onChange(value) {
        return setAttributes({
          imagePosition: value
        });
      }
    })), displayAvatar && imageUrl && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Setting", "essential-blocks")
    }, imageUrl && /*#__PURE__*/React.createElement(ImageAvatar, {
      imageUrl: imageUrl,
      onDeleteImage: function onDeleteImage() {
        return setAttributes({
          imageUrl: null
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Round Avatar", "essential-blocks"),
      checked: borderRadius === 50,
      onChange: function onChange() {
        return setAttributes({
          borderRadius: borderRadius === 50 ? 0 : 50
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "essential-blocks"),
      value: borderRadius,
      onChange: function onChange(newValue) {
        return setAttributes({
          borderRadius: newValue
        });
      },
      min: 0,
      max: 50
    })))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Colors", "essential-blocks"),
      initialOpen: true,
      colorSettings: [{
        value: userNameColor,
        onChange: function onChange(userNameColor) {
          return setAttributes({
            userNameColor: userNameColor
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Username", "essential-blocks")
      }, {
        value: companyColor,
        onChange: function onChange(companyColor) {
          return setAttributes({
            companyColor: companyColor
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Company", "essential-blocks")
      }, {
        value: descriptionColor,
        onChange: function onChange(descriptionColor) {
          return setAttributes({
            descriptionColor: descriptionColor
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "essential-blocks")
      }, {
        value: quoteColor,
        onChange: function onChange(quoteColor) {
          return setAttributes({
            quoteColor: quoteColor
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quote", "essential-blocks")
      }]
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Username",
      typographyPrefixConstant: "username",
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Company",
      typographyPrefixConstant: "company",
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Description",
      typographyPrefixConstant: "description",
      resRequiredProps: resRequiredProps
    }), enableQuote && /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quote Size", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.QUOTE_SIZE,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES,
      min: 1,
      max: 200,
      step: 1
    }))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: "margin",
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: "padding",
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TestimonialWrapBg,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.WrpBdShadow,
      resRequiredProps: resRequiredProps
      // noShadow
      // noBorder
    })), /*#__PURE__*/React.createElement(AdvancedControls, {
      attributes: attributes,
      setAttributes: setAttributes
    })));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/quoteIconSVG.js":
/*!*****************************!*\
  !*** ./src/quoteIconSVG.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function QuoteSVG() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "123.961",
    height: "123.961",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 123.961 123.961",
    version: "1.1",
    viewBox: "0 0 123.961 123.961",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M49.8 29.032c3.1-1.3 4.4-5 3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899-8.5 3.6-15.8 8.3-21.6 14C11.4 28.532 6.6 36.232 4 44.732c-2.6 8.601-4 20.3-4 35.2v30.7c0 3.3 2.7 6 6 6h39.3c3.3 0 6-2.7 6-6v-39.3c0-3.301-2.7-6-6-6H26.5c.2-10.101 2.6-18.2 7-24.301 3.6-4.898 9-8.898 16.3-11.999zM120.4 29.032c3.1-1.3 4.399-5 3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9-8.4 3.6-15.601 8.3-21.5 13.9-7.101 6.8-12 14.5-14.601 23-2.6 8.399-3.899 20.1-3.899 35.1v30.7c0 3.3 2.7 6 6 6H116c3.3 0 6-2.7 6-6v-39.3c0-3.301-2.7-6-6-6H97.1c.2-10.101 2.601-18.2 7-24.301 3.6-4.899 9-8.899 16.3-12z"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteSVG);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _quoteIconSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quoteIconSVG */ "./src/quoteIconSVG.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * WordPress dependencies
 */


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
    avatarInline = attributes.avatarInline,
    userName = attributes.userName,
    companyName = attributes.companyName,
    description = attributes.description,
    enableQuote = attributes.enableQuote,
    classHook = attributes.classHook;
  var replaceString = function replaceString(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  };
  var blockProps = _objectSpread({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save());
  var className = blockProps.className;
  var updatedClassName = replaceString(className, "eb-testimonial-wrapper " + blockId, "").trim();
  var finalProps = _objectSpread(_objectSpread({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save()), {}, {
    className: updatedClassName
  });
  return /*#__PURE__*/React.createElement("div", finalProps, /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-wrapper ".concat(blockId),
    "data-id": blockId
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-avatar-container ".concat(avatarInline ? "avatar-inline" : "avatar-basic", " ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-avatar-style"
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-userinfo-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "p",
    className: "eb-testimonial-username",
    value: userName
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "p",
    className: "eb-testimonial-company",
    value: companyName
  }))), /*#__PURE__*/React.createElement("div", {
    className: "eb-description-container"
  }, enableQuote && /*#__PURE__*/React.createElement("div", {
    className: "eb-testimonial-quote-style"
  }, /*#__PURE__*/React.createElement(_quoteIconSVG__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "p",
    className: "eb-testimonial-description",
    value: description
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"Testimonial","apiVersion":2,"name":"testimonial-wp-block/testimonial","category":"widgets","description":"Display testimonials & gain instant credibility","textdomain":"testimonial-wp-block","editorScript":"file:./dist/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunktestimonial_wp_block"] = globalThis["webpackChunktestimonial_wp_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map