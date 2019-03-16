(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/68d31326-1050-47ef-ad41-0858e26c30be");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/68d31326-1050-47ef-ad41-0858e26c30be":
/*!*****************************************************************************************************!*\
  !*** /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/68d31326-1050-47ef-ad41-0858e26c30be ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports={'select-by-name':__webpack_require__(/*! ./src/select-by-name */ "./src/select-by-name.js").default,'select-artboards':__webpack_require__(/*! ./src/select-artboards */ "./src/select-artboards.js").default,'select-groups':__webpack_require__(/*! ./src/select-groups */ "./src/select-groups.js").default,'select-text-layers':__webpack_require__(/*! ./src/select-text-layers */ "./src/select-text-layers.js").default,'select-shape-layers':__webpack_require__(/*! ./src/select-shape-layers */ "./src/select-shape-layers.js").default,'select-symbols':__webpack_require__(/*! ./src/select-symbols */ "./src/select-symbols.js").default,'select-slices':__webpack_require__(/*! ./src/select-slices */ "./src/select-slices.js").default,'select-hotspots':__webpack_require__(/*! ./src/select-hotspots */ "./src/select-hotspots.js").default,'select-same-name':__webpack_require__(/*! ./src/select-same-name */ "./src/select-same-name.js").default}

/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/api.js":
/*!******************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  openUserInputDialog: __webpack_require__(/*! ./user-input/open-user-input-dialog */ "./node_modules/sketch-plugin-helper/src/user-input/open-user-input-dialog.js"),
  getSavedUserInput: __webpack_require__(/*! ./user-input/get-saved-user-input */ "./node_modules/sketch-plugin-helper/src/user-input/get-saved-user-input.js"),
  saveUserInput: __webpack_require__(/*! ./user-input/save-user-input */ "./node_modules/sketch-plugin-helper/src/user-input/save-user-input.js"),
  ...__webpack_require__(/*! ./user-input/form/form-types */ "./node_modules/sketch-plugin-helper/src/user-input/form/form-types.js"),
  ...__webpack_require__(/*! ./utilities/utilities */ "./node_modules/sketch-plugin-helper/src/utilities/utilities.js")
}


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/common/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/common/constants.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  appcastFileName: 'appcast.xml',
  bundleFileName: 'plugin.js',
  manifestFileName: 'manifest.json',
  packageJsonConfigKey: 'sketch-plugin-helper',
  sourceDirectory: './src'
}


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/common/get-package-json.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/common/get-package-json.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getPackageJson () {
  const packageJson = "{\n  \"private\": true,\n  \"version\": \"0.1.0\",\n  \"devDependencies\": {\n    \"sketch-plugin-helper\": \"/Users/yuanqing/Desktop/Git/sketch-plugin-helper\"\n  },\n  \"scripts\": {\n    \"build\": \"sph build --dev\",\n    \"fix\": \"sph lint --fix\",\n    \"link\": \"sph link\",\n    \"lint\": \"sph lint\",\n    \"unlink\": \"sph unlink\",\n    \"version\": \"sph version\",\n    \"watch\": \"sph build --watch\"\n  },\n  \"sketch-plugin-helper\": {\n    \"pluginName\": \"Selector\",\n    \"pluginDescription\": \"A Sketch plugin for changing the selection based on type, name, and similarity\",\n    \"authorName\": \"Lim Yuan Qing\",\n    \"githubUserName\": \"yuanqing\",\n    \"githubRepositoryName\": \"sketch-selector\",\n    \"menu\": [\n      {\n        \"handler\": \"select-by-name\",\n        \"label\": \"Select By Name\"\n      },\n      \"-\",\n      {\n        \"handler\": \"select-artboards\",\n        \"label\": \"Select Artboards\"\n      },\n      {\n        \"handler\": \"select-groups\",\n        \"label\": \"Select Groups\"\n      },\n      {\n        \"handler\": \"select-text-layers\",\n        \"label\": \"Select Text Layers\"\n      },\n      {\n        \"handler\": \"select-shape-layers\",\n        \"label\": \"Select Shape Layers\"\n      },\n      {\n        \"handler\": \"select-symbols\",\n        \"label\": \"Select Symbols\"\n      },\n      {\n        \"handler\": \"select-slices\",\n        \"label\": \"Select Slices\"\n      },\n      {\n        \"handler\": \"select-hotspots\",\n        \"label\": \"Select Hotspots\"\n      },\n      \"-\",\n      {\n        \"handler\": \"select-same-name\",\n        \"label\": \"Select Same Name\"\n      }\n    ],\n    \"defaults\": {\n      \"selectByName.layerName\": \"\",\n      \"selectByName.exactMatch\": \"true\"\n    }\n  }\n}\n"
  return JSON.parse(packageJson)
}

module.exports = getPackageJson


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/create-alert.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/create-alert.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createAlert (title) {
  const alert = NSAlert.alloc().init()
  alert.window().setAutorecalculatesKeyViewLoop(true)
  alert.setMessageText(title)
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')
  return alert
}

module.exports = createAlert


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/create-label.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/create-label.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createLabel ({ label, width, height }) {
  const textField = NSTextField.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  textField.setBezeled(false)
  textField.setDrawsBackground(false)
  textField.setEditable(false)
  textField.setLineBreakMode(NSLineBreakByTruncatingTail)
  textField.setSelectable(false)
  textField.setStringValue(label)
  return textField
}

module.exports = createLabel


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/create-stack-view.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/create-stack-view.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createStackView ({ width, height, views }) {
  const stackView = NSStackView.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  stackView.setAlignment(NSLayoutAttributeLeft)
  stackView.setOrientation(NSUserInterfaceLayoutOrientationVertical)
  stackView.setSpacing(0)
  stackView.setTranslatesAutoresizingMaskIntoConstraints(true)
  stackView.updateConstraintsForSubtreeIfNeeded()
  views.forEach(function ({ view, paddingBottom }) {
    stackView.addView_inGravity_(view, NSStackViewGravityTop)
    stackView.setCustomSpacing_afterView_(paddingBottom, view)
  })
  return stackView
}

module.exports = createStackView


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/dimensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/dimensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  formHeight: 20,
  formPaddingBottom: 12,
  labelHeight: 20,
  labelPaddingBottom: 6,
  width: 300
}


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/form/check-box.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/form/check-box.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable eqeqeq */

function checkBox ({ width, height, label, value }) {
  const checkBox = NSButton.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  checkBox.setButtonType(NSSwitchButton)
  checkBox.setBezelStyle(0)
  checkBox.setState(value == 'true' ? NSOnState : NSOffState)
  checkBox.setTitle(label)
  return {
    view: checkBox,
    retrieveValue: function () {
      return checkBox.stringValue() == '1' ? 'true' : 'false'
    }
  }
}

module.exports = checkBox


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/form/create-form.js":
/*!******************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/form/create-form.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  CHECK_BOX: __webpack_require__(/*! ./check-box */ "./node_modules/sketch-plugin-helper/src/user-input/form/check-box.js"),
  DROP_DOWN: __webpack_require__(/*! ./drop-down */ "./node_modules/sketch-plugin-helper/src/user-input/form/drop-down.js"),
  RADIO_BUTTONS: __webpack_require__(/*! ./radio-buttons */ "./node_modules/sketch-plugin-helper/src/user-input/form/radio-buttons.js"),
  TEXT_BOX: __webpack_require__(/*! ./text-box */ "./node_modules/sketch-plugin-helper/src/user-input/form/text-box.js")
}


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/form/drop-down.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/form/drop-down.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function dropDown ({ width, height, value, possibleValues }) {
  const popUpButton = NSPopUpButton.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  possibleValues.forEach(function (value) {
    popUpButton.addItemWithTitle(value)
  })
  const index = possibleValues.indexOf(value)
  popUpButton.selectItemAtIndex(index)
  return {
    view: popUpButton,
    retrieveValue: function () {
      const index = popUpButton.indexOfSelectedItem()
      return possibleValues[index]
    }
  }
}

module.exports = dropDown


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/form/form-types.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/form/form-types.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createForm = __webpack_require__(/*! ./create-form */ "./node_modules/sketch-plugin-helper/src/user-input/form/create-form.js")

const formTypes = Object.keys(createForm).reduce(function (result, key) {
  result[key] = key
  return result
}, {})

module.exports = formTypes


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/form/radio-buttons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/form/radio-buttons.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function radioButtons ({ width, height, value, possibleValues }) {
  const buttonFormat = NSButtonCell.alloc().init()
  buttonFormat.setButtonType(NSRadioButton)
  const length = possibleValues.length
  const matrix = NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(
    NSMakeRect(0, 0, width, height),
    NSRadioModeMatrix,
    buttonFormat,
    1,
    length
  )
  matrix.setCellSize(CGSizeMake(Math.floor(width / length), height))
  const cells = matrix.cells()
  cells.forEach(function (cell, index) {
    cell.setTitle(possibleValues[index])
  })
  const index = possibleValues.indexOf(value)
  matrix.selectCellAtRow_column(0, index)
  return {
    view: matrix,
    retrieveValue: function () {
      const index = matrix.cells().indexOfObject(matrix.selectedCell())
      return possibleValues[index]
    }
  }
}

module.exports = radioButtons


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/form/text-box.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/form/text-box.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function textBox ({ width, height, value, placeholder }) {
  const textField = NSTextField.alloc().initWithFrame(
    NSMakeRect(0, 0, width, height)
  )
  textField.setStringValue(value)
  if (placeholder) {
    textField.setPlaceholderString(placeholder)
  }
  return {
    view: textField,
    retrieveValue: function () {
      return textField.stringValue()
    }
  }
}

module.exports = textBox


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/get-saved-user-input.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/get-saved-user-input.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings")

const { packageJsonConfigKey } = __webpack_require__(/*! ../common/constants */ "./node_modules/sketch-plugin-helper/src/common/constants.js")
const getPackageJson = __webpack_require__(/*! ../common/get-package-json */ "./node_modules/sketch-plugin-helper/src/common/get-package-json.js")

function getSavedUserInput () {
  const { defaults } = getPackageJson()[packageJsonConfigKey]
  return Object.keys(defaults).reduce(function (results, key) {
    const savedSetting = Settings.settingForKey(key)
    results[key] =
      typeof savedSetting !== 'undefined' ? savedSetting : defaults[key]
    return results
  }, {})
}

module.exports = getSavedUserInput


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/open-user-input-dialog.js":
/*!************************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/open-user-input-dialog.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable eqeqeq */

const createAlert = __webpack_require__(/*! ./create-alert */ "./node_modules/sketch-plugin-helper/src/user-input/create-alert.js")
const createLabel = __webpack_require__(/*! ./create-label */ "./node_modules/sketch-plugin-helper/src/user-input/create-label.js")
const createStackView = __webpack_require__(/*! ./create-stack-view */ "./node_modules/sketch-plugin-helper/src/user-input/create-stack-view.js")
const createForm = __webpack_require__(/*! ./form/create-form */ "./node_modules/sketch-plugin-helper/src/user-input/form/create-form.js")
const getSavedUserInput = __webpack_require__(/*! ./get-saved-user-input */ "./node_modules/sketch-plugin-helper/src/user-input/get-saved-user-input.js")
const {
  formHeight,
  formPaddingBottom,
  labelHeight,
  labelPaddingBottom,
  width
} = __webpack_require__(/*! ./dimensions */ "./node_modules/sketch-plugin-helper/src/user-input/dimensions.js")

function openUserInputDialog ({ title, inputs: inputsConfig }) {
  const savedUserInput = getSavedUserInput()
  const { inputs, views, stackViewHeight } = parse({
    inputsConfig,
    savedUserInput
  })
  const stackView = createStackView({
    width,
    height: stackViewHeight,
    views
  })
  const alert = createAlert(title)
  alert.setAccessoryView(stackView)
  if (alert.runModal() == '1000') {
    return Object.keys(inputs).reduce(function (result, key) {
      const retrieveValue = inputs[key]
      result[key] = retrieveValue()
      return result
    }, {})
  }
  return null
}

function parse ({ inputsConfig, savedUserInput }) {
  const inputs = {}
  const views = []
  let stackViewHeight = 0
  inputsConfig.forEach(function ({ type, key, label, ...rest }) {
    if (label && type != 'CHECK_BOX') {
      const labelView = createLabel({ label, width, height: labelHeight })
      views.push({
        view: labelView,
        paddingBottom: labelPaddingBottom
      })
      stackViewHeight += labelHeight + labelPaddingBottom
    }
    const value = savedUserInput[key]
    const { view, retrieveValue } = createForm[type]({
      label,
      value,
      width,
      height: formHeight,
      ...rest
    })
    views.push({
      view,
      paddingBottom: formPaddingBottom
    })
    stackViewHeight += formHeight + formPaddingBottom
    inputs[key] = retrieveValue
  })
  stackViewHeight -= formPaddingBottom
  return {
    inputs,
    views,
    stackViewHeight
  }
}

module.exports = openUserInputDialog


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/user-input/save-user-input.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/user-input/save-user-input.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings")
const { showMessage } = __webpack_require__(/*! ../utilities/utilities */ "./node_modules/sketch-plugin-helper/src/utilities/utilities.js")

function saveUserInput (userInput, options) {
  if (typeof userInput === 'undefined') {
    return
  }
  Object.keys(userInput).forEach(function (key) {
    const value = userInput[key]
    if (typeof value === 'undefined') {
      return
    }
    Settings.setSettingForKey(key, value)
  })
  if (options && options.successMessage) {
    showMessage(options.successMessage)
  }
}

module.exports = saveUserInput


/***/ }),

/***/ "./node_modules/sketch-plugin-helper/src/utilities/utilities.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sketch-plugin-helper/src/utilities/utilities.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable eqeqeq */

const dom = __webpack_require__(/*! sketch/dom */ "sketch/dom")
const UI = __webpack_require__(/*! sketch/ui */ "sketch/ui")

function getAllArtboards () {
  return getAllLayers().filter(function (layer) {
    return layer.type == 'Artboard'
  })
}

function getAllLayers () {
  const document = dom.getSelectedDocument()
  const page = document.selectedPage
  return page.layers
}

function getPage () {
  const document = dom.getSelectedDocument()
  return document.selectedPage
}

function getSelectedLayers () {
  const document = dom.getSelectedDocument()
  return document.selectedLayers.layers
}

function getSelectedOrAllLayers () {
  const selectedLayers = getSelectedLayers()
  return selectedLayers.length != 0 ? selectedLayers : getAllLayers()
}

function iterateNestedLayers (layers, callback) {
  layers.forEach(function (layer) {
    callback(layer)
    if (layer.type == 'Artboard' || layer.type == 'Group') {
      iterateNestedLayers(layer.layers, callback)
    }
  })
}

function showMessage (message) {
  UI.message(message)
}

module.exports = {
  getAllArtboards,
  getAllLayers,
  getPage,
  getSelectedLayers,
  getSelectedOrAllLayers,
  iterateNestedLayers,
  showMessage
}


/***/ }),

/***/ "./src/create-select-by-type.js":
/*!**************************************!*\
  !*** ./src/create-select-by-type.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable eqeqeq */

const {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  showMessage
} = __webpack_require__(/*! sketch-plugin-helper */ "./node_modules/sketch-plugin-helper/src/api.js")

function createSelectByType ({ type, label }) {
  return function () {
    let hasSelection = false
    iterateNestedLayers(getSelectedOrAllLayers(), function (layer) {
      console.log(layer)
      if (layer.type == type) {
        layer.selected = true
        hasSelection = true
        return
      }
      layer.selected = false
    })
    showMessage(hasSelection ? `Selected ${label}` : `No ${label} selected`)
  }
}

module.exports = createSelectByType


/***/ }),

/***/ "./src/select-artboards.js":
/*!*********************************!*\
  !*** ./src/select-artboards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createSelectByType = __webpack_require__(/*! ./create-select-by-type */ "./src/create-select-by-type.js")

/* harmony default export */ __webpack_exports__["default"] = (createSelectByType({
  type: 'Artboard',
  label: 'artboards'
}));


/***/ }),

/***/ "./src/select-by-name.js":
/*!*******************************!*\
  !*** ./src/select-by-name.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable eqeqeq */

const {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  openUserInputDialog,
  saveUserInput,
  showMessage,
  TEXT_BOX,
  CHECK_BOX
} = __webpack_require__(/*! sketch-plugin-helper */ "./node_modules/sketch-plugin-helper/src/api.js")

const userInputConfig = {
  title: 'Select By Name',
  inputs: [
    {
      key: 'selectByName.layerName',
      label: 'Layer name',
      type: TEXT_BOX
    },
    {
      key: 'selectByName.exactMatch',
      label: 'Exact match',
      type: CHECK_BOX
    }
  ]
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  const userInput = openUserInputDialog(userInputConfig)
  if (userInput) {
    saveUserInput(userInput)
  }
  const layerName = userInput['selectByName.layerName']
  const regularExpression = new RegExp(
    userInput['selectByName.exactMatch'] == 'true'
      ? `^${layerName}$`
      : layerName
  )
  let hasSelection = false
  iterateNestedLayers(getSelectedOrAllLayers(), function (layer) {
    if (regularExpression.test(layer.name)) {
      layer.selected = true
      hasSelection = true
      return
    }
    layer.selected = false
  })
  showMessage(hasSelection ? 'Selected' : 'Nothing selected')
});


/***/ }),

/***/ "./src/select-groups.js":
/*!******************************!*\
  !*** ./src/select-groups.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createSelectByType = __webpack_require__(/*! ./create-select-by-type */ "./src/create-select-by-type.js")

/* harmony default export */ __webpack_exports__["default"] = (createSelectByType({
  type: 'Group',
  label: 'groups'
}));


/***/ }),

/***/ "./src/select-hotspots.js":
/*!********************************!*\
  !*** ./src/select-hotspots.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createSelectByType = __webpack_require__(/*! ./create-select-by-type */ "./src/create-select-by-type.js")

/* harmony default export */ __webpack_exports__["default"] = (createSelectByType({
  type: 'Hotspot',
  label: 'hotspots'
}));


/***/ }),

/***/ "./src/select-same-name.js":
/*!*********************************!*\
  !*** ./src/select-same-name.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable eqeqeq */

const {
  getAllLayers,
  getSelectedLayers,
  iterateNestedLayers,
  showMessage
} = __webpack_require__(/*! sketch-plugin-helper */ "./node_modules/sketch-plugin-helper/src/api.js")

/* harmony default export */ __webpack_exports__["default"] = (function () {
  const selectedLayers = getSelectedLayers()
  if (selectedLayers.length == 0) {
    showMessage('Select a layer')
    return
  }
  if (selectedLayers.length > 1) {
    showMessage('Select only one layer')
    return
  }
  const selectedLayerName = selectedLayers[0].name
  iterateNestedLayers(getAllLayers(), function (layer) {
    if (layer.name == selectedLayerName) {
      layer.selected = true
      return
    }
    layer.selected = false
  })
  showMessage('Selected')
});


/***/ }),

/***/ "./src/select-shape-layers.js":
/*!************************************!*\
  !*** ./src/select-shape-layers.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createSelectByType = __webpack_require__(/*! ./create-select-by-type */ "./src/create-select-by-type.js")

/* harmony default export */ __webpack_exports__["default"] = (createSelectByType({
  type: 'ShapePath',
  label: 'shape layers'
}));


/***/ }),

/***/ "./src/select-slices.js":
/*!******************************!*\
  !*** ./src/select-slices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createSelectByType = __webpack_require__(/*! ./create-select-by-type */ "./src/create-select-by-type.js")

/* harmony default export */ __webpack_exports__["default"] = (createSelectByType({
  type: 'Slice',
  label: 'slices'
}));


/***/ }),

/***/ "./src/select-symbols.js":
/*!*******************************!*\
  !*** ./src/select-symbols.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createSelectByType = __webpack_require__(/*! ./create-select-by-type */ "./src/create-select-by-type.js")

/* harmony default export */ __webpack_exports__["default"] = (createSelectByType({
  type: 'SymbolInstance',
  label: 'symbols'
}));


/***/ }),

/***/ "./src/select-text-layers.js":
/*!***********************************!*\
  !*** ./src/select-text-layers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createSelectByType = __webpack_require__(/*! ./create-select-by-type */ "./src/create-select-by-type.js")

/* harmony default export */ __webpack_exports__["default"] = (createSelectByType({
  type: 'Text',
  label: 'text layers'
}));


/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ })));
//# sourceMappingURL=plugin.js.map