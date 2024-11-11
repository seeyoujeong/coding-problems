/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let result = 0;
  let start = [0, 0];
  const visited = grid.map((row, rowIdx) =>
    row.map((val, idx) => {
      if (val === 1) {
        start = [rowIdx, idx];
      }

      return val === 1 || val === -1;
    })
  );
  const findPaths = (curX, curY) => {
    if (
      grid[curX][curY] === 2 &&
      visited.every((row) => row.every((val) => val))
    ) {
      result++;
      return;
    }

    for (const [x, y] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const [nextX, nextY] = [curX + x, curY + y];

      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < grid.length &&
        nextY < grid[0].length
      ) {
        if (!visited[nextX][nextY]) {
          visited[nextX][nextY] = true;
          findPaths(nextX, nextY);
          visited[nextX][nextY] = false;
        }
      }
    }
  };

  findPaths(...start);

  return result;
};

var uniquePathsIII = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let [startX, startY] = [0, 0];
  let emptySquares = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        startX = i;
        startY = j;
      } else if (grid[i][j] === 0) {
        emptySquares++;
      }
    }
  }

  const isValid = (x, y) => x >= 0 && y >= 0 && x < m && y < n;

  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const countPaths = (x, y, remainingSquares) => {
    if (grid[x][y] === 2) {
      return remainingSquares === 0 ? 1 : 0;
    }

    let paths = 0;
    const temp = grid[x][y];
    grid[x][y] = -1;

    for (const [dx, dy] of DIRECTIONS) {
      const [nextX, nextY] = [x + dx, y + dy];

      if (isValid(nextX, nextY) && grid[nextX][nextY] !== -1) {
        paths += countPaths(nextX, nextY, remainingSquares - 1);
      }
    }

    grid[x][y] = temp;
    return paths;
  };

  return countPaths(startX, startY, emptySquares);
};
