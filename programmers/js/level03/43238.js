// 입국심사
function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);
  let left = sortedTimes[0];
  let right = sortedTimes.at(-1) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const judged = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (judged < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
