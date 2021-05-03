var permute = function (nums) {
    const result = []
    function dfs(paths) {
        if (paths.length >= nums.length) {
            result.push([...paths]) // 复制一份
            return
        }
        nums.forEach(item => {
            if (paths.includes(item)) {
                return
            }
            paths.push(item)
            dfs(paths)
            paths.pop() // ！因为path是公用的，所以回溯完了要pop
        })
    }
    dfs([])
    return result
};
console.log(permute([1, 2, 3]))