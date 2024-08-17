/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const p of s) {
    if (p === "(" || p === "{" || p === "[") {
      stack.push(p);
      continue;
    }

    if (stack.length === 0 || obj[p] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
