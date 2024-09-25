/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((v) => v.length > 0)
    .reverse()
    .join(" ");
};
