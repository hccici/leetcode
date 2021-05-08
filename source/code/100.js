var isSameTree = function (p, q) {
    // 如果都是空，那么这两个节点相同
    if (!p && !q) {
        return true
    }
    // 如果其中一个为空，一个不为空那么就不同
    if (!p || !q) {
        return false
    }
    // 都不为空，比较它们的值还有左右子树
    let lf = isSameTree(p.left, q.left)
    let rf = isSameTree(p.right, q.right)
    if (p.val === q.val && lf && rf) {
        return true
    } else {
        return false
    }
};