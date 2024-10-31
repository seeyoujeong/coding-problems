/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const keyMap = new Map();
  let idx = 0;

  while (keyMap.size < 26) {
    const letter = key[idx];
    const alphabet = String.fromCharCode(97 + keyMap.size);

    if (letter !== " " && !keyMap.has(letter)) {
      keyMap.set(letter, alphabet);
    }

    idx++;
  }

  return [...message].reduce((acc, cur) => {
    acc += keyMap.has(cur) ? keyMap.get(cur) : cur;

    return acc;
  }, "");
};
