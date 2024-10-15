/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const sum = BigInt(num.join("")) + BigInt(k);

  return [...String(sum)].map(Number);
};

var addToArrayForm = function (num, k) {
  const result = [];
  let numIdx = num.length - 1;
  let carry = 0;

  while (numIdx >= 0 || k > 0 || carry === 1) {
    const sum = (numIdx >= 0 ? num[numIdx] : 0) + (k % 10) + carry;
    carry = Math.floor(sum / 10);
    k = Math.floor(k / 10);
    result.push(sum % 10);
    numIdx--;
  }

  return result.reverse();
};
