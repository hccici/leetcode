/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true
  function pre(cur) {
    if (!cur) {
      return -1
    }
    const leftgDeep = pre(cur.left) + 1
    const rightgDeep = pre(cur.right) + 1
    if (Math.abs(leftgDeep - rightgDeep) > 1) {
      flag = false
    }
    return Math.max(leftgDeep, rightgDeep)
  }
  pre(root)
  return flag
};