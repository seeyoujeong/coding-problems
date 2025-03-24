/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let result = 0;

  for (let num = low; num <= high; num++) {
    const strNum = String(num);

    if (strNum.length % 2 !== 0) {
      continue;
    }

    const sum1 = [...strNum.slice(0, strNum.length / 2)].reduce(
      (acc, cur) => acc + Number(cur),
      0
    );
    const sum2 = [...strNum.slice(strNum.length / 2)].reduce(
      (acc, cur) => acc + Number(cur),
      0
    );

    if (sum1 === sum2) {
      result++;
    }
  }

  return result;
};
