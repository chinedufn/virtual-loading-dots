var test = require('tape')
var LoadingDots = require('../')
var h = require('virtual-dom').h

// For now let's just test that it doesn't break in node/browser
test('test running in ' + (process.browser ? 'browser' : 'node'), function (t) {
  var loadingDots = LoadingDots('red', 18, 'white', '25%')
  loadingDots.render(h)
  t.pass()
  t.end()
})
