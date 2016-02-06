// Still thinking through the API ...

var extend = require('xtend')
var insertAnimation = require('./insert-animation.js')

// Maybe allow consumer to specify this (px, vh, etc)
var unitsString = 'em'

module.exports = CreateLoadingDots

function CreateLoadingDots (dotColor, widthInEm, backgroundColor, borderRadius) {
  var animationName = insertAnimation(widthInEm, backgroundColor)

  // Pull this out. Make a function that returns the style
  var baseDotStyle = {
    backgroundColor: dotColor,
    width: widthInEm / 3 + unitsString,
    height: widthInEm / 3 + unitsString,
    borderRadius: borderRadius,
    flex: '0 0 auto'
  }

  // We don't want much mutability until (if/when) we figure out a good way
  // to manipulate our animation after it's been inserted
  // So we're only returning a render function with our immutable data curried
  //
  // One option is to have an update or patch function to update the animation
  // (query DOM and overwrite style tag) whenever we get a new width or backgroundColor
  // Which should really only happen when the screen resizes.. but could get messy if
  // the parent component is changing colors every frame

  return {
    // This feels really weird.. but maybe it should feel weird to abstract around more performant CSS animations
    // Keeps thinking this through ...
    render: RenderLoadingDots.bind(null, animationName, backgroundColor, widthInEm, baseDotStyle)
  }
}

function RenderLoadingDots (animationName, backgroundColor, widthInEm, baseDotStyle, h) {
  baseDotStyle.animation = animationName + ' 2.0s ease-in-out infinite both'

  var loadingDots = []
  // Maybe allow the consumer to specify # divs?
  for (var i = 0; i < 3; i++) {
    var style = extend(baseDotStyle)
    style.animationDelay = (-0.32 + (i * 0.16)) + 's'
    loadingDots.push(h('div', { style: style }))
  }

  var renderedLoadSpinner = h('div', {
    style: {
      backgroundColor: backgroundColor,
      display: 'flex',
      width: widthInEm + unitsString
    }
  }, loadingDots)

  return renderedLoadSpinner
}
