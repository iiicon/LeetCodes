/** 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var reg = /[^\(\)\[\]\{\}]/
  while (reg.test(s)) {
    s = s.replace(reg, '')
  }
  var arr = []
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      arr.push(')')
    } else if (s.charAt(i) === '[') {
      arr.push(']')
    } else if (s.charAt(i) === '{') {
      arr.push('}')
    } else if (arr.pop() !== s.charAt(i)) {
      return false
    }
  }
  return !arr.length
};