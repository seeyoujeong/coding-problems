/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  for (let i = 2; i < cost.length; i++) {
    const min = Math.min(cost.at(i - 1), cost.at(i - 2));

    cost[i] += min;
  }

  return Math.min(cost.at(-1), cost.at(-2));
};
