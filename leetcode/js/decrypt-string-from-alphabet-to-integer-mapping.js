/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";
  const stack = [...s];

  while (stack.length > 0) {
    const cur = stack.pop();

    if (cur === "#") {
      const [str1, str2] = [stack.pop(), stack.pop()];
      const c = String.fromCharCode(Number(str2 + str1) + 96);
      result = c + result;
    } else {
      result = String.fromCharCode(Number(cur) + 96) + result;
    }
  }

  return result;
};
