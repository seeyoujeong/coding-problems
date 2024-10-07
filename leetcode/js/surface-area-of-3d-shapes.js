/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  const xLen = grid.length;
  const yLen = grid[0].length;
  let result = 0;

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      const curValue = grid[i][j];

      if (curValue === 0) {
        continue;
      }

      for (const [x, y] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const [nextX, nextY] = [i + x, j + y];

        if (nextX >= 0 && nextY >= 0 && nextX < xLen && nextY < yLen) {
          if (curValue > grid[nextX][nextY]) {
            result += curValue - grid[nextX][nextY];
          }
        } else {
          result += curValue;
        }
      }

      result += 2;
    }
  }

  return result;
};

var surfaceArea = function (grid) {
  const height = grid.length;
  const width = grid[0].length;
  let result = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] > 0) {
        result += grid[i][j] * 4 + 2;
      }

      if (i > 0) {
        result -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
      }

      if (j > 0) {
        result -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
      }
    }
  }

  return result;
};
