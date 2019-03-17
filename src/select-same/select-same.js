const {
  getAllLayers,
  getSelectedLayers,
  iterateNestedLayers,
  showMessage
} = require('sketch-plugin-helper')

function selectSame ({
  shouldSelectLayer,
  validateLayer,
  invalidLayerMessage
}) {
  return function () {
    const selectedLayers = getSelectedLayers()
    if (selectedLayers.length == 0) {
      showMessage('Select a layer')
      return
    }
    if (selectedLayers.length > 1) {
      showMessage('Select only one layer')
      return
    }
    const selectedLayer = selectedLayers[0]
    if (validateLayer && !validateLayer(selectedLayer)) {
      showMessage(invalidLayerMessage)
      return
    }
    iterateNestedLayers(getAllLayers(), function (layer) {
      if (
        validateLayer &&
        validateLayer(layer) &&
        shouldSelectLayer(selectedLayer, layer)
      ) {
        layer.selected = true
        return
      }
      layer.selected = false
    })
    showMessage('Selected')
  }
}

module.exports = selectSame
