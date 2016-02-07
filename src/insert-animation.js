var createKF = require('create-keyframe')
var insertCSS = require('insert-css')

module.exports = InsertAnimation

// TODO: Accomplish this animation without needing
// parents background color
function InsertAnimation (width) {
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

  return name
}
