// 짝수 홀수 개수
function solution(num_list) {
  let odd = 0;
  let even = 0;
  
  num_list.forEach(num => {
    num % 2 === 0 ? even++ : odd++;
  });
  
  return [even, odd];
}

// 다른 풀이
// function solution(num_list) {
//   var answer = [0, 0];

//   for(let a of num_list){
//     answer[a % 2] += 1;
//   }

//   return answer;
// }