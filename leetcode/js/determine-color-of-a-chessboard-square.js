/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const chessboard = Array.from({ length: 8 }, (_, i) => {
    return Array.from({ length: 8 }, (_, j) => i % 2 !== j % 2);
  });

  const row = coordinates[1] - 1;
  const col = coordinates.charCodeAt(0) - 97;

  return chessboard[row][col];
};
