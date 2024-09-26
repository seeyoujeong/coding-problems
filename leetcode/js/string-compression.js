/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const result = [];

  for (const char of chars) {
    if (result.length === 0 || result.at(-1)[0] !== char) {
      result.push([char, 1]);
    } else {
      result[result.length - 1][1]++;
    }
  }

  chars.length = 0;

  for (const [char, num] of result) {
    if (num === 1) {
      chars.push(char);
    } else {
      chars.push(char);

      [...String(num)].forEach((v) => chars.push(v));
    }
  }

  return chars.length;
};

var compress = function (chars) {
  let nI = 0;

  for (let i = 0; i < chars.length; i++) {
    let rI = i;

    while (chars[rI] === chars[rI + 1]) {
      rI++;
    }

    chars[nI] = chars[i];
    nI++;

    if (rI !== i) {
      const size = rI - i + 1;

      for (let strDigit of size.toString()) {
        chars[nI] = strDigit;
        nI++;
      }

      i = rI;
    }
  }

  return nI;
};
