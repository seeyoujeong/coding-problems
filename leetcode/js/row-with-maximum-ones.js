/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let idxOfRow = 0;
  let maxCount = 0;

  mat.forEach((row, idx) => {
    const count = row.filter((num) => num === 1).length;

    if (maxCount < count) {
      idxOfRow = idx;
      maxCount = count;
    }
  });

  return [idxOfRow, maxCount];
};
