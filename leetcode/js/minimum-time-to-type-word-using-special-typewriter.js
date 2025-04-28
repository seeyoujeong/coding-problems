/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let result = word.length;
  let cur = 1;

  for (const c of word) {
    const next = c.charCodeAt(0) - 96;
    const time = Math.abs(next - cur);

    result += time < 26 - time ? time : 26 - time;
    cur = next;
  }

  return result;
};
