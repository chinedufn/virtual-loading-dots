var React = require('react')
var ReactDOM = require('react-dom')
var CreateLoadSpinner = require('../')

var dotColor = 'red'
var borderRadius = '50%'

var loadSpinner = CreateLoadSpinner()
var rootNode = loadSpinner.render(React.createElement, dotColor, borderRadius)
var divToMount = document.createElement('div')

ReactDOM.render(React.createElement('div', {}, [
  'React example',
  React.createElement('div', {
    style: {
      height: '6em',
      width: '18em'
    }
  }, [
    rootNode
  ])
]), document.body.appendChild(divToMount))
