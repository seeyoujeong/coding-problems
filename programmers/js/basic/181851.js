// 전국 대회 선발 고사
function solution(rank, attendance) {
  const oneTwoThree = [];
  const sortOfRank = [
    ...rank.reduce(
      (acc, cur, idx) => acc.set(cur, [idx, attendance[idx]]),
      new Map()
    ),
  ].sort((a, b) => a[0] - b[0]);

  for (const [rnk, [num, atd]] of sortOfRank) {
    if (oneTwoThree.length > 3) break;

    if (atd) {
      oneTwoThree.push(num);
    }
  }

  return 10000 * oneTwoThree[0] + 100 * oneTwoThree[1] + oneTwoThree[2];
}
