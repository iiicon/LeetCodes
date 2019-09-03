### 题材

算三数之和最接近 target 的值

### 思路

遍历数组 i，计算下标 j = i + 1, k = length - 1， 数组排序
只要 k 大于 j，就一直计算 sum diff=sum-target
如果 diff 更小，就更新 sum
如果 sum 比 target 小，移动 j ++j
如果 sum 比 target 大，移动 k ++k
最后返回sum

### 问题

sort的时候默认是按照转字符串，unicode排序的