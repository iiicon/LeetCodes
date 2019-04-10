/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var arr = []
  var max = nums[0] // 没有考虑负数的情况
  for (var i = 0; i < nums.length; i++) {
    arr = nums.slice(i)
    arr.reduce((prev, cur) => {
      if (prev + cur > max) {
        max = prev + cur
      }
      // console.log(prev, cur, max)
      return prev + cur
    }, 0)
  }
  return max
};