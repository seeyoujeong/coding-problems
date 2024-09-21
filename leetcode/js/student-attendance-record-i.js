/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  if (s.length - s.replaceAll("A", "").length > 1) {
    return false;
  }

  if (s.includes("LLL")) {
    return false;
  }

  return true;
};
