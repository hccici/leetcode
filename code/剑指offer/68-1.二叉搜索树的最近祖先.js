import { treeUtil } from '../util/index.js';
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > q.val) {
    let temp = p
    p = q
    q = temp
  }
  const stack = [root]
  while (stack.length) {
    const cur = stack.shift()
    if (p.val < cur.val && q.val > cur.val) {
      return cur
    } else if (p.val === cur.val) {
      return p
    } else if (q.val === cur.val) {
      return q
    } else if (cur.val > q.val) {
      cur.left && stack.push(cur.left)
    } else if (cur.val < p.val) {
      cur.right && stack.push(cur.right)
    } else {
      // do nothing
    }
  }
};
const root = treeUtil.getTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
console.log(lowestCommonAncestor(root, 2, 8))