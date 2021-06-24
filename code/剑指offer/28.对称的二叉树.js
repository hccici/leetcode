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
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  //  拆分为比较两颗树是否是镜像树
  function isMirror(p1, p2) {
    if (p1 && p2) {
      if (p1.val === p2.val) {
        // 继续向下
        return isMirror(p1.left, p2.right) && isMirror(p1.right, p2.left)
      } else {
        return false
      }
    } else if (!p1 && !p2) {
      return true
    } else {
      return false
    }
  }
  return isMirror(root.left, root.right)
};