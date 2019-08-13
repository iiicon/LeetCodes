### 题材
给定一个数，去除链表中和这个数重复的树，返回链表

### 思路
1. 先判断最外层是否相等，相等就 head=head.next,否则 break
2. 然后把处理过的最外层不相等的链表赋值给 linked
3. 接下来思路基本就一样了，因为 linked.next 和 head.next 共享一个地址，所以我们操作 linked 就可以
4. 如果 linked.val === val 就 linked.next = linked.next.next, 否则就循环 赋值 linked = linked.next 就可以了
5. 最后返回 head 就可以了

### 问题

最外层的那一步处理  自己想复杂了