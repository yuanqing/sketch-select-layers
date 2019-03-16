/* eslint-disable eqeqeq */

const selectSame = require('./select-same')

export default selectSame({
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.sharedStyleId == layer.sharedStyleId
  },
  validateLayer: function (layer) {
    return (
      (layer.type === 'Text' || layer.type === 'ShapePath') &&
      typeof layer.sharedStyleId != 'undefined'
    )
  },
  invalidLayerMessage: 'Select a layer with a Text or Layer Style'
})
