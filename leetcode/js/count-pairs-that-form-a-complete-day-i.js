/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let result = 0;

  for (let i = 0; i < hours.length - 1; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      const temp = hours[i] + hours[j];

      if (temp % 24 === 0) {
        result++;
      }
    }
  }

  return result;
};
