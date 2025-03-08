/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let result = 0;

  while (grid[0].length > 0) {
    const deleted = [];

    for (let i = 0; i < grid.length; i++) {
      const max = Math.max(...grid[i]);
      const idx = grid[i].indexOf(max);

      grid[i].splice(idx, 1);
      deleted.push(max);
    }

    result += Math.max(...deleted);
  }

  return result;
};
