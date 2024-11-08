/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  return s
    .split("|")
    .filter((_, idx) => idx % 2 === 0)
    .reduce((acc, cur) => {
      acc += [...cur].filter((c) => c === "*").length;
      return acc;
    }, 0);
};
