/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(result) !== 0) {
      result = result.slice(0, result.length - 1);
    }
  }

  return result;
};
