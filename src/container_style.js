var prefix = require('preflex')

// The three containers that house our dots
var DotContainerStyle = prefix({
  // width: This gets set during rendering
  alignItems: 'center',
  display: 'flex',
  flex: '0 0 auto',
  height: '100%',
  justifyContent: 'space-around'
})

module.exports = DotContainerStyle
