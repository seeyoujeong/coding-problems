/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const result = [];
  const set = new Set();
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      count++;
    } else {
      set.add(A[i]);
    }

    if (set.has(B[i])) {
      count++;
    } else {
      set.add(B[i]);
    }

    result.push(count);
  }

  return result;
};
