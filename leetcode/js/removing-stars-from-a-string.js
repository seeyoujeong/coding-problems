/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let result = [];

  for (const c of s) {
    if (c === "*") {
      result.pop();
    } else {
      result.push(c);
    }
  }

  return result.join("");
};
