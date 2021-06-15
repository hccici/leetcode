/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // 用map记录状态
  const map = {
    0: {
      'num': 1,
      'symbol': 4,
      'point': 5
    },
    1: {
      'num': 1,
      'point': 2,
      'e': 6
    },
    2: {
      'num': 3,
      'e': 6
    },
    3: {
      'num': 3,
      'e': 6
    },
    4: {
      'num': 1,
      'point': 5
    },
    5: {
      'num': 3
    },
    6: {
      'symbol': 7,
      'num': 8
    },
    7: {
      'num': 8
    },
    8: {
      'num': 8
    }
  }
  // 出示状态是0
  let state = 0
  for (let c of s.trim()) {
    let path
    if (c === '.') {
      path = 'point'
    } else if (c === 'e' || c === 'E') {
      path = 'e'
    } else if (c === '+' || c === '-') {
      path = 'symbol'
    } else if (c >= '0' && c <= '9') {
      path = 'num'
    } else {
      return false
    }
    state = map[state][path]
    if (state === undefined) {
      return false
    }
  }
  // 最后停留状态
  return [1, 2, 3, 8].includes(state)
};
console.log(isNumber('+.8'))