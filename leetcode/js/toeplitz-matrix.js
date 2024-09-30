/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix[0].length - 1; i++) {
    const elem = matrix[0][i];

    for (let j = 1; j < matrix.length; j++) {
      if (i + j < matrix[0].length && elem !== matrix[j][i + j]) {
        return false;
      }
    }
  }

  for (let i = 1; i < matrix.length - 1; i++) {
    const elem = matrix[i][0];

    for (let j = 1; j < matrix[0].length; j++) {
      if (i + j < matrix.length && elem !== matrix[i + j][j]) {
        return false;
      }
    }
  }

  return true;
};

var isToeplitzMatrix = function (matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }

  return true;
};
