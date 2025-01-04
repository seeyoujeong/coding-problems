/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let result = 0;
  let monday = 0;

  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) {
      monday++;
    }

    result += monday + (i % 7);
  }

  return result;
};
