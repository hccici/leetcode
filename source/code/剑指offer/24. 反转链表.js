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
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let p1 = head
  let p2 = head.next
  let p3 = head.next.next
  p1.next = null
  while (p3) {
    p2.next = p1
    p1 = p2
    p2 = p3
    p3 = p3.next
  }
  p2.next = p1
  return p2
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const p = new ListNode(1)
let tt = [2, 3, 4, 5]
tt.reduce((node, val) => {
  node.next = new ListNode(val)
  return node.next
}, p)
let cp = p
while (cp) {
  console.log(cp.val)
  cp = cp.next
}