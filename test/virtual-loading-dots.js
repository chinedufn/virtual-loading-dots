var test = require('tape')
var LoadingDots = require('../')
var h = require('virtual-dom').h

// For now let's just test that it doesn't break in node/browser
test('test running in ' + (process.browser ? 'browser' : 'node'), function (t) {
  LoadingDots.render(h)
  LoadingDots.render(h, {color: 'red', borderRadius: 50})
  t.pass()
  t.end()
})
