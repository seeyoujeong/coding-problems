/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s.replaceAll(s.slice(0, i + 1), "").length === 0) {
      return true;
    }
  }

  return false;
};

var repeatedSubstringPattern = function (s) {
  return s.repeat(2).slice(1, -1).includes(s);
};
