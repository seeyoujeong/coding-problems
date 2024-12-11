/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  let result = [];

  if (k > 0) {
    for (let i = 1; i <= code.length; i++) {
      if (i + k <= code.length) {
        const sum = code.slice(i, i + k).reduce((acc, cur) => acc + cur, 0);
        result.push(sum);
      } else {
        const sum = code
          .slice(i)
          .concat(code.slice(0, k - (code.length - i)))
          .reduce((acc, cur) => acc + cur, 0);
        result.push(sum);
      }
    }
  } else if (k < 0) {
    for (let i = 0; i < code.length; i++) {
      if (k + i < 0) {
        const sum = code
          .slice(0, i)
          .concat(code.slice(k + i))
          .reduce((acc, cur) => acc + cur, 0);
        result.push(sum);
      } else {
        const sum = code.slice(i + k, i).reduce((acc, cur) => acc + cur, 0);
        result.push(sum);
      }
    }
  } else {
    result = Array(code.length).fill(0);
  }

  return result;
};
