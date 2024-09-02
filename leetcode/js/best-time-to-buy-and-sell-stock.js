/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = 100001;
  let maxProfit = 0;

  for (const price of prices) {
    if (minPrice > price) {
      minPrice = price;
    }

    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
};
