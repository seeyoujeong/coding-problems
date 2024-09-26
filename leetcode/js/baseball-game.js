/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const result = [];

  for (const op of operations) {
    if (op === "C") {
      result.pop();
    } else if (op === "D") {
      result.push(result.at(-1) * 2);
    } else if (op === "+") {
      result.push(result.at(-2) + result.at(-1));
    } else {
      result.push(Number(op));
    }
  }

  return result.reduce((acc, cur) => acc + cur, 0);
};
