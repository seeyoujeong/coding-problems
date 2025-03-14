/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const set = new Set(arr2);

  const contain = [];
  const uncontain = [];

  for (const num of arr1) {
    if (set.has(num)) {
      contain.push(num);
    } else {
      uncontain.push(num);
    }
  }

  contain.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));
  uncontain.sort((a, b) => a - b);

  return contain.concat(uncontain);
};
