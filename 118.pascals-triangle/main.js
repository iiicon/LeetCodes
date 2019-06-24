/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (61.86%)
 * Likes:    157
 * Dislikes: 0
 * Total Accepted:    26.4K
 * Total Submissions: 42.1K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],       1
 * ⁠   [1,1],      2
 * ⁠  [1,2,1],     3
 * ⁠ [1,3,3,1],    4
 * ⁠[1,4,6,4,1],   5
 *[1,5,10,10,5,1] 6
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = Array.from({ length: numRows })

  for (let i = 0; i < numRows; i++) {
    result[i] = Array.from({ length: (i + 1) })
    result[i].forEach((x, index) => {
      if (index === 0) {
        result[i][index] = 1
      } else if (i === index) {
        result[i][index] = 1
      } else {
        result[i][index] = result[i - 1][index - 1] + result[i - 1][index]
      }
    })
  }

  return result
};