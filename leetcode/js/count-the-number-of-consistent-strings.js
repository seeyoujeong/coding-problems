/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let result = 0;
  const allowedSet = new Set([...allowed]);

  for (const word of words) {
    if ([...word].every((char) => allowedSet.has(char))) {
      result++;
    }
  }

  return result;
};
