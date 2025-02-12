/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  const result = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    const cur = mountain[i];

    if (mountain[i - 1] < cur && mountain[i + 1] < cur) {
      result.push(i);
    }
  }

  return result;
};
