var subsets = function (nums) {
    const result = []
    function dfs(paths, length, startIndex) {
        if (paths.length >= length) {
            result.push([...paths])
            return
        }
        // 为了不让遍历都从0开始，我们在调用中传递开始下标，记录应该从哪个节点继续
        // 这里也有一个递归出口
        for (let i = startIndex; i < nums.length; i++) {
            paths.push(nums[i])
            dfs(paths, length, i + 1)
            paths.pop()
        }
    }
    for (let i = 0; i <= nums.length; i++) {
        dfs([], i, 0)
    }
    return result
};
subsets([1,2,3])
