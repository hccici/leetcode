/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const arr = []
  function pre(cur) {
    if (!cur) { return }
    arr.push(cur.val)
    pre(cur.left)
    pre(cur.right)
  }
  pre(root)
  arr.sort((a, b) => {
    return b - a
  })
  return arr[k - 1]
};