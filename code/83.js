/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) { return head }
    var p1 = head
    var p2 = head.next
    while (p2) {
        if (p1.val === p2.val) {
            p2 = p2.next
            p1.next = p2
        } else {
            p1 = p2
            p2 = p2.next
        }
    }
    return head
};