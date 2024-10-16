/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = null;

  for (const word of words) {
    if (result === null) {
      result = toCountObj([...word]);
    } else {
      let temp = {};
      const countObj = toCountObj([...word]);

      for (const key in countObj) {
        if (key in result) {
          temp[key] = Math.min(result[key], countObj[key]);
        }
      }

      result = temp;
    }
  }

  return Object.entries(result).reduce(
    (acc, [char, count]) => acc.concat([...char.repeat(count)]),
    []
  );
};

function toCountObj(arr) {
  return arr.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});
}

var commonChars = function (words) {
  const result = [];

  for (const letter of words[0]) {
    if (words.every((word) => word.includes(letter))) {
      result.push(letter);
      words = words.map((word) => word.replace(letter, ""));
    }
  }

  return result;
};

var commonChars = function (words) {
  const minFreq = Array(26).fill(Infinity);

  for (let word of words) {
    const freq = Array(26).fill(0);

    for (let char of word) {
      freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], freq[i]);
    }
  }

  const result = [];

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(i + "a".charCodeAt(0));
    result.push(...char.repeat(minFreq[i]));
  }

  return result;
};
