var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var LoadSpinner = require('../')

var oldLoadSpinnerVtree = LoadSpinner.render(h, {color: 'blue', borderRadius: '0'})

// Put your load spinner inside a parent div
// It will size itself appropriately
var loadSpinnerInsideParentDiv = h('div#parentContainer', {
  style: {
    height: '3em',
    width: '9em',
    marginBottom: '3em'
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
// If you wanted a raf loop
//
// var diff = require('virtual-dom/diff')
// var patch = require('virtual-dom/patch')
// var Loop = require('raf-loop')
var loop = Loop(function (dt) {
  var newLoadSpinnerVtree = LoadSpinner.render(h)
  loadSpinnerElement = patch(loadSpinnerElement, diff(oldLoadSpinnerVtree, newLoadSpinnerVtree))
  oldLoadSpinnerVtree = newLoadSpinnerVtree
})
loop.start()
*/
