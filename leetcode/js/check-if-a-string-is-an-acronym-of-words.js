/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  return (
    words.length === s.length && words.every((word, idx) => word[0] === s[idx])
  );
};
