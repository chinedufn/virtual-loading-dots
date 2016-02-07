var extend = require('xtend')

var animationName = require('./insert-animation.js')()

module.exports = {
  render: RenderLoadingDots
}

// Pull this out. Make a function that returns the style
// Maybe make width depend on a passed in number of dots
var transparentDotContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '33.33%',
  height: '100%',
  flex: '0 0 auto'
}

var defaults = {
  color: 'black',
  borderRadius: 0
}

function RenderLoadingDots (h, opts) {
  opts = extend(defaults, opts)

  var animatedDotStyle = {
    animation: animationName + ' 1.8s ease-in-out infinite both',
    borderRadius: opts.borderRadius + '%',
    backgroundColor: opts.color
  }

  var loadingDots = []
  // Maybe allow the consumer to specify # divs?
  for (var i = 0; i < 3; i++) {
    var style = extend(transparentDotContainerStyle)
    var centerStyle = extend(animatedDotStyle)
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

