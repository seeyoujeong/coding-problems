/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  const result = [];
  const flatMat = mat.flat();

  for (let i = 0; i < r; i++) {
    const row = [];

    for (let j = 0; j < c; j++) {
      row.push(flatMat.shift());
    }

    result.push(row);
  }

  return result;
};
