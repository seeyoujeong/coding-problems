// 주사위 게임 3
function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  const count = dice.map(
    (num, _, arr) => arr.filter((elem) => num === elem).length
  );
  const max = Math.max(...count);
  const min = Math.min(...count);

  if (max === 4) {
    return 1111 * a;
  }

  if (max === 3) {
    return (10 * dice[count.indexOf(max)] + dice[count.indexOf(min)]) ** 2;
  }

  if (max === 2) {
    if (min === 2) {
      const anotherNum = dice.find((num) => num !== dice[0]);
      return (dice[0] + anotherNum) * Math.abs(dice[0] - anotherNum);
    }

    if (min === 1) {
      return dice[count.indexOf(1)] * dice[count.lastIndexOf(1)];
    }
  }

  return Math.min(...dice);
}
