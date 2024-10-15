/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let rook = [-1, -1];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") {
        rook = [i, j];
        break;
      }
    }
  }

  let result = 0;

  for (const [x, y] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]) {
    let [nextX, nextY] = [rook[0] + x, rook[1] + y];

    while (nextX >= 0 && nextY >= 0 && nextX < 8 && nextY < 8) {
      if (board[nextX][nextY] !== ".") {
        result += board[nextX][nextY] === "p" ? 1 : 0;
        break;
      }

      nextX += x;
      nextY += y;
    }
  }

  return result;
};
