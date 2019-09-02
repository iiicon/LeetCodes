/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (22.82%)
 * Likes:    1269
 * Dislikes: 0
 * Total Accepted:    84.5K
 * Total Submissions: 356.8K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   if (nums.length < 3) return []
//   let result = [], hash = {}

//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       if (hash[nums[j]]) {
//         result.push([nums[j]].concat(hash[nums[j]]))
//         hash[nums[j]] = undefined
//       } else {
//         hash[0 - nums[i] - nums[j]] = [nums[i], nums[j]]
//       }
//     }
//   }
//   return result
// };
// var threeSum = function(nums) {
//   var len = nums.length;
//   if(len === 3 && nums[0] + nums[1] + nums[2] ===0) return [nums];
//   var ret = [];
//   var temp = nums.sort(function(a,b){
//       return a-b;
//   });
//   for(var i = 0; i < len; i++){
//     if (i != 0 && temp[i] == temp[i-1]) continue; 
//       var j = i+1,k = len -1;        
//     while(j < k){
//       var sum = temp[i] + temp[j] + temp[k];
//       if(sum === 0){
//         var arr = [temp[i] , temp[j] , temp[k]]
//         ret.push(arr);
//         while (++j < k && temp[j-1] === temp[j]) {}
//         while (--k > j && temp[k+1] === temp[k]) {}
//       }
//       else if(sum < 0){
//         ++j;
//       }
//       else{
//         --k;
//       }
//     }
//   }
//   return ret;

// };

var threeSum = function (nums) {
  let len = nums.length
  if (len === 3 && nums[0] + nums[1] + nums[2] === 0) {
    return [nums]
  }
  let result = []
  let temp = nums.sort((a, b) => a - b)

  for (let i = 0; i < temp.length; i++) {
    if (i !== 0 && temp[i] === temp[i - 1]) continue
    let j = i + 1, k = len - 1
    while (j < k) {
      let sum = temp[i] + temp[j] + temp[k]
      if (sum === 0) {
        result.push([temp[i], temp[j], temp[k]])
        while (++j < k && temp[j] === temp[j - 1]) { continue }
        while (--k > j && temp[k + 1] === temp[k]) { continue }
      } else if (sum > 0) {
        --k
      } else {
        ++j
      }
    }

  }

  return result
}