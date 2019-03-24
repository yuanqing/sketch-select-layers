import {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  openSettingsDialog,
  saveTemporarySettings,
  showMessage,
  showSuccessMessage,
  CHECK_BOX,
  DROP_DOWN,
  TEXT_BOX
} from 'sketch-plugin-helper'

// prettier-ignore
const mapTypeLabelToType = {
  'Artboard': 'Artboard',
  'Group': 'Group',
  'Text Layer': 'Text',
  'Shape Layer': 'ShapePath',
  'Symbol Instance': 'SymbolInstance',
  'Image': 'Image',
  'Slice': 'Slice',
  'Hotspot': 'HotSpot'
}

const settingsConfig = {
  title: 'Select By Name',
  inputs: [
    {
      type: TEXT_BOX,
      key: 'selectByName.layerName',
      label: 'Layer name'
    },
    {
      type: CHECK_BOX,
      key: 'selectByName.exactMatch',
      label: 'Exact match'
    },
    {
      type: DROP_DOWN,
      key: 'selectByName.type',
      label: 'Type',
      possibleValues: ['Any', ...Object.keys(mapTypeLabelToType), 'Hidden']
    }
  ]
}

export default function selectByName () {
  const settings = openSettingsDialog(settingsConfig)
  if (!settings) {
    return
  }
  saveTemporarySettings(settings)
  const layerName = settings['selectByName.layerName']
  const regularExpression = new RegExp(
    settings['selectByName.exactMatch'] === 'true'
      ? `^${layerName}$`
      : layerName
  )
  const type = settings['selectByName.type']
  let count = 0
  iterateNestedLayers(getSelectedOrAllLayers(), function (layer) {
    if (shouldSelectLayer({ layer, type, regularExpression })) {
      layer.selected = true
      count++
      return
    }
    layer.selected = false
  })
  if (count === 0) {
    showMessage('Nothing selected')
    return
  }
  showSuccessMessage(`Selected ${count} ${count === 1 ? 'layer' : 'layers'}`)
}

function shouldSelectLayer ({ layer, type, regularExpression }) {
  if (type === 'Hidden' && !layer.hidden) {
    return false
  }
  if (
    type !== 'Any' &&
    type !== 'Hidden' &&
    layer.type !== mapTypeLabelToType[type]
  ) {
    return false
  }
  return regularExpression.test(layer.name)
}
