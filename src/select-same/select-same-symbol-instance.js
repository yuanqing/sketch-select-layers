/* eslint-disable eqeqeq */

const selectSame = require('./select-same')

export default selectSame({
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.symbolId == layer.symbolId
  },
  validateLayer: function (layer) {
    return layer.type === 'SymbolInstance'
  },
  invalidLayerMessage: 'Select a symbol'
})
