/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (40.02%)
 * Likes:    91
 * Dislikes: 0
 * Total Accepted:    40.4K
 * Total Submissions: 100.8K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[^a-zA-Z0-9]+/g
  s = s.replace(reg, '').toLowerCase()
  if (!s || s.length === 1) return true
  let arr = s.split('')
  let result = false
  while (arr.length > 1) {
    if (arr.pop() === arr.shift()) {
      result = true
    } else {
      return false
    }
  }
  return result
};