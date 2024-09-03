/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const prevRow = result[i - 1];

        row.push(prevRow[j - 1] + prevRow[j]);
      }
    }

    result.push(row);
  }

  return result;
};
