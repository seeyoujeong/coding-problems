/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map((sentence) => sentence.split(" ").length));
};
