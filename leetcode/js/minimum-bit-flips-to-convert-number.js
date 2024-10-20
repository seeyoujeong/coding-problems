/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let startBinary = start.toString(2);
  let goalBinary = goal.toString(2);
  const maxLen = Math.max(startBinary.length, goalBinary.length);

  startBinary = startBinary.padStart(maxLen, "0");
  goalBinary = goalBinary.padStart(maxLen, "0");

  let result = 0;

  for (let i = 0; i < maxLen; i++) {
    if (startBinary[i] !== goalBinary[i]) {
      result++;
    }
  }

  return result;
};

var minBitFlips = function (start, goal) {
  let xor = start ^ goal;
  let result = 0;

  while (xor > 0) {
    result += xor & 1;

    xor = xor >> 1;
  }

  return result;
};
