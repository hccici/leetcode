/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let times = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    let temp = timeSeries[i] - timeSeries[i - 1]
    if (temp > duration) {
      times += duration
    } else {
      times += temp
    }
  }
  return times
};