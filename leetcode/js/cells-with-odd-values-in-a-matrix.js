/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const matrix = Array.from({ length: m }, () => Array(n).fill(0));

  for (const [r, c] of indices) {
    for (let i = 0; i < n; i++) {
      matrix[r][i]++;
    }

    for (let i = 0; i < m; i++) {
      matrix[i][c]++;
    }
  }

  return matrix.flat().filter((v) => v % 2 !== 0).length;
};
