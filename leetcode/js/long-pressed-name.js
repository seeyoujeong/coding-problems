/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let idx = 0;

  for (let i = 0; i < name.length; i++) {
    if (typed[idx] !== name[i]) {
      return false;
    }

    if (name[i] === name[i + 1]) {
      idx++;
      continue;
    }

    while (idx < typed.length && typed[idx] === name[i]) {
      idx++;
    }
  }

  return idx === typed.length;
};
