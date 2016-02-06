var createKF = require('create-keyframe')
var insertCSS = require('insert-css')

module.exports = InsertAnimation

// TODO: Accomplish this animation without needing
// parents background color
function InsertAnimation (width, parentBackgroundColor) {
  var dotDiameter = width / 3
  // Slightly bigger than the radius
  var spreadRadius = 'calc(.6 * ' + dotDiameter + 'em)'

  var KFObj = createKF({
    0: {
      'box-shadow': 'inset 0 0 0 0 ' + parentBackgroundColor
    },
    40: {
      'box-shadow': 'inset 0 0 0 ' + spreadRadius + ' ' + parentBackgroundColor
    },
    70: {
      'box-shadow': 'inset 0 0 0 ' + spreadRadius + ' ' + parentBackgroundColor
    },
    100: {
      'box-shadow': 'inset 0 0 0 0 ' + parentBackgroundColor
    }
  })
  var name = KFObj.name
  if (process.browser) {
    insertCSS(KFObj.css)
  }

  return name
}
