// 배열 만들기 3
function solution(arr, intervals) {
  return intervals.reduce(
    (acc, [s, e]) => [...acc, ...arr.slice(s, e + 1)],
    []
  );
}
