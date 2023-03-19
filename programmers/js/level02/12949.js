// 행렬의 곱셈
function solution(arr1, arr2) {
  const answer = [];  
    
  for (const row of arr1) {
    const arr = [];
    
    for (let i = 0; i < arr2[0].length; i++) {
      let tmp = 0; 
      
      for (let j = 0; j < row.length; j++) {
        tmp += row[j] * arr2[j][i];    
      }
      
      arr.push(tmp);
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