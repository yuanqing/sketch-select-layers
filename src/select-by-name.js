import {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  openUserInputDialog,
  saveUserInput,
  showSuccessMessage,
  showWarningMessage,
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

const userInputConfig = {
  title: 'Select By Name',
  inputs: [
    {
      key: 'selectByName.layerName',
      label: 'Layer name',
      type: TEXT_BOX
    },
    {
      key: 'selectByName.exactMatch',
      label: 'Exact match',
      type: CHECK_BOX
    },
    {
      key: 'selectByName.type',
      label: 'Type',
      type: DROP_DOWN,
      possibleValues: ['Any', ...Object.keys(mapTypeLabelToType), 'Hidden']
    }
  ]
}

export default function selectByName () {
  const userInput = openUserInputDialog(userInputConfig)
  if (!userInput) {
    return
  }
  saveUserInput(userInput)
  const layerName = userInput['selectByName.layerName']
  const regularExpression = new RegExp(
    userInput['selectByName.exactMatch'] == 'true'
      ? `^${layerName}$`
      : layerName
  )
  const type = userInput['selectByName.type']
  let count = 0
  iterateNestedLayers(getSelectedOrAllLayers(), function (layer) {
    if (shouldSelectLayer({ layer, type, regularExpression })) {
      layer.selected = true
      count++
      return
    }
    layer.selected = false
  })
  if (count == 0) {
    showWarningMessage('Nothing selected')
    return
  }
  showSuccessMessage(`Selected ${count} ${count == 1 ? 'layer' : 'layers'}`)
}

function shouldSelectLayer ({ layer, type, regularExpression }) {
  if (type == 'Hidden' && !layer.hidden) {
    return false
  }
  if (
    type != 'Any' &&
    type != 'Hidden' &&
    layer.type != mapTypeLabelToType[type]
  ) {
    return false
  }
  return regularExpression.test(layer.name)
}
