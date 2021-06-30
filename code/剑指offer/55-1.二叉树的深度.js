/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let maxDepth = 0
  function dfs(cur, depth) {
    if (!cur) {
      maxDepth = Math.max(depth - 1, maxDepth)
      return
    }
    dfs(cur.left, depth + 1)
    dfs(cur.right, depth + 1)
  }
  dfs(root, 1)
  return maxDepth
};