/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < num.length; i++) {
    const curNum = Number(num[i]);

    if (i % 2 === 0) {
      evenSum += curNum;
    } else {
      oddSum += curNum;
    }
  }

  return evenSum === oddSum;
};
