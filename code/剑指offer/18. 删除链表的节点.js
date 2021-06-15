/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (!head) {
    return head
  }
  if (head.val === val) {
    return head.next
  }
  let preP = head
  let nextP = head.next
  while (nextP) {
    if (nextP.val === val) {
      preP.next = nextP.next
      nextP = null
    } else {
      nextP = nextP.next
      preP = preP.next
    }
  }
  return head
};