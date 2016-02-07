var createKF = require('create-keyframe')
var insertCSS = require('insert-css')

module.exports = InsertAnimation

// We insert our animation into the DOM, and return
// an animation property value
// This will only happen once in your consumer application
function InsertAnimation () {
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
  var name = KFObj.name
  if (process.browser) {
    insertCSS(KFObj.css)
  }

  return name + ' 1.8s ease-in-out infinite both'
}
