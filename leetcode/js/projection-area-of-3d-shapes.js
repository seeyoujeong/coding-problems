/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let result = 0;
  const maxZXArr = Array(grid[0].length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    let maxYZ = 0;

    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) {
        result++;
      }

      maxYZ = Math.max(maxYZ, grid[i][j]);
      maxZXArr[j] = Math.max(maxZXArr[j], grid[i][j]);
    }

    result += maxYZ;
  }

  return result + maxZXArr.reduce((acc, cur) => acc + cur, 0);
};

var projectionArea = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    let maxYZ = 0;
    let maxZX = 0;

    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) {
        result++;
      }

      maxYZ = Math.max(maxYZ, grid[i][j]);
      maxZX = Math.max(maxZX, grid[j][i]);
    }

    result += maxYZ + maxZX;
  }

  return result;
};
