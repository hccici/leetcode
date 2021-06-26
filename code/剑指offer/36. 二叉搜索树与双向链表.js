/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) { return null }
  //  根据二叉搜索树的特性，中序遍历的结果是有序的
  let pre, head
  function order(cur) {
    if (!cur) {
      return
    }
    order(cur.left)
    // 因为pre会随着遍历指向节点，所以当pre为undefined时，说明正在访问第一个节点
    if (!pre) {
      head = cur // 设置链表头
    } else {
      pre.right = cur
    }
    cur.left = pre
    pre = cur
    order(cur.right)
  }
  order(root)
  // 中序遍历结束后pre会指向最后一个访问的节点
  head.left = pre
  pre.right = head
  return head
};