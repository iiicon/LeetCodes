### 思路
- 刚开始想的是完全用正则做，但是越想越复杂，太抽象，情况也太多了
- 后来就直接用数组入栈出栈的形式，先把括号都筛选出来，如果进入和出来的 item 是一致的，就可以说明是有效括号
- 按照题的意思需要把不是括号的字符串去掉

### 问题
- 第一次做的时候也没什么问题，最大的问题就是思路不对