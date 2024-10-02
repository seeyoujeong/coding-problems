/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let lines = 1;
  let lastWidth = 0;

  for (const c of s) {
    const width = widths[c.charCodeAt(0) - 97];

    if (lastWidth + width <= 100) {
      lastWidth += width;
    } else {
      lastWidth = width;
      lines += 1;
    }
  }

  return [lines, lastWidth];
};
