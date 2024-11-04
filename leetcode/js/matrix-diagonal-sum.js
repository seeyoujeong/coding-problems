/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0;

  for (let i = 0; i < mat.length; i++) {
    result += mat[i][i];

    if (i !== mat.length - 1 - i) {
      result += mat[mat.length - 1 - i][i];
    }
  }

  return result;
};
