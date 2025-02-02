/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  return target.every((num, idx) => num === arr[idx]);
};

var canBeEqual = function (target, arr) {
  let count = new Int32Array(1001);
  let uniqueCount = 0;

  for (let i = 0; i < target.length; i++) {
    if (count[target[i]]++ === 0) uniqueCount++;
    if (count[arr[i]]-- === 1) uniqueCount--;
  }

  return uniqueCount === 0;
};
