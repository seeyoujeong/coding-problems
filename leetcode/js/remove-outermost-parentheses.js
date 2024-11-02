/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  let queue = [];
  let count = 0;

  for (const p of s) {
    queue.push(p);

    if (p === "(") {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      queue.shift();
      queue.pop();
      result += queue.join("");
      queue = [];
    }
  }

  return result;
};
