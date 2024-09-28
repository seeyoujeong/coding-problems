/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) {
    return image;
  }
  const prevColor = image[sr][sc];
  image[sr][sc] = color;
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const isInBounds = (x, y) => {
    return x >= 0 && y >= 0 && x < image.length && y < image[0].length;
  };
  const fillImage = (curX, curY) => {
    for (const [x, y] of dir) {
      const nextX = curX + x;
      const nextY = curY + y;

      if (isInBounds(nextX, nextY) && image[nextX][nextY] === prevColor) {
        image[nextX][nextY] = color;
        fillImage(nextX, nextY);
      }
    }
  };

  fillImage(sr, sc);

  return image;
};
