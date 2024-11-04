/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j + i < arr.length; j++) {
      result += arr.slice(j, j + i + 1).reduce((acc, cur) => acc + cur, 0);
    }
  }

  return result;
};

var sumOddLengthSubarrays = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const totalSubarrays = (i + 1) * (arr.length - i);
    const oddSubarrays = Math.floor((totalSubarrays + 1) / 2);

    result += oddSubarrays * arr[i];
  }

  return result;
};
