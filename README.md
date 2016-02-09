virtual-loading-dots [![npm version](https://badge.fury.io/js/virtual-loading-dots.svg)](http://badge.fury.io/js/virtual-loading-dots) [![Build Status](https://travis-ci.org/chinedufn/virtual-loading-dots.svg?branch=master)](https://travis-ci.org/chinedufn/virtual-loading-dots)
===============

> A stateless loading dots component. Takes on its parent element's width and height

[View live demo](http://chinedufn.github.io/virtual-loading-dots)

Examples:

- [virtual-dom](demo/pure-virtual-dom.js)
- [react](demo/react.js)
- [custom animation](demo/custom-animation.js)

## To Install

```
$ npm install --save virtual-loading-dots
```

## Usage

`virtual-loading-dots` works with [virtual-dom](https://github.com/Matt-Esch/virtual-dom),
[react](https://npmjs.com/package/react), or any other DOM builder with a [hyperscript](https://github.com/Raynos/virtual-hyperscript#hselector-properties-children) style api

```js
var h = require('virtual-dom/h')
var LoadingDots = require('virtual-loading-dots')
LoadingDots.render(h) // returns vtree
```


```sh
# view the demo in a local browser by pasting this into your terminal:
# changes to the `demo` directory will live reload in your browser
git clone https://github.com/chinedufn/virtual-loading-dots && cd virtual-loading-dots && npm install && npm run demo
```

## API

### `LoadingDots.render(h[, opts])` -> `vtree`

#### h

*Required*

Type: `function`

Your `hyperscript` style DOM builder

```js
// standalone virtual-dom example
var h = require('virtual-dom/h')
LoadingDots.render(h)
```

```js
// React example
var React = require('react')
LoadingDots.render(React.createElement)
```

#### Options

*Optional*

Type: `object`

`virtual-loading-dots` comes with [default options](src/default-options.js). Pass in the ones that you'd like to override

```js
// Example overrides
var myOptions = {
  animation: 'my-cool-animation 2.5s ease-in-out infinite both',
  borderRadius: '50',
  color: '#ff0000',
  count: '4',
  delay: '0.3'
}
LoadingDots.render(h, myOptions)
```

##### animation

Type: `string`

Default: use [default-animation](src/default-animation.js#L25) as a reference example

The animation for your dots

##### borderRadius

Type: `number` or `string`

Default: `50`

`0` for squares, `50` for circles, anything in between for a hybrid shape

##### color

Type: `string`

Default: `'black'`

The color of your dots in [css color notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

##### count

Type: `number`

Default: `3`

The number of dots

##### delay

Type: `number`

Default: `0.16`

The [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) between each neighboring dot

## TODO:

- Add a few different `loadingDots` usage examples
- Add documentation to highlight the importance of framework agnostic components
- Research React and update the React example if necessary
- Maybe add .jsx and hyperx examples
- Add a script tag example
- Think about exposing an api to extend the properties of Loading Dots' internal Vnodes

## See Also

- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## License

MIT
