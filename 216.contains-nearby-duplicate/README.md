### 题材
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.

### 思路
也是 hashMap 的思路 
把 hash[nums[i]] = i 存下来
如果 key 相等，就可以对比 i

### 问题
题翻译的有问题
