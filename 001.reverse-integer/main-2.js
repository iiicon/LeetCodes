/**
 * @param {number} x
 * @return {number}
 */

// 第二次提交
var reverse = function(x) {
  var f = x < 0 ? -1 : 1
  x = x * f
  var n = 0
  while (x !== 0) {
    n = (x % 10) + n * 10
    x = Math.floor(x / 10)
  }
  if (n > 2 ** 31 - 1 || n < 2 ** 31 * -1) {
    return 0
  } else {
    return n * f
  }
}

var n = reverse(120)
console.log(n)