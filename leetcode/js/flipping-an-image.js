/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((row) => row.reverse().map((v) => (v === 1 ? 0 : 1)));
};
