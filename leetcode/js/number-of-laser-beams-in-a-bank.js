/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let result = 0;
  let prev = countDevice(bank[0]);

  for (let i = 1; i < bank.length; i++) {
    const cur = countDevice(bank[i]);

    if (cur !== 0) {
      result += prev * cur;
      prev = cur;
    }
  }

  return result;
};

function countDevice(row) {
  return Array.from(row, Number).reduce((acc, cur) => acc + cur, 0);
}
