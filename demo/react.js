var React = require('react')
var ReactDOM = require('react-dom')
var CreateLoadSpinner = require('../')

var rootNode = CreateLoadSpinner.render(React.createElement, {color: 'red', borderRadius: 50, count: 4, delay: '1.0'})
var divToMount = document.createElement('div')

ReactDOM.render(React.createElement('div', {}, [
  'React example',
  React.createElement('div', {
    style: {
      height: '2em',
      width: '6em',
      marginBottom: '3em'
    }
  }, [
    rootNode
  ])
]), document.body.appendChild(divToMount))
