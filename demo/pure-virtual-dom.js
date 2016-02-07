var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var CreateLoadSpinner = require('../')

var dotColor = 'blue'
var borderRadius = '0'

var loadSpinner = CreateLoadSpinner()

var oldLoadSpinnerVtree = loadSpinner.render(h, dotColor, borderRadius)

// Put your load spinner inside a parent div
// It will size itself appropriately
var loadSpinnerInsideParentDiv = h('div#parentContainer', {
  style: {
    height: '6em',
    width: '18em'
  }
}, [
  oldLoadSpinnerVtree
])

var standaloneExample = createElement(h('div', [
  'Pure virtual-dom example',
  loadSpinnerInsideParentDiv
]))

document.body.appendChild(standaloneExample)

/*
// We don't actually need a raf loop here since our component
// since it doesn't accept parameters right now
// So this is just for demonstration / future updates
//
// var diff = require('virtual-dom/diff')
// var patch = require('virtual-dom/patch')
// var Loop = require('raf-loop')
var loop = Loop(function (dt) {
  var newLoadSpinnerVtree = loadSpinner.render(h)
  loadSpinnerElement = patch(loadSpinnerElement, diff(oldLoadSpinnerVtree, newLoadSpinnerVtree))
  oldLoadSpinnerVtree = newLoadSpinnerVtree
})
loop.start()
*/
