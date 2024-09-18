/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let count = 4;

        for (const [x, y] of [
          [0, -1],
          [-1, 0],
          [0, 1],
          [1, 0],
        ]) {
          if (
            i + x >= 0 &&
            i + x < grid.length &&
            j + y >= 0 &&
            j + y < grid[0].length
          ) {
            if (grid[i + x][j + y] === 1) {
              count -= 1;
            }
          }
        }

        result += count;
      }
    }
  }

  return result;
};
