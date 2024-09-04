/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  return [...columnTitle]
    .reverse()
    .map((char, idx) => (char.charCodeAt(0) - 64) * 26 ** idx)
    .reduce((acc, cur) => acc + cur, 0);
};
