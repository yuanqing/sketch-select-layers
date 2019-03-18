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
      showErrorMessage('Select a layer')
      return
    }
    if (selectedLayers.length > 1) {
      showErrorMessage('Select only one layer')
      return
    }
    const selectedLayer = selectedLayers[0]
    if (validateLayer && !validateLayer(selectedLayer)) {
      showErrorMessage(invalidLayerMessage)
      return
    }
    let count = 0
    iterateNestedLayers(getAllLayers(), function (layer) {
      if (layer.selected) {
        return
      }
      if (
        (validateLayer && !validateLayer(layer)) ||
        !shouldSelectLayer(selectedLayer, layer)
      ) {
        layer.selected = false
        return
      }
      layer.selected = true
      count++
    })
    if (count == 0) {
      showWarningMessage('No new layers selected')
      return
    }
    showSuccessMessage(`Selected ${count} ${count == 1 ? 'layer' : 'layers'}`)
  }
}

module.exports = selectSame
