/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const money = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (const bill of bills) {
    if (bill === 10) {
      if (money[5] > 0) {
        money[5]--;
      } else {
        return false;
      }
    } else if (bill === 20) {
      if (money[10] > 0 && money[5] > 0) {
        money[10]--;
        money[5]--;
      } else if (money[10] < 1 && money[5] >= 3) {
        money[5] -= 3;
      } else {
        return false;
      }
    }

    money[bill]++;
  }

  return true;
};
