/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  let prevIdx = 0;
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[prevIdx]) {
      count++;
      continue;
    }

    if (count >= 3) {
      result.push([prevIdx, i - 1]);
    }

    prevIdx = i;
    count = 1;
  }

  if (count >= 3) {
    result.push([prevIdx, s.length - 1]);
  }

  return result;
};
