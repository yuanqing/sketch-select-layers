/* eslint-disable eqeqeq */

const selectSame = require('./select-same')

export default selectSame({
  shouldSelectLayer: function (selectedLayer, layer) {
    return selectedLayer.name == layer.name
  }
})
