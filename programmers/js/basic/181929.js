// 원소들의 곱과 합
function solution(num_list) {
  return num_list.reduce((acc, cur) => acc * cur, 1) <
    num_list.reduce((acc, cur) => acc + cur, 0) ** 2
    ? 1
    : 0;
}

// 다른 풀이
// function solution(num_list) {
//   let accMul = 1;
//   let accSum = 0;

//   for (const num of num_list) {
//     accMul *= num;
//     accSum += num;
//   }

//   return accMul < accSum ** 2 ? 1 : 0;
// }
