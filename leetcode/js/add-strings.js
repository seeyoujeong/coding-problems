/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = "";
  num1 = [...num1];
  num2 = [...num2];
  const minLen = Math.min(num1.length, num2.length);
  let up = 0;

  for (let i = 0; i < minLen; i++) {
    const a = num1.pop();
    const b = num2.pop();
    const sum = Number(a) + Number(b) + up;

    result = String(sum % 10) + result;
    up = Math.floor(sum / 10);
  }

  const num1Len = num1.length;

  if (num1Len > 0) {
    for (let i = 0; i < num1Len; i++) {
      const a = num1.pop();
      const sum = Number(a) + up;

      result = String(sum % 10) + result;
      up = Math.floor(sum / 10);
    }
  }

  const num2Len = num2.length;

  if (num2Len > 0) {
    for (let i = 0; i < num2Len; i++) {
      const a = num2.pop();
      const sum = Number(a) + up;

      result = String(sum % 10) + result;
      up = Math.floor(sum / 10);
    }
  }

  if (up === 1) {
    result = String(up) + result;
  }

  return result;
};

var addStrings = function (num1, num2) {
  return (BigInt(num1) + BigInt(num2)).toString();
};

var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let sum = "";
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i < 0 ? 0 : Number(num1.at(i));
    const digit2 = j < 0 ? 0 : Number(num2.at(j));
    const digitsSum = digit1 + digit2 + carry;

    sum = String(digitsSum % 10) + sum;
    carry = Math.floor(digitsSum / 10);

    i--;
    j--;
  }

  return sum;
};
