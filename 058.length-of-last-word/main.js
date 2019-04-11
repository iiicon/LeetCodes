/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s) return 0
  s = s.trim()
  const i = s.lastIndexOf(' ')
  return s.slice(i + 1).length
};
