/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  s = s.replaceAll("-", "").toUpperCase();
  let result = "";
  let count = s.length % k || k;

  for (const c of s) {
    if (result.length > 0 && count === 0) {
      result += "-";
      count = k;
    }

    result += c;
    count--;
  }

  return result;
};
