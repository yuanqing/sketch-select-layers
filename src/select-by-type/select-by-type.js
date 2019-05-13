import {
  getSelectedLayersOrLayersOnCurrentPage,
  iterateChildLayers,
  showMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

export default function selectByType ({ key, value, label }) {
  return function () {
    let count = 0
    iterateChildLayers(getSelectedLayersOrLayersOnCurrentPage(), function (
      layer
    ) {
      if (layer[key] === value) {
        layer.selected = true
        count++
        return
      }
      layer.selected = false
    })
    const pluralisedLabel = `${label}s`
    if (count === 0) {
      showMessage(`No ${pluralisedLabel} found`)
      return
    }
    showSuccessMessage(
      `Selected ${count} ${count === 1 ? label : pluralisedLabel}`
    )
  }
}
