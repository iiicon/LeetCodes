/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (34.76%)
 * Likes:    99
 * Dislikes: 0
 * Total Accepted:    19.1K
 * Total Submissions: 53.7K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j
 * 的差的绝对值最大为 k。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined && (i - obj[nums[i]] <= k) && (i - obj[nums[i]] !== 0)) {
      return true
    }
    obj[nums[i]] = i
  }
  return false
};

containsNearbyDuplicate([1, 2, 1, 1], 3)
