/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const indices = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      indices.push(i);
    }
  }

  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      result.push(0);
    } else {
      const min = Math.min(...indices.map((idx) => Math.abs(i - idx)));
      result.push(min);
    }
  }

  return result;
};

var shortestToChar = function (s, c) {
  const result = Array(s.length).fill(Infinity);

  let prev = -Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      prev = i;
    }

    result[i] = Math.abs(i - prev);
  }

  prev = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }

    result[i] = Math.min(result[i], Math.abs(i - prev));
  }

  return result;
};
