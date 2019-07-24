### 题材
返回一个新链表，这个链表是两个链表相交所得

### 思路
交替赋值，相等的时候退出循环
ha || hb 为空，返回 null
ha 赋值 heada hb 赋值 headb

while heada !== headb
  如果 heada.next 存在就给 heada 赋值
  如果 headb.next 存在就给 headb 赋值
  判断 haed 和 headb 是否相等，相等直接返回
  否则就判断 heada 有值没有，没有值就赋值 headb
  也同样判断 headb 有值没有，没有值就赋值 heada
heada 和 headb 一样就返回 heada

- 这样写 空间O(2) 时间O(n)

### 问题
...