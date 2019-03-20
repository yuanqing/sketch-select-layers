import selectSame from './select-same'

export default selectSame({
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.name == layer.name
  },
  validateLayer: function () {
    return true
  }
})
