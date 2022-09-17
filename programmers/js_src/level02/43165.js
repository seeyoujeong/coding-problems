// 타겟 넘버
function solution(numbers, target) {
  var answer = 0;
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  
  function dfs(numbers, sum) {        
    for (let i = 0; i < numbers.length; i++) {
      if (sum - numbers[i] * 2 == target) {
        answer++;
      }
      
      if (sum - numbers[i] * 2 > target) {
        dfs(numbers.slice(i + 1), sum - numbers[i] * 2);
      }
    }
  }
  
  dfs(numbers, sum);

  return answer;
}

// 다른 풀이
// function solution(numbers, target) {
//   let answer = 0;

//   getAnswer(0, 0);

//   function getAnswer(x, value) {
//     if (x < numbers.length) {
//       getAnswer(x + 1, value + numbers[x]);
//       getAnswer(x + 1, value - numbers[x]);
//     } else {
//       if (value === target){
//         answer++;
//       }
//     }
//   }

//   return answer;
// }