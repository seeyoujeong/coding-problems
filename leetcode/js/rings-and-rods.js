/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const red = Array(10).fill(0);
  const green = Array(10).fill(0);
  const blue = Array(10).fill(0);

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const placed = rings[i + 1];

    if (color === "R") {
      red[placed]++;
    } else if (color === "G") {
      green[placed]++;
    } else if (color === "B") {
      blue[placed]++;
    }
  }

  let result = 0;

  for (let i = 0; i < 10; i++) {
    if (red[i] > 0 && green[i] > 0 && blue[i] > 0) {
      result++;
    }
  }

  return result;
};
