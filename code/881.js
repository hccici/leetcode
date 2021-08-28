/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => {
    return b - a
  })
  let count = 0
  let i = 0
  count = i
  let j = people.length - 1
  while (j > i) {
    if (people[j] + people[i] <= limit) {
      count++
      i++
      j--
    } else {
      count++
      i++
    }
  }
  if (i === j) {
    count++
  }
  return count
};