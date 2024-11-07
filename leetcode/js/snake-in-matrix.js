/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let result = 0;
  const commandsObj = {
    UP: -n,
    RIGHT: 1,
    DOWN: n,
    LEFT: -1,
  };

  for (const command of commands) {
    result += commandsObj[command];
  }

  return result;
};
