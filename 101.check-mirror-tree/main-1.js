/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  if (root === null) return true
  if (root.left === null) return !root.right
  if (root.right === null) return !root.left

  return isMirror(root.left, root.right)


  function isMirror(a, b) {
    if (a === null) return b === null
    if (b === null) return a === null
    return a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left)
  }

};