/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 这种写法有一个问题就是 2^53 以后就有问题了
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2)

  let arr = []
  for (var i = a.length - 1, j = b.length - 1, carry = false; i >= 0 || j >= 0; i-- , j--) {
    let sum = 0

    if (i >= 0) {
      sum += Number(a[i])
    }

    if (j >= 0) {
      sum += Number(b[j])
    }

    if (carry) {
      sum++
      carry = false
    }

    if (sum >= 2) {
      sum = sum % 2
      carry = true
    }

    arr.unshift(sum)
  }
  if (carry) {
    arr.unshift('1')
  }

  return arr.join('')
};