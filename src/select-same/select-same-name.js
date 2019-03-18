const selectSame = require('./select-same')

module.exports = selectSame({
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.name == layer.name
  },
  validateLayer: function () {
    return true
  }
})
