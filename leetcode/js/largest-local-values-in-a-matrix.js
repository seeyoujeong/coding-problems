/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const findMaxNum3x3 = (startI, startJ) => {
    let result = 0;

    for (let i = startI; i < startI + 3; i++) {
      for (let j = startJ; j < startJ + 3; j++) {
        result = Math.max(result, grid[i][j]);
      }
    }

    return result;
  };

  const result = [];

  for (let i = 0; i < grid.length; i++) {
    const row = [];

    for (let j = 0; j < grid[0].length; j++) {
      if (i + 2 < grid.length && j + 2 < grid[0].length) {
        row.push(findMaxNum3x3(i, j));
      }
    }

    if (row.length > 0) {
      result.push(row);
    }
  }

  return result;
};
