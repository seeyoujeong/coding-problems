/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    IV: 4,
    IX: 9,
    I: 1,
    V: 5,
    XL: 40,
    XC: 90,
    X: 10,
    L: 50,
    CD: 400,
    CM: 900,
    C: 100,
    D: 500,
    M: 1000,
  };

  const result = [];

  for (const [k, v] of Object.entries(roman)) {
    while (s.includes(k)) {
      s = s.replace(k, v);
      result.push(v);
    }
  }

  return result.reduce((acc, cur) => acc + cur, 0);
};
