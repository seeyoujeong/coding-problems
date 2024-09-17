/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((v) => v.length > 0).length;
};
