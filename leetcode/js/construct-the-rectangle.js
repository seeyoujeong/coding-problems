/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let result = [area, 1];

  for (let i = 1; i <= Math.sqrt(area); i++) {
    if (!Number.isInteger(area / i)) continue;

    if (result[0] - result[1] > area / i - i) {
      result = [area / i, i];
    }
  }

  return result;
};

var constructRectangle = function (area) {
  let sqrt = Math.floor(Math.sqrt(area));

  while (area % sqrt !== 0) {
    sqrt--;
  }

  return [area / sqrt, sqrt];
};
