/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let result = 0;
  let curAltitude = 0;

  for (const altitude of gain) {
    curAltitude += altitude;
    result = Math.max(result, curAltitude);
  }

  return result;
};
