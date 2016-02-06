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

#### `LoadingDots(dotColor, widthEM, parentBackgroundColor, borderRadius)` -> `string`

##### dotColor

**Required**

Type: `string`

The color of your dots

##### widthEM

**Required**

`Type`: number

Width of your entire loading dots component in `em`

##### parentBackgroundColor

**Required**

Type: `string`

The background color of whatever element that you're putting this spinner inside of.
This is currently required because the loading spinners are actually the color of your
`backgroundColor`, and their shadows are the color of your `dotColor`

Ideally the loading spinner would be transparent. Need to figure out a better animation

##### borderRadius

**Required**

Type: `string`

`0%` for squares, `50%` for circles, anything in between for a hybrid shape

## TODO:

- Accomplish animation without needing to know a background color (i.e. the dots are transparent)
- Accomplish animation without needing to know a width (i.e. using percentages)
- Defaults for dotColor, width, and borderRadius
- potentially allow consumer to specify units (`em`, `px`, etc)
- Allow dots to interpolate between two colors

## See Also

- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## License

MIT
