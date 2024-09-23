/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const max = candyType.length / 2;
  const typesCount = new Set(candyType).size;

  return Math.min(max, typesCount);
};
