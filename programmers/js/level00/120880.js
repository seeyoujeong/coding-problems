// 특이한 정렬
function solution(numlist, n) {
  return numlist
    .map(num => [num, Math.abs(num - n)])
    .sort((a, b) => a[1] - b[1] || b[0] - a[0])
    .map(([num, order]) => num);
}

// 다른 풀이
// function solution(numlist, n) {
//   return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
// }