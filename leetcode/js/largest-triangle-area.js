/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let result = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const curArea = calcArea(points[i], points[j], points[k]);
        result = Math.max(result, curArea);
      }
    }
  }

  return result;
};

function calcArea(x, y, z) {
  return Math.abs(
    (x[0] * (y[1] - z[1]) + y[0] * (z[1] - x[1]) + z[0] * (x[1] - y[1])) / 2
  );
}
