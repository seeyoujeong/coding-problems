/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  return [...s]
    .map((c, idx) => ("z".charCodeAt(0) + 1 - c.charCodeAt(0)) * (idx + 1))
    .reduce((acc, cur) => acc + cur, 0);
};
