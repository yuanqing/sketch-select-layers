const {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  showWarningMessage,
  showSuccessMessage
} = require('sketch-plugin-helper')

function selectByType ({ key, value, label }) {
  return function () {
    let count = 0
    iterateNestedLayers(getSelectedOrAllLayers(), function (layer) {
      if (layer[key] == value) {
        layer.selected = true
        count++
        return
      }
      layer.selected = false
    })
    const pluralisedLabel = `${label}s`
    if (count == 0) {
      showWarningMessage(`No ${pluralisedLabel} selected`)
      return
    }
    showSuccessMessage(
      `Selected ${count} ${count == 1 ? label : pluralisedLabel}`
    )
  }
}

module.exports = selectByType
