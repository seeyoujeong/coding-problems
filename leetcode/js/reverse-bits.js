/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const bits = n.toString(2).padStart(32, "0");
  const reversed = [...bits].reverse().join("");

  return parseInt(reversed, 2);
};
