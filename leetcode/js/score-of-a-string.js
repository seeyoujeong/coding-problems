/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const a = s[i].charCodeAt(0);
    const b = s[i + 1].charCodeAt(0);

    result += Math.abs(a - b);
  }

  return result;
};
