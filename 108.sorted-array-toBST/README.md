### 题材

将一个有序数组转化成二叉树搜索树（根节点小于大于左子树，小于右子树，并且左右子树的深度差不超过1）

### 思路

明白二叉树搜索树，其实就已经有思路了，利用二分查找，找数组中的中间项作为根节点，利用递归把左右子树的根节点依次绑定到left和right

### 问题
二叉树搜索树