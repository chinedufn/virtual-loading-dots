var extend = require('xtend')
var defaults = require('./default-options.js')
var dotContainerStyle = require('./container_style.js')

module.exports = {
  render: RenderLoadingDots
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
    var individualContainerStyle = extend(dotContainerStyle)
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
    // Our div that holds the three dots. It expands to fill its parent
    style: { display: 'flex', height: '100%', width: '100%' }
  }, loadingDots)

  return renderedLoadSpinner
}
