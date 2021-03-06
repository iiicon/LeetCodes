/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 *
 * https://leetcode-cn.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (48.73%)
 * Likes:    155
 * Dislikes: 0
 * Total Accepted:    68K
 * Total Submissions: 137.9K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//   if (!nums.length) return false

//   let o = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (o[nums[i]]) {
//       return true
//     } else {
//       o[nums[i]] = true
//     }
//   }
//   return false
// };

var containsDuplicate = function(nums) {
  if (!nums.length) return false
  let arr = [...new Set(nums)]
  return arr.length !== nums.length
}

