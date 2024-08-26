/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = [...a].reverse().join("");
  b = [...b].reverse().join("");

  let result = "";

  let aIdx = 0;
  let bIdx = 0;
  let carry = 0;

  while (aIdx < a.length || bIdx < b.length || carry !== 0) {
    let sum = Number(a[aIdx] || 0) + Number(b[bIdx] || 0) + carry;

    if (sum > 1) {
      sum %= 2;
      carry = 1;
    } else {
      carry = 0;
    }

    result = `${sum}${result}`;

    aIdx++;
    bIdx++;
  }

  return result;
};

var addBinary = function (a, b) {
  const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);

  return sum.toString(2);
};
