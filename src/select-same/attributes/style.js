import selectSame from '../select-same'

export default selectSame({
  validateLayer: function (layer) {
    const type = layer.type
    return (
      (type === 'Text' || type === 'ShapePath') &&
      typeof layer.sharedStyleId === 'string'
    )
  },
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.sharedStyleId === layer.sharedStyleId
  },
  invalidLayerMessage: 'Select a layer with a layer style or text style'
})
