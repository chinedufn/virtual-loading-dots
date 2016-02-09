var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var LoadingDots = require('../')

var createKF = require('create-keyframe')
var insertCSS = require('insert-css')

var keyframeObj = createKF({
  0: {
    'margin-top': '0em',
    'background-color': 'red',
    height: '0%',
    width: '0%'
  },
  40: {
    'background-color': 'blue',
    'margin-top': '5em',
    height: '100%',
    width: '100%'
  },
  80: {
    'background-color': 'red',
    'margin-top': '-5em',
    height: '0%',
    width: '0%'
  },
  100: {
    'margin-top': '0em',
    'background-color': 'red',
    height: '0%',
    width: '0%'
  }
})

if (process.browser) insertCSS(keyframeObj.css)

var animation = keyframeObj.name + ' 5.5s ease-in-out infinite both'

var loadSpinner = LoadingDots.render(h, {animation: animation})

var loadSpinnerInsideParentDiv = h('div', {
  style: {
    height: '6em',
    width: '18em'
  }
}, [
  loadSpinner
])

var customerAnimationExample = createElement(h('div', [
  'Custom animation example',
  loadSpinnerInsideParentDiv
]))

document.body.appendChild(customerAnimationExample)
