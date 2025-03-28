/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (n, w, maxWeight) {
  const totalWeight = n * n * w;

  return totalWeight > maxWeight ? Math.floor(maxWeight / w) : n * n;
};
