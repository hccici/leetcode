/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const map = new Map()
  for (let [i, v] of Array.from(s).entries()) {
    if (map.has(v)) {
      map.set(v, -1)
    } else {
      map.set(v, i)
    }
  }
  let first = s.length
  for (let val of map.values()) {
    if (val !== -1 && val < first) {
      first = val
    }
  }
  return first == s.length ? ' ' : s[first];
};