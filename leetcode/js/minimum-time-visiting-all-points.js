/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let result = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let [curX, curY] = points[i];
    const [nextX, nextY] = points[i + 1];

    result += Math.max(Math.abs(nextX - curX), Math.abs(nextY - curY));
  }

  return result;
};
