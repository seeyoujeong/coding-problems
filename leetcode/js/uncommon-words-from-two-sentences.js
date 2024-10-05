/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const s1Count = countWord(s1);
  const s2Count = countWord(s2);
  const result = [];
  const findUncommon = (obj1, obj2) => {
    for (const key in obj1) {
      if (obj1[key] === 1 && !(key in obj2)) {
        result.push(key);
      }
    }
  };

  findUncommon(s1Count, s2Count);
  findUncommon(s2Count, s1Count);

  return result;
};

function countWord(sentence) {
  return sentence.split(" ").reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});
}

var uncommonFromSentences = function (s1, s2) {
  const common = new Set();
  const uncommon = new Set();

  for (const word of s1.split(" ")) {
    if (common.has(word)) {
      uncommon.delete(word);
    } else {
      common.add(word);
      uncommon.add(word);
    }
  }

  for (const word of s2.split(" ")) {
    if (common.has(word)) {
      uncommon.delete(word);
    } else {
      common.add(word);
      uncommon.add(word);
    }
  }

  return [...uncommon];
};
