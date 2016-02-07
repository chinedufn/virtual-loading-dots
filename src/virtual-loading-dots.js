var extend = require('xtend')

var defaultAnimation = require('./insert-animation.js')()

module.exports = {
  render: RenderLoadingDots
}

// Pull this out. Make a function that returns the style
// Maybe make width depend on a passed in number of dots
var transparentDotContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  // width: This gets set during rendering
  height: '100%',
  flex: '0 0 auto'
}

var defaults = {
  animation: defaultAnimation,
  borderRadius: 50,
  color: 'black',
  count: 3,
  delay: 0.16
}

function RenderLoadingDots (h, opts) {
  opts = extend(defaults, opts)

  var animatedDotStyle = {
    animation: opts.animation,
    borderRadius: opts.borderRadius + '%',
    backgroundColor: opts.color
  }

  var loadingDots = []

  for (var i = 0; i < opts.count; i++) {
    var individualContainerStyle = extend(transparentDotContainerStyle)
    individualContainerStyle.width = (100 / opts.count) + '%'

    var individualDotStyle = extend(animatedDotStyle)
    individualDotStyle.animationDelay = (-opts.delay * (opts.count - 1)) + (i * opts.delay) + 's'

    loadingDots.push(h('div', { style: individualContainerStyle }, [
      h('div', {
        style: individualDotStyle
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
