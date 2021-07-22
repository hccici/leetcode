/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  function find(x, y) {
    // 碰到边界返回
    if (x < 0 || x >= board.length || y < 0 || y > board[0].length) {
      return
    }
    const curV = board[x][y]
    // 不是'0'的不访问,访问过的返回，不访问
    if (curV !== 'O') {
      return
    }
    // 标记访问过了
    board[x][y] = 'V'
    // 向四个方向搜索
    find(x + 1, y)
    find(x - 1, y)
    find(x, y + 1)
    find(x, y - 1)
  }
  // 从边界开始查找
  // 上
  let x = 0
  let y = 0
  for (; y < board[x].length; y++) {
    find(x, y)
  }
  // 下
  x = board.length - 1
  y = 0
  for (; y < board[x].length; y++) {
    find(x, y)
  }
  // 左
  x = 0
  y = 0
  for (; x < board.length; x++) {
    find(x, y)
  }
  // 右
  x = 0
  y = board[0].length - 1
  for (; x < board.length; x++) {
    find(x, y)
  }
  // 遍历数组，不是'V'的改为'X',是'V'的改为'O'
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== 'V') {
        board[i][j] = 'X'
      } else {
        board[i][j] = 'O'
      }
    }
  }
};