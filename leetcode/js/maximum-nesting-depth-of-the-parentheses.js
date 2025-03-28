/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let result = 0;
  let count = 0;

  for (const p of s) {
    if (p === "(") {
      count++;
    } else if (p === ")") {
      count--;
    }

    result = Math.max(result, count);
  }

  return result;
};
