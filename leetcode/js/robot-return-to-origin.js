/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let sumUD = 0;
  let sumRL = 0;

  for (const move of moves) {
    if (move === "U") {
      sumUD++;
    } else if (move === "D") {
      sumUD--;
    } else if (move === "R") {
      sumRL++;
    } else if (move === "L") {
      sumRL--;
    }
  }

  return sumUD === 0 && sumRL === 0;
};
