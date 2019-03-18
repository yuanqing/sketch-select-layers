const selectSame = require('./select-same')

module.exports = selectSame({
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.sharedStyleId == layer.sharedStyleId
  },
  validateLayer: function (layer) {
    const type = layer.type
    return (
      (type == 'Text' || type == 'ShapePath') &&
      typeof layer.sharedStyleId != 'undefined'
    )
  },
  invalidLayerMessage: 'Select a layer with a layer style or text style'
})
