/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
  function dist([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
  }
  const t = dist([0, 0], target)
  for (let i = 0; i < ghosts.length; i++) {
    const cur = ghosts[i];
    const ct = dist(cur, target)
    if (ct <= t) {
      return false
    }
  }
  return true
};