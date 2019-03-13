/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // if (strs.length <= 1) { 一个的时候哪有什么公共的啊
  //     return ''
  // }  
  var refer = strs[0] || '';
  var commonLength = refer.length

  for (var i = 1; i < strs.length; i++) {
    for (var j = 0; j < commonLength; j++) {
      if (strs[i].charAt(j) !== refer.charAt(j)) {
        commonLength = j
        break
      }
    }
  }

  return refer.slice(0, commonLength)
};