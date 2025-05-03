/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let maxLen = 0;

  return rectangles
    .map(([l, w]) => {
      const min = Math.min(l, w);

      maxLen = Math.max(maxLen, min);

      return min;
    })
    .filter((k) => k === maxLen).length;
};
