const selectSame = require('./select-same')

module.exports = selectSame({
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.symbolId == layer.symbolId
  },
  validateLayer: function (layer) {
    return layer.type == 'SymbolInstance'
  },
  invalidLayerMessage: 'Select a symbol'
})
