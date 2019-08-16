### 题材
反转单链表

### 思路
递归
定义函数功能 - 反转
寻找函数结束条件 - head === null 或者 head.next === null
寻找等价关系 -
1. newList = reverseList(head.next)
2. 需要改变 t1 和 head 指向
3. t1 = head.next; t1.next = head; head.next = null
4. 返回 newList

### 问题
递归套路