### 题目
删除已经排序的链表中的重复元素

### 思路
把当前的链表保存到另一个变量上进行数据的操作
如果当前的 val 和 next.val 相等，把 next 赋值为 next.next， 否则就继续往下查找 current = current.next

下图是 head 和 current 的具体值
![1556083848(1).jpg](https://i.loli.net/2019/04/24/5cbff4bc0cdfe.jpg)

### 问题
对象的属性也是对象的话，同样也是共享地址的，没有想清楚