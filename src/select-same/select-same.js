import {
  getLayersOnCurrentPage,
  getSelectedLayers,
  iterateChildLayers,
  showErrorMessage,
  showMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

export default function selectSame ({
  validateLayer,
  shouldSelectLayer,
  invalidLayerMessage
}) {
  return function () {
    const selectedLayers = getSelectedLayers()
    if (selectedLayers.length === 0) {
      showErrorMessage('Select 1 layer')
      return
    }
    if (selectedLayers.length > 1) {
      showErrorMessage('Select only 1 layer')
      return
    }
    const selectedLayer = selectedLayers[0]
    if (!validateLayer(selectedLayer)) {
      showErrorMessage(invalidLayerMessage)
      return
    }
    let count = 0
    iterateChildLayers(getLayersOnCurrentPage(), function (layer) {
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
    if (count === 0) {
      showMessage('No additional layers selected')
      return
    }
    showSuccessMessage(
      `Selected ${count} additional ${count === 1 ? 'layer' : 'layers'}`
    )
  }
}
