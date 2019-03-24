import selectSame from '../select-same'

export default selectSame({
  validateLayer: function (layer) {
    return layer.type === 'SymbolInstance'
  },
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.symbolId === layer.symbolId
  },
  invalidLayerMessage: 'Select a symbol instance'
})
