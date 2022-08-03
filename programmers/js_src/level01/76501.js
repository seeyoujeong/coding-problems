// 음양 더하기

function solution(absolutes, signs) {
  var answer = 0;

  answer = absolutes
    .map((num, index) => !signs[index] ? -num : num)
    .reduce((sum, cur) => sum + cur, 0);

  return answer;
}

// 다른 풀이
// function solution(absolutes, signs) {
//   return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }