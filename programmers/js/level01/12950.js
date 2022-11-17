// 행렬의 덧셈
function solution(arr1, arr2) {
  var answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr1[i][j] += arr2[i][j];
    }
  }

  answer = arr1;

  return answer;
}

// 다른 풀이
// function solution(A, B) {
//   return A.map((a,i) => a.map((b, j) => b + B[i][j]));
// }