/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const converted = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = [...converted].reverse().join("");

  return converted === reversed;
};
