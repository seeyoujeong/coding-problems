/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  const result = words.find((word) => word === [...word].reverse().join(""));

  return result || "";
};
