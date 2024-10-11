/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderObj = [...order].reduce((acc, cur, idx) => {
    acc[cur] = idx;
    return acc;
  }, {});

  for (let i = 1; i < words.length; i++) {
    const word1 = words[i - 1];
    const word2 = words[i];

    for (let j = 0; j < Math.max(word1.length, word2.length); j++) {
      if (orderObj[word1[j]] < orderObj[word2[j]]) {
        break;
      }

      if (orderObj[word1[j]] > orderObj[word2[j]]) {
        return false;
      }

      if (word1[j] !== undefined && word2[j] === undefined) {
        return false;
      }
    }
  }

  return true;
};
