// n^2 배열 자르기
function solution(n, left, right) {
    var answer = [];

    for (let i = left; i <= right; i++) {
      answer.push(Math.max(Math.trunc(i / n), i % n) + 1);
    }

    return answer;
}

// 효율↓
// function solution(n, left, right) {
//   var answer = [];
//   let arr = new Array(n);
  
//   for (let i = 0; i < n; i++) {
//     arr[i] = new Array(n);
//   }
  
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j <= i) arr[i][j] = i + 1;
//       if (j > i) arr[i][j] = j + 1;
//     }
//   }
  
//   answer = arr.flat().slice(left, right + 1);
  
//   return answer;
// }

