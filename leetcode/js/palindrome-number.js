/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const strX = String(x);

  return strX === [...strX].reverse().join("");
};
