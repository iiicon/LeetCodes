/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (55.61%)
 * Likes:    72
 * Dislikes: 0
 * Total Accepted:    16.8K
 * Total Submissions: 29.7K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1] 
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function (rowIndex) {
//   rowIndex = rowIndex + 1
//   var result = Array.from({ length: rowIndex })

//   for (let i = 0; i < rowIndex; i++) {
//     result[i] = Array.from({ length: (i + 1) })
//     result[i].forEach((x, index) => {
//       if (index === 0) {
//         result[i][index] = 1
//       } else if (i === index) {
//         result[i][index] = 1
//       } else {
//         result[i][index] = result[i - 1][index - 1] + result[i - 1][index]
//       }
//     })
//   }

//   return result[rowIndex - 1]
// };

var getRow = function (rowIndex) {
  var row = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (j === i) {
        row[j] = 1
      } else {
        row[j] = row[j - 1] + row[j]
      }
    }
  }
  return row;
};