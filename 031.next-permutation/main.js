/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (30.94%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    21.6K
 * Total Submissions: 68K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let length = nums.length
  let i = length - 2
  let j = length - 1

  while (i >= 0 && nums[i] >= nums[i + 1]) i--

  if (i >= 0) {
    while (j > i && nums[j] <= nums[i]) j--;
    swap(nums, i, j);
    reverse(nums, i + 1, length - 1);
  } else {
    reverse(nums, 0, length - 1)
  }

  function swap(arr, from, to) {
    [arr[from], arr[to]] = [arr[to], arr[from]]
  }

  function reverse(arr, start, end) {
    while (start < end) {
      swap(arr, start, end)
      start++
      end--
    }
  }
};

