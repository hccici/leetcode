import { NodeList, ListNode, nodeListUtil } from './util/index.js'
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
  if (!head) {
    return head
  }
  const _n = new ListNode(0, head)
  let p1 = _n
  let p2 = _n.next
  let flag = false
  while (p2.next) {
    if (p2.next.val === p2.val) {
      flag = true
      p2 = p2.next
    } else {
      if (flag) {
        flag = false
        p1.next = p2.next
        p2 = p1.next
      } else {
        p1 = p1.next
        p2 = p2.next
      }
    }
  }
  // !最后的重复flag为ture的要删除
  if (flag) {
    p1.next = p2.next
  }
  return _n.next
};
const nl = new NodeList([])
const dl = nodeListUtil.getArray(deleteDuplicates())
console.log(dl)