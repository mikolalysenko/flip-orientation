'use strict'

var tape = require('tape')
var orientation = require('cell-orientation')
var flip = require('../flip')

tape('flip orientation', function(t) {

  for(var i=0; i<100; ++i) {
    var c = new Array(3)
    for(var j=0; j<3; ++j) {
      c[j] = (Math.random()*10)|0
    }
    var expected = orientation(c)
    var actual = orientation(flip(c))
    t.equals(actual, expected)
  }

  t.end()
})
