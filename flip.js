'use strict'

module.exports = flip

function flip(a) {
  if(a.length <= 1) {
    return a
  }
  var t = a[0]
  a[0] = a[1]
  a[1] = t
  return a
}
