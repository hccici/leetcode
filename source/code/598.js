/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (ops.length) {
    let minM = Number.MAX_SAFE_INTEGER
    let minN = Number.MAX_SAFE_INTEGER
    for (let index = 0; index < ops.length; index++) {
      const element = ops[index];
      if (minM >= element[0]) {
        minM = element[0]
      }
      if (minN >= element[1]) {
        minN = element[1]
      }
    }
    return minM * minN
  } else {
    return n * m
  }
};