/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let head = []
    let result = false
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            if (board[y][x] === word[0]) {
                head.push([y, x])
            }
        }
    }
    function dfs(y, x, cIndex) {
        // 超出边界
        if (y > board.length - 1 || y < 0 || x > board[0].length - 1 || x < 0) {
            return false
        }
        // 不符合
        if (word[cIndex] !== board[y][x]) {
            return false
        }
        // word走完了
        if (cIndex === word.length - 1) {
            result = true
            return true
        }
        // 因为方向是不能记录的（也就是说回往回走，所以之前的还是访问到了，我们可以锁起来，也就是改成一个非字母，下次访问了直接返回）
        let temp = board[y][x]
        board[y][x] = '-'
        // 上、下、左、右，一旦有一个返回true就不用再遍历了
        const res = dfs(y - 1, x, cIndex + 1) || dfs(y + 1, x, cIndex + 1) || dfs(y, x - 1, cIndex + 1) || dfs(y, x + 1, cIndex + 1)
        // 这个节点的4个方向都遍历完了，就解锁
        board[y][x] = temp
        return res
    }
    for (let [y, x] of head) {
        if (result) { // 已经找到了就不用再开始了
            break;
        }
        dfs(y, x, 0)
    }
    return result
};
const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
exist(board, word)