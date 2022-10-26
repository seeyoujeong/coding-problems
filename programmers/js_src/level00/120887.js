// k의 개수
function solution(i, j, k) {
  var answer = 0;

  for (let x = i; x <= j; x++) {
    answer += String(x).split('').filter(v => v == k).length;
  }

  return answer;
}