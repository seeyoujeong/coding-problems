/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  let result = 0;
  let prevKey = s[0].toLowerCase();

  for (const c of s) {
    const curKey = c.toLowerCase();

    if (curKey !== prevKey) {
      result++;
    }

    prevKey = curKey;
  }

  return result;
};
