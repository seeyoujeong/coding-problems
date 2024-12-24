/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => b - a);

  const result = [];

  for (const card of deck) {
    if (result.length > 0) {
      result.unshift(result.pop());
    }

    result.unshift(card);
  }

  return result;
};
