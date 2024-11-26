/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const result = [];

  for (const row of matrix) {
    const min = Math.min(...row);
    const idx = row.indexOf(min);

    let flag = true;

    for (const row of matrix) {
      if (row[idx] > min) {
        flag = false;
        break;
      }
    }

    if (flag) {
      result.push(min);
    }
  }

  return result;
};
