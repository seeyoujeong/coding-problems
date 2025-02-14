/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const stack = [];

  for (const c of s) {
    const digit = parseInt(c, 10);

    if (!isNaN(digit)) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
};
