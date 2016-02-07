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
API: `h(tagName, properties, children)`

```js
// TODO: Example usage
```
For now use the [demo](/demo) folder for example usage

```sh
# view the demo in a local browser by pasting this into your terminal:
git clone https://github.com/chinedufn/virtual-loading-dots && cd virtual-loading-dots && npm install && npm run demo
```

## API

#### `LoadingDots(dotColor, borderRadius)` -> `object`

##### dotColor

*Required*

Type: `string`

The color of your dots

##### borderRadius

*Required*

Type: `string`

`0%` for squares, `50%` for circles, anything in between for a hybrid shape

##### Returned Value

Returns an object that exposes a `.render` function

## TODO:

- Defaults for dotColor and borderRadius
- Allow dots to interpolate between two colors
- Add a few different `loadingDots` to demo
- Add documentation to stress importance of framework agnostic components
- Research React and update the  React example

## See Also

- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## License

MIT
