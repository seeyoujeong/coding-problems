/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return backspacedString(s) === backspacedString(t);
};

function backspacedString(str) {
  const result = [];

  for (const char of str) {
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  }

  return result.join("");
}
