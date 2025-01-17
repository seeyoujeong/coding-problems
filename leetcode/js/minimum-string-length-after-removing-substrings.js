/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let result = [];

  for (const c of s) {
    if (result.length > 0) {
      if (result.at(-1) === "A" && c === "B") {
        result.pop();
        continue;
      } else if (result.at(-1) === "C" && c === "D") {
        result.pop();
        continue;
      }
    }

    result.push(c);
  }

  return result.length;
};
