/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  //  后续遍历的结果是这样分布的[左子树，右子树，根]
  // 二叉搜索树的左子树都小于根，右子树都大于根，并且它的左右子树都是二叉搜索树
  /* 这题可以这样看，给定一个后续遍历的结果，判断这课树是否是二叉搜索树（当然可以构建出这棵树，但是太麻烦，我们根据他们的特性判断就行了） */
  const len = postorder.length;
  // 如果只有一个数，那么就不用向下判断了
  if (len < 2) {
    return true
  }
  // 根节点值
  const root = postorder[len - 1]
  // 划分左右子树
  let i = 0 // 划分点
  for (; i < len - 1; i++) {
    if (postorder[i] > root) {
      break
    }
  }
  // 上面假设了i左边的是左子树（因为都比根节点小），所以i右边（包括）的是右子树，应该都比根值大，如果结果都比大，那么递归对左右子树在进行判断，比小直接返回
  const left = postorder.slice(0, i)
  const right = postorder.slice(i, len - 1);
  let result = right.every(item => item > root)
  if (result) {
    return verifyPostorder(left) && verifyPostorder(right)
  } else {
    return false
  }
};