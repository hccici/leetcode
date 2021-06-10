// 和之前的题目思路是一样的，不过数字超出了Number的上线，需要用BigInt
const cuttingRope = function (m) {
  if (m === 2) {
    return 1
  }
  if (m === 3) {
    return 2
  }
  const mod = 1000000007n
  const l = BigInt(m)
  let result
  if (l % 3n === 0n) {
    result = 3n ** (l / 3n)
  } else if (l % 3n === 2n) {
    result = 3n ** (l / 3n) * 2n
  } else {
    result = 3n ** (l / 3n - 1n) * 4n
  }
  return result % mod
}