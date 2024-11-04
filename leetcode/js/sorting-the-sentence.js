/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const sorted = s.split(" ").sort((a, b) => a.at(-1) - b.at(-1));

  return sorted.map((word) => word.slice(0, -1)).join(" ");
};
