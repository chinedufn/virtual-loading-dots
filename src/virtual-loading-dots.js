var extend = require('xtend')

var animationName = require('./insert-animation.js')()

module.exports = {
  render: RenderLoadingDots
}

// Pull this out. Make a function that returns the style
// Maybe make width depend on a passed in number of dots
var baseDotStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '33.33%',
  height: '100%',
  flex: '0 0 auto'
}

function RenderLoadingDots (h, dotColor, borderRadius) {
  var baseStyle = {
    animation: animationName + ' 1.8s ease-in-out infinite both',
    borderRadius: borderRadius,
    backgroundColor: dotColor
  }
  var loadingDots = []
  // Maybe allow the consumer to specify # divs?
  for (var i = 0; i < 3; i++) {
    var style = extend(baseDotStyle)
    var centerStyle = extend(baseStyle)
    centerStyle.animationDelay = (-0.32 + (i * 0.16)) + 's'
    loadingDots.push(h('div', {
      style: style
    }, [
      h('div', {
        style: centerStyle
      })
    ]))
  }

  var renderedLoadSpinner = h('div', {
    style: {
      display: 'flex',
      height: '100%',
      width: '100%'
    }
  }, loadingDots)

  return renderedLoadSpinner
}
