const {
  getSelectedOrAllLayers,
  iterateNestedLayers,
  openUserInputDialog,
  saveUserInput,
  showMessage,
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
      possibleValues: ['Any', ...Object.keys(mapTypeLabelToType)]
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
  let hasSelection = false
  iterateNestedLayers(getSelectedOrAllLayers(), function (layer) {
    if (type != 'All' && layer.type != mapTypeLabelToType[type]) {
      return
    }
    if (regularExpression.test(layer.name)) {
      layer.selected = true
      hasSelection = true
      return
    }
    layer.selected = false
  })
  showMessage(hasSelection ? 'Selected' : 'Nothing selected')
}

module.exports = selectByName
