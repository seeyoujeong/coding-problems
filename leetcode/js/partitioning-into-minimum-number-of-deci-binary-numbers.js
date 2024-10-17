/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let result = 0;

  for (const num of n) {
    result = Math.max(result, Number(num));

    if (result === 9) break;
  }

  return result;
};

var minPartitions = function (n) {
  for (let i = 9; i > 0; i--) {
    if (n.includes(String(i))) {
      return i;
    }
  }

  return 0;
};
