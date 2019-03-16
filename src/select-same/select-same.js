/* eslint-disable eqeqeq */

const {
  getAllLayers,
  getSelectedLayers,
  iterateNestedLayers,
  showMessage
} = require('sketch-plugin-helper')

function selectSame (shouldSelectLayer) {
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
    iterateNestedLayers(getAllLayers(), function (layer) {
      if (shouldSelectLayer(selectedLayer, layer)) {
        layer.selected = true
        return
      }
      layer.selected = false
    })
    showMessage('Selected')
  }
}

module.exports = selectSame
