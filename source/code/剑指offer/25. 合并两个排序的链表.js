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
  let p1 = l1
  let p2 = l2
  let result = new ListNode(1)
  let cp = result
  while (p1 && p2) {
    if (p1.val < p2.val) {
      cp.next = p1
      p1 = p1.next
    } else {
      cp.next = p2
      p2 = p2.next
    }
    cp = cp.next
  }
  if (p1) {
    cp.next = p1
  } else {
    cp.next = p2
  }
  return result.next
};