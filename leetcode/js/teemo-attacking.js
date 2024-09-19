/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let result = duration;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    if (timeSeries[i] + duration - 1 < timeSeries[i + 1]) {
      result += duration;
    } else {
      result += timeSeries[i + 1] - timeSeries[i];
    }
  }

  return result;
};
