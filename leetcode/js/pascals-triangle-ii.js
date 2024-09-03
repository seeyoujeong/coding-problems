/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = Array(rowIndex + 1).fill(1);

  for (let i = 1; i < rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      result[j] += result[j - 1];
    }
  }

  return result;
};

var getRow = function (rowIndex) {
  let row = [1];

  for (let i = 0; i < rowIndex; i++) {
    row.push((row[i] * (rowIndex - i)) / (i + 1));
  }

  return row;
};
