/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (const c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      return s.indexOf(c);
    }
  }

  return -1;
};
