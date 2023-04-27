// 조건에 맞게 수열 변환하기 2
function solution(arr) {
  let count = 0;
  let prevArr = [];

  while (!arr.every((num, idx) => num === prevArr[idx])) {
    prevArr = arr;

    arr = arr.map((num) =>
      num >= 50 && num % 2 === 0
        ? num / 2
        : num < 50 && num % 2 === 1
        ? num * 2 + 1
        : num
    );

    count++;
  }

  return count - 1;
}
