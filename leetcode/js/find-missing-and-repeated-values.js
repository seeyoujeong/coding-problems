/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length ** 2;
  const count = Array(n + 1).fill(0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      count[grid[i][j]]++;
    }
  }

  const repeat = count.findIndex((n) => n === 2);
  const missing = count.findLastIndex((n) => n === 0);

  return [repeat, missing];
};
