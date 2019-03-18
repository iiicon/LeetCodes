/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    var arr = []
    while (l1) {
        arr.push(new ListNode(l1.val))
        l1 = l1.next
    }
    while (l2) {
        arr.push(new ListNode(l2.val))
        l2 = l2.next
    }
    arr.sort((a, b) => {
        return a.val - b.val
    })
    if (!arr.length) return null
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1]
    }
    return arr[0]
};