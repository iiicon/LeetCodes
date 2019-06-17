/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (47.36%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    18.8K
 * Total Submissions: 39.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 
 * 
 * 示例 1:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回 true 。
 * 
 * 示例 2:
 * 
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * 返回 false 。
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isBalanced = function(root) {
//   if (root === null) return true

//   return istrue(root)

//   function istrue(root) {
//     if (root) {
//       if (root.left === null) {
//         if (root.right && (root.right.left || root.right.right)) {
//           return false
//         } else {
//           istrue(root.right)
//         }
//       } else if (root.right === null) {
//         if (root.left && (root.left.left || root.left.right)) {
//           return false
//         } else {
//           istrue(root.left)
//         }
//       } else {
//         istrue(root.left) 
//         istrue(root.right)
//       }
//     }
//   }
// };

var isBalanced = function (root) {
  if (root === null) return true
  let val = height(root) - height(root, 1)
  if (val > 1) {
    return false
  } else {
    return isBalanced(root.left) && isBalanced(root.right)
  }

  function height(root, d) {
    if (root === null) {
      return 0
    }
    if (d === 1) {
      return Math.min(height(root.left), height(root.right)) + 1
    } else {
      return Math.max(height(root.left), height(root.right)) + 1
    }
  }
}