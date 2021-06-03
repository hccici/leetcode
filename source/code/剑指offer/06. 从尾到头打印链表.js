/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let result = []
    let cp = head
    while (cp) {
        result.unshift(cp.val)
        cp = cp.next
    }
    return result
};