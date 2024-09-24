/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;
  const smoother = (x, y) => {
    let sum = 0;
    let count = 0;

    for (const i of [-1, 0, 1]) {
      for (const j of [-1, 0, 1]) {
        const xi = x + i;
        const yj = y + j;

        if (xi >= 0 && xi < m && yj >= 0 && yj < n) {
          sum += img[xi][yj];
          count += 1;
        }
      }
    }

    return Math.floor(sum / count);
  };

  const result = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = smoother(i, j);
    }
  }

  return result;
};
