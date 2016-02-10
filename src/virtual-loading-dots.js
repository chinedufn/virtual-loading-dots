var extend = require('xtend')
var times = require('map-times')
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

  return h('div', {
    // Our div that holds the three dots. It expands to fill its parent
    style: {display: 'flex', height: '100%', width: '100%'}
  }, times(opts.count, renderDot))

  function renderDot (index) {
    var individualContainerStyle = extend(dotContainerStyle, {
      width: (100 / opts.count) + '%'
    })

    var individualDotStyle = extend(animatedDotStyle, {
      animationDelay: (-opts.delay * (opts.count - 1)) + (index * opts.delay) + 's'
    })

    return h('div', {style: individualContainerStyle}, [
      h('div', {style: individualDotStyle})
    ])
  }
}
