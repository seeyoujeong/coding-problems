/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const calcSubsetXor = (idx, sum) => {
    if (idx === nums.length) {
      return sum;
    }

    const addXor = calcSubsetXor(idx + 1, sum ^ nums[idx]);
    const noAddXor = calcSubsetXor(idx + 1, sum);

    return addXor + noAddXor;
  };

  return calcSubsetXor(0, 0);
};

var subsetXORSum = function (nums) {
  let result = 0;
  const calcSubsetXor = (idx, sum) => {
    result += sum;

    if (idx === nums.length) {
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      calcSubsetXor(i + 1, sum ^ nums[i]);
    }
  };

  calcSubsetXor(0, 0);

  return result;
};
