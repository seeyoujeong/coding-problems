/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const balls = [...boxes]
    .map((box, idx) => (box === "1" ? idx : null))
    .filter((val) => val !== null);

  const result = [];

  for (let i = 0; i < boxes.length; i++) {
    const count = balls.reduce((acc, cur) => acc + Math.abs(cur - i), 0);

    result.push(count);
  }

  return result;
};
