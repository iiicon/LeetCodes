/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (62.25%)
 * Likes:    505
 * Dislikes: 0
 * Total Accepted:    77.6K
 * Total Submissions: 122.7K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 如果只有两层 a->b
 * 1. 定义递归函数功能
 * 2. 寻找结束条件
 * 3. 寻找等价关系 
 * reverseList(head) ---> reverseList(head.next) + 改变1 2 节点的指向
 */
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  let newList = reverseList(head.next)

  let t1 = head.next
  t1.next = head
  head.next = null

  return newList
}

