/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  const encrypt = (x) => {
    const arr = [...String(x)].map(Number);
    const max = Math.max(...arr);

    return Number(String(max).repeat(arr.length));
  };

  return nums.reduce((acc, cur) => acc + encrypt(cur), 0);
};
