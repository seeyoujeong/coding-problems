/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function (s, k) {
  let result = "";

  for (let i = 0; i < s.length; i += k) {
    const sum = Array.from({ length: k }, (_, idx) => i + idx).reduce(
      (acc, cur) => s.charCodeAt(cur) - 97 + acc,
      0
    );

    result += String.fromCharCode((sum % 26) + 97);
  }

  return result;
};
