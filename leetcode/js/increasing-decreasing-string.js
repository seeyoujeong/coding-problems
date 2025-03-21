/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const count = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - 97;

    count[idx]++;
  }

  let result = "";

  const tryAddChar = (i) => {
    if (count[i] > 0) {
      const c = String.fromCharCode(i + 97);

      result += c;
      count[i]--;
    }
  };

  while (count.some((v) => v > 0)) {
    for (let i = 0; i < count.length; i++) {
      tryAddChar(i);
    }

    for (let i = count.length - 1; i >= 0; i--) {
      tryAddChar(i);
    }
  }

  return result;
};
