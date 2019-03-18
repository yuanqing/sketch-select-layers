const {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  openUserInputDialog,
  saveUserInput,
  showSuccessMessage,
  showWarningMessage,
  CHECK_BOX,
  DROP_DOWN,
  TEXT_BOX
} = require('sketch-plugin-helper')

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

function selectByName () {
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
    if (
      (type == 'Hidden' && !layer.hidden) ||
      (type != 'All' && layer.type != mapTypeLabelToType[type]) ||
      !regularExpression.test(layer.name)
    ) {
      layer.selected = false
      return
    }
    layer.selected = true
    count++
  })
  if (count == 0) {
    showWarningMessage('Nothing selected')
    return
  }
  showSuccessMessage(`Selected ${count} ${count == 1 ? 'layer' : 'layers'}`)
}

module.exports = selectByName
