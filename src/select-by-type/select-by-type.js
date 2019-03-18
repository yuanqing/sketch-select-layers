const {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  showMessage
} = require('sketch-plugin-helper')

function selectByType ({ key, value, label }) {
  return function () {
    let hasSelection = false
    iterateNestedLayers(getSelectedOrAllLayers(), function (layer) {
      if (layer[key] == value) {
        layer.selected = true
        hasSelection = true
        return
      }
      layer.selected = false
    })
    showMessage(hasSelection ? `Selected ${label}` : `No ${label} selected`)
  }
}

module.exports = selectByType
