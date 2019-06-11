### 题材
从底到上依次遍历二叉树，返回一个二维数组，遇见null跳过

### 思路
如果 root 是 null，返回 []
定义一个 queue = [] 用来存放节点val
根据每一个 level 与 queue 的长度，往 queue 里 unshift 一个 []

定义一个函数 search(root, level), 根据 level 选出每一个 root 对应的数组，把当前节点的 val push 进去，递归操作左右子树
最后返回这个二维数组

### 问题
不想写了，思路不清楚