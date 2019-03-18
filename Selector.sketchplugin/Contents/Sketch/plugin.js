!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(s){if(t[s])return t[s].exports;var l=t[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(s,l,function(t){return e[t]}.bind(null,l));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){const{getSelectedOrAllLayers:s,iterateNestedLayers:l,showWarningMessage:a,showSuccessMessage:o}=n(1);e.exports=function({key:e,value:t,label:n}){return function(){let r=0;l(s(),function(n){if(n[e]==t)return n.selected=!0,void r++;n.selected=!1});const c=`${n}s`;0!=r?o(`Selected ${r} ${1==r?n:c}`):a(`No ${c} found`)}}},function(e,t,n){e.exports={openUserInputDialog:n(9),getSavedUserInput:n(4),saveUserInput:n(20),...n(23),...n(6)}},function(e,t,n){const{getAllLayers:s,getSelectedLayers:l,iterateNestedLayers:a,showErrorMessage:o,showSuccessMessage:r,showWarningMessage:c}=n(1);e.exports=function({shouldSelectLayer:e,validateLayer:t,invalidLayerMessage:n}){return function(){const i=l();if(0==i.length)return void o("Select one layer");if(i.length>1)return void o("Select only one layer");const u=i[0];if(!t(u))return void o(n);let y=0;a(s(),function(n){if(!n.selected)return t(n)&&e(u,n)?(n.selected=!0,void y++):void(n.selected=!1)}),0!=y?r(`Selected ${y} additional ${1==y?"layer":"layers"}`):c("No additional layers selected")}}},function(e,t,n){e.exports={CHECK_BOX:n(13),DROP_DOWN:n(14),RADIO_BUTTONS:n(15),TEXT_BOX:n(16)}},function(e,t,n){const s=n(5),{packageJsonConfigKey:l}=n(17),a=n(18);e.exports=function(){const{defaults:e}=a()[l];return Object.keys(e).reduce(function(t,n){const l=s.settingForKey(n);return t[n]=void 0!==l?l:e[n],t},{})}},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){const s=n(21),l=n(22);function a(){return s.getSelectedDocument().selectedPage.layers}function o(){return s.getSelectedDocument().selectedLayers.layers}function r(e,t){l.message(t&&t.symbol?`${t.symbol} ${e}`:e)}e.exports={addLayersToPage:function(e){return s.getSelectedDocument().selectedPage.sketchObject.addLayers(e)},getAllArtboards:function(){return a().filter(function(e){return"Artboard"==e.type})},getAllLayers:a,getSelectedLayers:o,getSelectedOrAllLayers:function(){const e=o();return 0!=e.length?e:a()},iterateNestedLayers:function e(t,n){t.forEach(function(t){n(t);const s=t.type;"Artboard"!=s&&"Group"!=s||e(t.layers,n)})},showErrorMessage:function(e){r(e,{symbol:"🔴"})},showMessage:r,showSuccessMessage:function(e){r(e,{symbol:"✅"})},showWarningMessage:function(e){r(e,{symbol:"⚠️"})}}},function(e,t,n){e.exports={"select-by-name":n(8),"select-by-type/select-artboards":n(24),"select-by-type/select-groups":n(25),"select-by-type/select-text-layers":n(26),"select-by-type/select-shape-layers":n(27),"select-by-type/select-symbol-instances":n(28),"select-by-type/select-images":n(29),"select-by-type/select-slices":n(30),"select-by-type/select-hotspots":n(31),"select-by-type/select-hidden-layers":n(32),"select-same/select-same-name":n(33),"select-same/select-same-style":n(34),"select-same/select-same-symbol-instance":n(35)}},function(e,t,n){const{getSelectedOrAllLayers:s,iterateNestedLayers:l,openUserInputDialog:a,saveUserInput:o,showSuccessMessage:r,showWarningMessage:c,CHECK_BOX:i,DROP_DOWN:u,TEXT_BOX:y}=n(1),d={Artboard:"Artboard",Group:"Group","Text Layer":"Text","Shape Layer":"ShapePath","Symbol Instance":"SymbolInstance",Image:"Image",Slice:"Slice",Hotspot:"HotSpot"},p={title:"Select By Name",inputs:[{key:"selectByName.layerName",label:"Layer name",type:y},{key:"selectByName.exactMatch",label:"Exact match",type:i},{key:"selectByName.type",label:"Type",type:u,possibleValues:["Any",...Object.keys(d),"Hidden"]}]};e.exports=function(){const e=a(p);if(!e)return;o(e);const t=e["selectByName.layerName"],n=new RegExp("true"==e["selectByName.exactMatch"]?`^${t}$`:t),i=e["selectByName.type"];let u=0;l(s(),function(e){if(function({layer:e,type:t,regularExpression:n}){return!("Hidden"==t&&!e.hidden)&&(("Any"==t||"Hidden"==t||e.type==d[t])&&n.test(e.name))}({layer:e,type:i,regularExpression:n}))return e.selected=!0,void u++;e.selected=!1}),0!=u?r(`Selected ${u} ${1==u?"layer":"layers"}`):c("Nothing selected")}},function(e,t,n){const s=n(10),l=n(11),a=n(12),o=n(3),r=n(4),{formHeight:c,formPaddingBottom:i,labelHeight:u,labelPaddingBottom:y,width:d}=n(19);e.exports=function({title:e,inputs:t}){const n=r(),{inputs:p,views:f,stackViewHeight:h}=function({inputsConfig:e,savedUserInput:t}){const n={},s=[];let a=0;return e.forEach(function({type:e,key:r,label:p,...f}){if(p&&"CHECK_BOX"!=e){const e=l({label:p,width:d,height:u});s.push({view:e,paddingBottom:y}),a+=u+y}const h=t[r],{view:b,retrieveValue:g}=o[e]({label:p,value:h,width:d,height:c,...f});s.push({view:b,paddingBottom:i}),a+=c+i,n[r]=g}),{inputs:n,views:s,stackViewHeight:a-=i}}({inputsConfig:t,savedUserInput:n}),b=a({width:d,height:h,views:f}),g=s(e);return g.setAccessoryView(b),"1000"==g.runModal()?Object.keys(p).reduce(function(e,t){const n=p[t];return e[t]=n(),e},{}):null}},function(e,t){e.exports=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}},function(e,t){e.exports=function({label:e,width:t,height:n}){const s=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return s.setBezeled(!1),s.setDrawsBackground(!1),s.setEditable(!1),s.setLineBreakMode(NSLineBreakByTruncatingTail),s.setSelectable(!1),s.setStringValue(e),s}},function(e,t){e.exports=function({width:e,height:t,views:n}){const s=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return s.setAlignment(NSLayoutAttributeLeft),s.setOrientation(NSUserInterfaceLayoutOrientationVertical),s.setSpacing(0),s.setTranslatesAutoresizingMaskIntoConstraints(!0),s.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){s.addView_inGravity_(e,NSStackViewGravityTop),s.setCustomSpacing_afterView_(t,e)}),s}},function(e,t){e.exports=function({width:e,height:t,label:n,value:s}){const l=NSButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));return l.setButtonType(NSSwitchButton),l.setBezelStyle(0),l.setState("true"==s?NSOnState:NSOffState),l.setTitle(n),{view:l,retrieveValue:function(){return"1"==l.stringValue()?"true":"false"}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:s}){const l=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));s.forEach(function(e){l.addItemWithTitle(e)});const a=s.indexOf(n);return l.selectItemAtIndex(a),{view:l,retrieveValue:function(){const e=l.indexOfSelectedItem();return s[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:s}){const l=NSButtonCell.alloc().init();l.setButtonType(NSRadioButton);const a=s.length,o=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,l,1,a);o.setCellSize(CGSizeMake(Math.floor(e/a),t)),o.cells().forEach(function(e,t){e.setTitle(s[t])});const r=s.indexOf(n);return o.selectCellAtRow_column(0,r),{view:o,retrieveValue:function(){const e=o.cells().indexOfObject(o.selectedCell());return s[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,placeholder:s}){const l=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,e,t));return l.setStringValue(n),s&&l.setPlaceholderString(s),{view:l,retrieveValue:function(){return l.stringValue()}}}},function(e,t){e.exports={appcastFileName:"appcast.xml",bundleFileName:"plugin.js",manifestFileName:"manifest.json",packageJsonConfigKey:"sketch-plugin-helper",sourceDirectory:"./src"}},function(e,t){e.exports=function(){return JSON.parse('{\n  "private": true,\n  "version": "0.1.2",\n  "devDependencies": {\n    "sketch-plugin-helper": "*"\n  },\n  "scripts": {\n    "build": "sph build",\n    "fix": "sph lint --fix",\n    "lint": "sph lint",\n    "symlink": "sph symlink",\n    "unlink": "sph symlink --delete",\n    "version": "sph version",\n    "watch": "sph build --watch"\n  },\n  "sketch-plugin-helper": {\n    "pluginName": "Selector",\n    "pluginDescription": "A Sketch plugin for changing or creating a selection of layers based on name, type or similarity",\n    "authorName": "Lim Yuan Qing",\n    "githubUserName": "yuanqing",\n    "githubRepositoryName": "sketch-selector",\n    "menu": [\n      {\n        "handler": "select-by-name",\n        "label": "Select By Name"\n      },\n      "-",\n      {\n        "handler": "select-by-type/select-artboards",\n        "label": "Select Artboards"\n      },\n      {\n        "handler": "select-by-type/select-groups",\n        "label": "Select Groups"\n      },\n      {\n        "handler": "select-by-type/select-text-layers",\n        "label": "Select Text Layers"\n      },\n      {\n        "handler": "select-by-type/select-shape-layers",\n        "label": "Select Shape Layers"\n      },\n      {\n        "handler": "select-by-type/select-symbol-instances",\n        "label": "Select Symbol Instances"\n      },\n      {\n        "handler": "select-by-type/select-images",\n        "label": "Select Images"\n      },\n      {\n        "handler": "select-by-type/select-slices",\n        "label": "Select Slices"\n      },\n      {\n        "handler": "select-by-type/select-hotspots",\n        "label": "Select Hotspots"\n      },\n      {\n        "handler": "select-by-type/select-hidden-layers",\n        "label": "Select Hidden Layers"\n      },\n      "-",\n      {\n        "handler": "select-same/select-same-name",\n        "label": "Select Same Name"\n      },\n      {\n        "handler": "select-same/select-same-style",\n        "label": "Select Same Layer Style or Text Style"\n      },\n      {\n        "handler": "select-same/select-same-symbol-instance",\n        "label": "Select Same Symbol Instance"\n      }\n    ],\n    "defaults": {\n      "selectByName.layerName": "",\n      "selectByName.exactMatch": "true",\n      "selectByName.type": "Any"\n    }\n  }\n}\n')}},function(e,t){e.exports={formHeight:20,formPaddingBottom:12,labelHeight:20,labelPaddingBottom:6,width:300}},function(e,t,n){const s=n(5),{showMessage:l}=n(6);e.exports=function(e,t){void 0!==e&&(Object.keys(e).forEach(function(t){const n=e[t];void 0!==n&&s.setSettingForKey(t,n)}),t&&t.successMessage&&l(t.successMessage))}},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports=require("sketch/ui")},function(e,t,n){const s=n(3),l=Object.keys(s).reduce(function(e,t){return e[t]=t,e},{});e.exports=l},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Artboard",label:"artboard"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Group",label:"group"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Text",label:"text layer"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"ShapePath",label:"shape layer"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"SymbolInstance",label:"symbol"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Image",label:"image"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"Slice",label:"slice"})},function(e,t,n){const s=n(0);e.exports=s({key:"type",value:"HotSpot",label:"hotspot"})},function(e,t,n){const s=n(0);e.exports=s({key:"hidden",value:!0,label:"hidden layer"})},function(e,t,n){const s=n(2);e.exports=s({shouldSelectLayer:function(e,t){return e.name==t.name},validateLayer:function(){return!0}})},function(e,t,n){const s=n(2);e.exports=s({shouldSelectLayer:function(e,t){return e.sharedStyleId==t.sharedStyleId},validateLayer:function(e){const t=e.type;return("Text"==t||"ShapePath"==t)&&void 0!==e.sharedStyleId},invalidLayerMessage:"Select a layer with a layer style or text style"})},function(e,t,n){const s=n(2);e.exports=s({shouldSelectLayer:function(e,t){return e.symbolId==t.symbolId},validateLayer:function(e){return"SymbolInstance"==e.type},invalidLayerMessage:"Select a symbol instance"})}]));