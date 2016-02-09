var createKF = require('create-keyframe')
var insertCSS = require('insert-styles')

var KFObj = createKF({
  0: {
    height: '0%',
    width: '0%'
  },
  40: {
    height: '100%',
    width: '100%'
  },
  80: {
    height: '0%',
    width: '0%'
  },
  100: {
    height: '0%',
    width: '0%'
  }
})

insertCSS(KFObj.css)

var animation = KFObj.name + ' 1.8s ease-in-out infinite both'

module.exports = animation
