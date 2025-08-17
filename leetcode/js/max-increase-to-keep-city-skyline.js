/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const n = grid.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cur = grid[i][j];
      let maxRow = cur;
      let maxCol = cur;

      for (let k = 0; k < n; k++) {
        const curRow = grid[k][j];
        const curCol = grid[i][k];

        maxRow = Math.max(maxRow, curRow);
        maxCol = Math.max(maxCol, curCol);
      }

      const min = Math.min(maxRow, maxCol);
      result += Math.abs(cur - min);
    }
  }

  return result;
};

var maxIncreaseKeepingSkyline = function (grid) {
  const n = grid.length;
  const rowMax = new Array(n).fill(0);
  const colMax = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j]);
      colMax[j] = Math.max(colMax[j], grid[i][j]);
    }
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const maxHeight = Math.min(rowMax[i], colMax[j]);
      result += maxHeight - grid[i][j];
    }
  }

  return result;
};
