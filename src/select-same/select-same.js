const {
  getAllLayers,
  getSelectedLayers,
  iterateNestedLayers,
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage
} = require('sketch-plugin-helper')

function selectSame ({
  shouldSelectLayer,
  validateLayer,
  invalidLayerMessage
}) {
  return function () {
    const selectedLayers = getSelectedLayers()
    if (selectedLayers.length == 0) {
      showErrorMessage('Select one layer')
      return
    }
    if (selectedLayers.length > 1) {
      showErrorMessage('Select only one layer')
      return
    }
    const selectedLayer = selectedLayers[0]
    if (!validateLayer(selectedLayer)) {
      showErrorMessage(invalidLayerMessage)
      return
    }
    let count = 0
    iterateNestedLayers(getAllLayers(), function (layer) {
      if (layer.selected) {
        return
      }
      if (validateLayer(layer) && shouldSelectLayer(selectedLayer, layer)) {
        layer.selected = true
        count++
        return
      }
      layer.selected = false
    })
    if (count == 0) {
      showWarningMessage('No additional layers selected')
      return
    }
    showSuccessMessage(
      `Selected ${count} additional ${count == 1 ? 'layer' : 'layers'}`
    )
  }
}

module.exports = selectSame
