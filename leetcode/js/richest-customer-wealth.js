/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result = 0;

  for (const account of accounts) {
    const sum = account.reduce((acc, cur) => acc + cur, 0);
    result = Math.max(result, sum);
  }

  return result;
};
