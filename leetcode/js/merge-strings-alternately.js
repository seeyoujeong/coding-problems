/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  const minLen = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLen; i++) {
    result += word1[i] + word2[i];
  }

  if (word1.length < word2.length) {
    result += word2.slice(minLen);
  } else {
    result += word1.slice(minLen);
  }

  return result;
};
