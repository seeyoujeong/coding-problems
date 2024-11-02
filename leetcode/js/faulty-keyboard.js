/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  const result = [];

  for (const c of s) {
    if (c === "i") {
      result.reverse();
    } else {
      result.push(c);
    }
  }

  return result.join("");
};
