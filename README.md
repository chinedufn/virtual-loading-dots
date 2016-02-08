virtual-loading-dots [![npm version](https://badge.fury.io/js/virtual-loading-dots.svg)](http://badge.fury.io/js/virtual-loading-dots) [![Build Status](https://travis-ci.org/chinedufn/virtual-loading-dots.svg?branch=master)](https://travis-ci.org/chinedufn/virtual-loading-dots)
===============

> virtual-dom loading dots component

[View live demo](http://chinedufn.github.io/virtual-loading-dots)

## To Install

```
$ npm install --save virtual-loading-dots
```

Component is currently usable, but the API is a work in progress and will change

## Usage

`virtual-loading-dots` works with [virtual-dom](https://github.com/Matt-Esch/virtual-dom),
[react](https://npmjs.com/package/react), or any other DOM builder with a `hyperscript` style
API:

`h(tagName, properties, children)`

---

For now use the [demo](/demo) folder for example usage

```js
// TODO: Example usage
```

```sh
# view the demo in a local browser by pasting this into your terminal:
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

- Add animation override example
- Add a few different `loadingDots` usage examples
- Add documentation to stress importance of framework agnostic components
- Research React and update the  React example
- Maybe add .jsx and hyperx examples

## See Also

- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## License

MIT
