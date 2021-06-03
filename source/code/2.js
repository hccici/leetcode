/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * } 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var l3 = new ListNode(0);
    var p1 = l1;
    var p2 = l2;
    var p3 = l3;
    var carry = 0; // 处理进位用的
    while (p1 || p2) {
        var v1 = p1 ? p1.val : 0;
        var v2 = p2 ? p2.val : 0;
        var val = v1 + v2 + carry;
        p3.next = new ListNode(val % 10)
        carry = Math.floor(val / 10)
        // 指针移动
        p1 && (p1 = p1.next)
        p2 && (p2 = p2.next)
        p3 = p3.next
    }
    // 注意两最高位相加，会新增一位
    if (carry !== 0) {
        p3.next = new ListNode(1)
    }
    return l3.next;
};