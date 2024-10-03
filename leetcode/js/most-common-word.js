/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let result = "";
  let maxCount = 0;
  const countObj = {};
  const replaced = paragraph
    .replace(/[!?',;.]/g, " ")
    .toLowerCase()
    .split(" ");

  for (const word of replaced) {
    if (word.length === 0 || banned.includes(word)) {
      continue;
    }

    countObj[word] = word in countObj ? countObj[word] + 1 : 1;

    if (countObj[word] > maxCount) {
      maxCount = countObj[word];
      result = word;
    }
  }

  return result;
};
