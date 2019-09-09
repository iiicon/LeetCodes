/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (36.76%)
 * Likes:    205
 * Dislikes: 0
 * Total Accepted:    32.8K
 * Total Submissions: 87.2K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1]
  let left = find(nums, target, true)
  let right = find(nums, target, false)
  if (left > right) return [-1, -1]
  return [left, right]

  function find(nums, target, isLeft) {
    let left = 0
    let right = nums.length - 1
    let mid = 0

    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (nums[mid] > target || (isLeft && nums[mid] === target)) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return isLeft ? left : right
  }
};

// var searchRange = function(nums, target) {
//   var l = 0;
//   var r = nums.length - 1;
//   var leftBound = -1;
//   var rightBound = -1;
  
//   while(l <= r){
//       var mid = l + parseInt((r-l)/2);
//       console.log(mid, nums[mid])
//       if(nums[mid] === target){
//           leftBound = mid;
//           r = mid - 1;
//       } else if(nums[mid] > target){
//           r = mid - 1;
//       } else {
//           l = mid + 1;
//       }
//   }
  
//   l = 0;
//   r = nums.length - 1;
  
//   while(l <= r){
//       mid = l + parseInt((r-l)/2);
//       if(nums[mid] === target){
//           rightBound = mid;
//           l = mid + 1;
//       } else if(nums[mid] > target){
//           r = mid - 1;
//       } else {
//           l = mid + 1;
//       }
//   }
  
//   return [leftBound, rightBound];
// };

// searchRange([5,7,7,8,8,10], 6)

