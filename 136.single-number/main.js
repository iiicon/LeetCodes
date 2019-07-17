/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (61.61%)
 * Likes:    749
 * Dislikes: 0
 * Total Accepted:    80.5K
 * Total Submissions: 129.6K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//   if (nums.length < 1) return
//   nums.forEach((item, i) => {
//     let index = nums.indexOf(item)
//     if (index !== i) {
//       nums.splice(i, 1)
//       nums.splice(index, 1)
//       i -= 2 // 为了改变i 变为for循环
//     }
//   })

//   return nums[0]
// };

// var singleNumber = function (nums) {
//   if (nums.length < 1) return
//   for (let i = 0; i < nums.length; i++) {
//     let index = nums.indexOf(nums[i])
//     if (index !== i) {
//       nums.splice(i, 1)
//       nums.splice(index, 1)
//       i -= 2
//     }
//   }
// return nums[0]
// };

// 挖槽 这个太。。
/**
 * ^ 如果对应两个操作位有且仅有一个1时结果为1，其他都是0。
 *  利用这个属性，在相同的数字时肯定返回 0
 *  剩下那个值就是要返回的值
 */
function singleNumber(nums) {
  return nums.reduce((prev, curr) => prev ^ curr, 0);
}

singleNumber([1, 3, 1, -1, 3])