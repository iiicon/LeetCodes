### 题目
取一个数字的平方根，有小数的时候取整数部分

### 思路
- Math.sqrt
- 利用二分法的思想，一直取中间值，当 left 比 right 大的时候，返回 right，不大的时候，若 mid 平方和 x 相等，就返回 mid， 否则就一直计算 mid，改变 left 和 right 的值

### 问题
正常是肯定用 Math 的 api 操作，二分法虽然计算效率比较高