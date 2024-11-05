/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
  this.grid = grid;
  this.xLen = grid.length;
  this.yLen = grid[0].length;
  this.map = new Map();

  for (let i = 0; i < this.xLen; i++) {
    for (let j = 0; j < this.yLen; j++) {
      this.map.set(this.grid[i][j], [i, j]);
    }
  }
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
  let result = 0;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const [curX, curY] = this.map.get(value);

  for (const [x, y] of dir) {
    const [nextX, nextY] = [curX + x, curY + y];

    if (nextX >= 0 && nextY >= 0 && nextX < this.xLen && nextY < this.yLen) {
      result += this.grid[nextX][nextY];
    }
  }

  return result;
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
  let result = 0;
  const dir = [
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  const [curX, curY] = this.map.get(value);

  for (const [x, y] of dir) {
    const [nextX, nextY] = [curX + x, curY + y];

    if (nextX >= 0 && nextY >= 0 && nextX < this.xLen && nextY < this.yLen) {
      result += this.grid[nextX][nextY];
    }
  }

  return result;
};

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
