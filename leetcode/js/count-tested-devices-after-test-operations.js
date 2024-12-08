/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let result = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
    const cur = batteryPercentages[i];

    if (cur > 0) {
      for (let j = i + 1; j < batteryPercentages.length; j++) {
        batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
      }

      result++;
    }
  }

  return result;
};
