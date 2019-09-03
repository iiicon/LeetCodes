/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (40.98%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    40.1K
 * Total Submissions: 96.3K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let length = nums.length
  let result
  let min = Math.pow(2, 31) - 1
  let temp = nums.sort(function (a, b) { return a - b })

  for (let i = 0; i < temp.length; i++) {

    let j = i + 1
    let k = length - 1

    while (k > j) {
      let sum = temp[i] + temp[j] + temp[k]
      let diff = Math.abs(sum - target)

      if (diff < min) {
        min = diff
        result = sum
      } else if (sum <= target) {
        ++j
      } else {
        --k
      }
    }
  }

  return result

};

