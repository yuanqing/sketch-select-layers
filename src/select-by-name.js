/* eslint-disable eqeqeq */

const {
  getAllLayers,
  iterateNestedLayers,
  openUserInputDialog,
  saveUserInput,
  showMessage,
  CHECK_BOX,
  TEXT_BOX
} = require('sketch-plugin-helper')

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
    }
  ]
}

export default function () {
  const userInput = openUserInputDialog(userInputConfig)
  if (userInput) {
    saveUserInput(userInput)
  }
  const layerName = userInput['selectByName.layerName']
  const regularExpression = new RegExp(
    userInput['selectByName.exactMatch'] == 'true'
      ? `^${layerName}$`
      : layerName
  )
  let hasSelection = false
  iterateNestedLayers(getAllLayers(), function (layer) {
    if (regularExpression.test(layer.name)) {
      layer.selected = true
      hasSelection = true
      return
    }
    layer.selected = false
  })
  showMessage(hasSelection ? 'Selected' : 'Nothing selected')
}
