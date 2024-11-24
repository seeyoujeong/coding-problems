/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let result = 0;

  for (const detail of details) {
    if (60 < detail.slice(-4, -2)) {
      result++;
    }
  }

  return result;
};
