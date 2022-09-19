// 행렬의 곱셈
function solution(arr1, arr2) {
  var answer = [];
  let result = [];

  for (let i = 0; i < arr2[0].length; i++) {
    let arr = []
    for (let j = 0; j < arr1.length; j++) {
      let tmp = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        tmp += arr1[j][k] * arr2[k][i];
      }
      arr.push(tmp);
    }
    result.push(arr);
  }

  for (let i = 0; i < result[0].length; i++) {
    let arr = [];
    for (let j = 0; j < result.length; j++) {
      arr.push(result[j][i]);
    }
    answer.push(arr);
  }

  return answer;
}

// 다른 풀이
// function solution(arr1, arr2) {
//   return arr1.map(row => 
//     arr2[0].map((_, index) => 
//     row.reduce((acc, cur, curIdx) => 
//     acc + cur * arr2[curIdx][index], 0)));
// }