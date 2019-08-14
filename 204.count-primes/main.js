/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.43%)
 * Likes:    178
 * Dislikes: 0
 * Total Accepted:    22.6K
 * Total Submissions: 77.5K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function (n) {
//   let o = {}
//   for (var i = 2; i < n; i++) {
//     if (o[i]) {
//       continue
//     }
//     if (isPrimeNum(i)) {
//       o[i] = true
//     } else {
//       o[i] = false
//     }
//   }
//   let count = Object.values(o).filter(Boolean).length
//   return count
// };

// function isPrimeNum(num) {
//   if (!isNum(num)) {
//     return false;
//   }
//   if (!isDual(num)) {
//     return false;
//   }
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   };
//   return true;
// }

// function isNum(num) {
//   return num == +num ? true : false;
// }
// function isDual(num) {
//   var num = num.toString();
//   var lastNum =  num.toString().split('')[-1]
//   return lastNum % 2 == 0 || lastNum % 5 == 0 ? false : true;
// }

// function isPrimeNum2(num) {
//   return !/^.?$|^(..+?)\1+$/.test(Array(num + 1).join('1'))
// }


var countPrimes = function(n) {
  const primes = Array(n).fill(true)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      count++
      for (let j = 2; i * j < n; j++) {
        primes[i * j] = false
      }
    }
  }
  return count  
};

