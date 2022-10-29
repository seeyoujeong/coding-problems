// 특이한 정렬
function solution(numlist, n) {
  var answer = [];

  numlist = numlist.map(num => [num, Math.abs(num - n)]);
  numlist.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  answer = numlist.map(num => num[0]);

  return answer;
}

// 다른 풀이
// function solution(numlist, n) {
//   return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
// }