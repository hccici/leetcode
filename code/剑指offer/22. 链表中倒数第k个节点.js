/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/* var getKthFromEnd = function (head, k) {
  //  获取链表个数
  let count = 0
  let p = head
  while (p) {
    p = p.next
    count++
  }
  let t = count - k
  let p1 = head
  while (t) {
    p1 = p1.next
    t--
  }
  return p1
}; */
var getKthFromEnd = function (head, k) {
  let fast = head
  let low = head
  // 快指真先走k步
  while (k) {
    fast = fast.next
    k--
  }
  // 一起走
  while (fast) {
    low = low.next
    fast = fast.next
  }
  return low
};