### 题材
取数组中的两个值，和是target，参数是升序数组和值，返回[index1, index2]

### 思路
遍历数组，从当前位置查找数字 和 target 差值 n，如果找到就返回

### 问题
1. forEach 不能跳出循环
2. indexOf 第二个参数是开始的位置