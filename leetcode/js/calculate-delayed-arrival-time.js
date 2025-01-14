/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  let sumTime = arrivalTime + delayedTime;

  if (sumTime >= 24) {
    return sumTime % 24;
  }

  return sumTime;
};
