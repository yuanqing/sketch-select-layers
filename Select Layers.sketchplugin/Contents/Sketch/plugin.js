!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return a}),n.d(r,"DROP_DOWN",function(){return c}),n.d(r,"RADIO_BUTTONS",function(){return o}),n.d(r,"NUMERIC_TEXT_BOX",function(){return u.a}),n.d(r,"STRING_TEXT_BOX",function(){return s}),n.d(r,"TEXT_BOX",function(){});var i=n(2);function a({width:e,height:t,label:n,value:r}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState(r?NSOnState:NSOffState),i.setTitle(n),{view:i,retrieveValue:function(){return"1"==i.stringValue()}}}function c({width:e,height:t,value:n,possibleValues:r}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));r.forEach(function(e){i.addItemWithTitle(e)});const a=void 0!==n?r.indexOf(n):0;return i.selectItemAtIndex(a),{view:i,retrieveValue:function(){const e=i.indexOfSelectedItem();return r[e]}}}function o({width:e,height:t,value:n,possibleValues:r}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const a=r.length,c=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,i,1,a);c.setCellSize(CGSizeMake(Math.floor(e/a),t)),c.cells().forEach(function(e,t){e.setTitle(r[t])});const o=void 0!==n?r.indexOf(n):0;return c.selectCellAtRow_column(0,o),{view:c,retrieveValue:function(){const e=c.cells().indexOfObject(c.selectedCell());return r[e]}}}var u=n(5),l=n(4);const s=Object(l.a)(),f=20,d=12,y=20,b=6,p=300;function h({title:e,inputs:t}){const n=function(){const e={"selectByName.exactMatch":!0,"selectByName.layerName":"","selectByName.type":"Any"};return e?Object.keys(e).reduce(function(t,n){const r=Object(i.sessionVariable)(n),a=Object(i.settingForKey)(n),c=void 0!==r?r:a,o=e[n];return t[n]=void 0!==c?c:o,t},{}):{}}(),{inputs:a,views:c,stackViewHeight:o}=function({inputsConfig:e,settings:t}){const n={},i=[];let a=0;return e.forEach(function({type:e,key:c,label:o,value:u,...l}){if(o&&"CHECK_BOX"!==e){const e=function({label:e,width:t,height:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(e),r}({label:o,width:p,height:y});i.push({view:e,paddingBottom:b}),a+=y+b}const s=t[c],h=null!=u?u:s,{view:v,retrieveValue:m}=r[e]({label:o,value:h,width:p,height:f,...l});i.push({view:v,paddingBottom:d}),a+=f+d,n[c]=m}),{inputs:n,views:i,stackViewHeight:a-=d}}({inputsConfig:t,settings:n}),u=function({width:e,height:t,views:n}){const r=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return r.setAlignment(NSLayoutAttributeLeft),r.setOrientation(NSUserInterfaceLayoutOrientationVertical),r.setSpacing(0),r.setTranslatesAutoresizingMaskIntoConstraints(!0),r.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){r.addView_inGravity_(e,NSStackViewGravityTop),r.setCustomSpacing_afterView_(t,e)}),r}({width:p,height:o,views:c}),l=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e);return l.setAccessoryView(u),"1000"==l.runModal()?Object.keys(a).reduce(function(e,t){const n=a[t];return e[t]=n(),e},{}):null}var v=n(6),m=n.n(v);function S(e,t){m.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function O(e){S(e,{symbol:"✔"})}function _(e){S(e,{symbol:"✘"})}function g(){const e={"selectByName.exactMatch":!0,"selectByName.layerName":"","selectByName.type":"Any"};e&&(Object.keys(e).forEach(function(e){Object(i.setSettingForKey)(e,void 0),Object(i.setSessionVariable)(e,void 0)}),S("Reset settings"))}N(i.setSettingForKey);const j=N(i.setSessionVariable);function N(e){return function(t,n){if(void 0===t)return;Object.keys(t).forEach(function(n){const r=t[n];void 0!==r&&e(n,r)});const r=void 0!==n&&n.successMessage;r&&S(r)}}n(7),n(8);n(9);var x=n(10);function k(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(x.fromNative)(e[0])}function w(){return k().selectedPage.layers}function B(){return k().selectedLayers.layers.reverse()}function T(){const e=B();return 0!==e.length?e:w()}function M(e,t){e.forEach(function(e){t(e);const n=e.type;"Artboard"!==n&&"Group"!==n||M(e.layers,t)})}n.d(t,"h",function(){return h}),n.d(t,"i",function(){return g}),n.d(t,"j",function(){return j}),n.d(t,"a",function(){return"CHECK_BOX"}),n.d(t,"b",function(){return"DROP_DOWN"}),n.d(t,"c",function(){return"STRING_TEXT_BOX"}),n.d(t,"d",function(){return w}),n.d(t,"e",function(){return B}),n.d(t,"f",function(){return T}),n.d(t,"g",function(){return M}),n.d(t,"l",function(){return S}),n.d(t,"m",function(){return O}),n.d(t,"k",function(){return _})},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0);function i({key:e,value:t,label:n}){return function(){let i=0;Object(r.g)(Object(r.f)(),function(n){if(n[e]===t)return n.selected=!0,void i++;n.selected=!1});const a=`${n}s`;0!==i?Object(r.m)(`Selected ${i} ${1===i?n:a}`):Object(r.l)(`No ${a} found`)}}},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0);function i({validateLayer:e,shouldSelectLayer:t,invalidLayerMessage:n}){return function(){const i=Object(r.e)();if(0===i.length)return void Object(r.k)("Select 1 layer");if(i.length>1)return void Object(r.k)("Select only 1 layer");const a=i[0];if(!e(a))return void Object(r.k)(n);let c=0;Object(r.g)(Object(r.d)(),function(n){if(!n.selected)return e(n)&&t(a,n)?(n.selected=!0,void c++):void(n.selected=!1)}),0!==c?Object(r.m)(`Selected ${c} additional ${1===c?"layer":"layers"}`):Object(r.l)("No additional layers selected")}}},function(e,t,n){"use strict";function r(e){return function({width:t,height:n,value:r,placeholder:i}){const a=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n)),c=null==r?"":`${r}`;return a.setStringValue(c),i&&a.setPlaceholderString(i),{view:a,retrieveValue:function(){const t=`${a.stringValue()}`;return e?e(t):t}}}}n.d(t,"a",function(){return r})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return numericTextBox});var _text_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);const numericTextBox=Object(_text_box__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=require("sketch/ui")},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,n){"use strict";const r=async(e,t)=>{let n=0;for(const r of e)await t(await r,n++);return e};e.exports=r,e.exports.default=r},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports=require("sketch")},function(e,t,n){e.exports=n(12)},function(e,t,n){e.exports={"select-by-name":n(13).default,"select-by-type/types/artboard":n(14).default,"select-by-type/types/group":n(15).default,"select-by-type/types/shape-layer":n(16).default,"select-by-type/types/text-layer":n(17).default,"select-by-type/types/symbol-instance":n(18).default,"select-by-type/types/image":n(19).default,"select-by-type/types/slice":n(20).default,"select-by-type/types/hotspot":n(21).default,"select-by-type/types/hidden-layer":n(22).default,"select-same/attributes/name":n(23).default,"select-same/attributes/style":n(24).default,"select-same/attributes/symbol-instance":n(25).default,"reset-settings":n(26).default}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n(0);const i={Artboard:"Artboard",Group:"Group","Text Layer":"Text","Shape Layer":"ShapePath","Symbol Instance":"SymbolInstance",Image:"Image",Slice:"Slice",Hotspot:"HotSpot"},a={title:"Select By Name",inputs:[{type:r.c,key:"selectByName.layerName",label:"Layer name"},{type:r.a,key:"selectByName.exactMatch",label:"Exact match"},{type:r.b,key:"selectByName.type",label:"Type",possibleValues:["Any",...Object.keys(i),"Hidden"]}]};function c(){const e=Object(r.h)(a);if(!e)return;Object(r.j)(e);const t=e["selectByName.layerName"],n=new RegExp(e["selectByName.exactMatch"]?`^${t}$`:t),c=e["selectByName.type"];let o=0;Object(r.g)(Object(r.f)(),function(e){if(function({layer:e,type:t,regularExpression:n}){if("Hidden"===t&&!e.hidden)return!1;if("Any"!==t&&"Hidden"!==t&&e.type!==i[t])return!1;return n.test(e.name)}({layer:e,type:c,regularExpression:n}))return e.selected=!0,void o++;e.selected=!1}),0!==o?Object(r.m)(`Selected ${o} ${1===o?"layer":"layers"}`):Object(r.l)("Nothing selected")}},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"type",value:"Artboard",label:"artboard"})},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"type",value:"Group",label:"group"})},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"type",value:"ShapePath",label:"shape layer"})},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"type",value:"Text",label:"text layer"})},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"type",value:"SymbolInstance",label:"symbol instance"})},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"type",value:"Image",label:"image"})},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"type",value:"Slice",label:"slice"})},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"type",value:"HotSpot",label:"hotspot"})},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=Object(r.a)({key:"hidden",value:!0,label:"hidden layer"})},function(e,t,n){"use strict";n.r(t);var r=n(3);t.default=Object(r.a)({validateLayer:function(){return!0},shouldSelectLayer:function(e,t){return e.name===t.name}})},function(e,t,n){"use strict";n.r(t);var r=n(3);t.default=Object(r.a)({validateLayer:function(e){const t=e.type;return("Text"===t||"ShapePath"===t)&&"string"==typeof e.sharedStyleId},shouldSelectLayer:function(e,t){return e.sharedStyleId===t.sharedStyleId},invalidLayerMessage:"Select a layer with a layer style or text style"})},function(e,t,n){"use strict";n.r(t);var r=n(3);t.default=Object(r.a)({validateLayer:function(e){return"SymbolInstance"===e.type},shouldSelectLayer:function(e,t){return e.symbolId===t.symbolId},invalidLayerMessage:"Select a symbol instance"})},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r.i}]));