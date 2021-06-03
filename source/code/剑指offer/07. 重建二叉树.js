/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }
    //  前序遍历的第一个值就是根节点的值
    let root = new TreeNode(preorder[0])
    //  在中序遍历中找出根节点的下标
    let inorderRootIndex = 0
    while (inorder[inorderRootIndex] !== preorder[0]) {
        inorderRootIndex++
    }
    // 也知道了中序遍历中左子树的个数
    let leftTreeNums = inorderRootIndex
    // 分解为小问题
    root.left = buildTree(preorder.slice(1, 1 + leftTreeNums), inorder.slice(0, inorderRootIndex))//根据左子树的个数，从前序遍历的数组中可以知道对左子树前序遍历的结果,以此类推
    root.right = buildTree(preorder.slice(1 + leftTreeNums), inorder.slice(inorderRootIndex + 1))
    return root
};