var React = require('react')
var ReactDOM = require('react-dom')
var LoadingDots = require('../')

var rootNode = LoadingDots.render(React.createElement, {color: 'red', borderRadius: 50, direction: 'column', count: 4, delay: '1.0'})
var divToMount = document.createElement('div')

ReactDOM.render(React.createElement('div', {}, [
  'React example',
  React.createElement('div', {
    style: {
      height: '8em',
      width: '2em',
      marginBottom: '3em'
    }
  }, [
    rootNode
  ])
]), document.body.appendChild(divToMount))
