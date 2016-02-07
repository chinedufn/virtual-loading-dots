var React = require('react')
var ReactDOM = require('react-dom')
var CreateLoadSpinner = require('../')

var dotColor = 'red'
var backgroundColor = 'white'
var widthInEm = '12'
var borderRadius = '50%'

var loadSpinner = CreateLoadSpinner(dotColor, widthInEm, backgroundColor, borderRadius)
var rootNode = loadSpinner.render(React.createElement)
var divToMount = document.createElement('div')

ReactDOM.render(React.createElement('div', {}, [
  'React example',
  rootNode
]), document.body.appendChild(divToMount))
