/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var i = digits.length - 1
  while (i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0

      if (i === 0) {
        digits.unshift(1)
        break
      }

      if (digits[i - 1] === 9) {
        digits[i - 1] === 0
        i--
      } else {
        digits[i - 1] += 1
        break
      }
    } else {
      digits[i] += 1
      break
    }
  }
  return digits

};
