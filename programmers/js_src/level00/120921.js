// 문자열 밀기
function solution(A, B) {
  var answer = 0;

  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      break;
    }

    A = A.slice(-1) + A.slice(0, -1);
    answer++;
  }

  if (A !== B) {
    answer = -1;
  }

  return answer;
}

// 다른 풀이
// function solution(A, B) {
//   return (B + B).indexOf(A);
// }