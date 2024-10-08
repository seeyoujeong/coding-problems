/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const count = deck.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const values = Object.values(count);
  let gcdValue = values[0];

  for (let i = 1; i < values.length; i++) {
    gcdValue = gcd(gcdValue, values[i]);

    if (gcdValue === 1) return false;
  }

  return gcdValue >= 2;
};

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}
