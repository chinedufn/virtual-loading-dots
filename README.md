virtual-loading-dots [![npm version](https://badge.fury.io/js/virtual-loading-dots.svg)](http://badge.fury.io/js/virtual-loading-dots) [![Build Status](https://travis-ci.org/chinedufn/virtual-loading-dots.svg?branch=master)](https://travis-ci.org/chinedufn/virtual-loading-dots)
===============

> virtual-dom loading dots component

Currently usable. API is a work in progress and will change

[View live demo](http://chinedufn.github.io/virtual-loading-dots)

## To Install

```
$ npm install --save virtual-loading-dots
```

## Usage

```js
// TODO: Example usage
```

For now use the [demo](/demo) folder as an example

View the component in a browser using `npm run demo`

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

- Accomplish animation without needing to know a background color (i.e. the dots are transparent)
- Accomplish animation without needing to know a width (i.e. using percentages)
- Defaults for dotColor, width, and borderRadius
- potentially allow consumer to specify units (`em`, `px`, etc)
- Allow dots to interpolate between two colors
- Add a few different `loadingDots` to demo

## See Also

- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## License

MIT
