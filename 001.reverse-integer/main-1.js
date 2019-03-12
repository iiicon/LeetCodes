/**
 * @param {number} x
 * @return {number}
 */

// 第一次提交
var reverse = function(x) {
  var f = x < 0 ? -1 : 1
  x = Math.abs(x)
  var string = x.toString()
  var arr = string.split('').reverse()
  string = arr.join('')
  var num = parseInt(string)
  if (num > 2 ** 31 - 1 || num < 2 ** 31 * -1) {
    return 0
  } else {
    return num * f
  }
}
