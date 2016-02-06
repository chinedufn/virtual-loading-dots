var h = require('virtual-dom/h')
var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')
var createElement = require('virtual-dom/create-element')

var dotColor = 'blue'
var backgroundColor = 'white'
var widthInEm = '18'
var borderRadius = '0'
var loadSpinner = require('../')(dotColor, widthInEm, backgroundColor, borderRadius)

var Loop = require('raf-loop')

var oldLoadSpinnerVtree = loadSpinner.render(h)
var loadSpinnerElement = createElement(oldLoadSpinnerVtree)

document.body.appendChild(loadSpinnerElement)

// We don't actually need a raf loop here since our component
// since it doesn't accept parameters right now
// So this is just for demonstration / future updates
var loop = Loop(function (dt) {
  var newLoadSpinnerVtree = loadSpinner.render(h)
  loadSpinnerElement = patch(loadSpinnerElement, diff(oldLoadSpinnerVtree, newLoadSpinnerVtree))
  oldLoadSpinnerVtree = newLoadSpinnerVtree
})
loop.start()
