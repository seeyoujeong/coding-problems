// 최솟값 만들기

function solution(A,B){
  var answer = 0;

  // 효율↓
  // while (A.length) {
  //     answer += Math.max(...A) * Math.min(...B);

  //     A.splice(A.indexOf(Math.max(...A)), 1);
  //     B.splice(B.indexOf(Math.min(...B)), 1);
  // }

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}