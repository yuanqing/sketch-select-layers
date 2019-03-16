/* eslint-disable eqeqeq */

const {
  getAllLayers,
  getSelectedLayers,
  iterateNestedLayers,
  showMessage
} = require('sketch-plugin-helper')

export default function () {
  const selectedLayers = getSelectedLayers()
  if (selectedLayers.length == 0) {
    showMessage('Select a layer')
    return
  }
  if (selectedLayers.length > 1) {
    showMessage('Select only one layer')
    return
  }
  const selectedLayerName = selectedLayers[0].name
  iterateNestedLayers(getAllLayers(), function (layer) {
    if (layer.name == selectedLayerName) {
      layer.selected = true
      return
    }
    layer.selected = false
  })
  showMessage('Selected')
}
