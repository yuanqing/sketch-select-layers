import selectSame from '../select-same'

export default selectSame({
  validateLayer: function () {
    return true
  },
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.name === layer.name
  }
})
