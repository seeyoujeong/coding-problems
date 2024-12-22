/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  const dir = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  };

  const result = [];

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    let [curX, curY] = startPos;

    for (let j = i; j < s.length; j++) {
      const [x, y] = dir[s[j]];
      const [nextX, nextY] = [curX + x, curY + y];

      if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < n) {
        count++;
        [curX, curY] = [nextX, nextY];
      } else {
        break;
      }
    }

    result.push(count);
  }

  return result;
};
