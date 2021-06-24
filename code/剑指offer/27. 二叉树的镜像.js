/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) {
    return null
  }
  let changeLeft = mirrorTree(root.right)
  let changeRight = mirrorTree(root.left)
  root.left = changeLeft
  root.right = changeRight
  return root
};