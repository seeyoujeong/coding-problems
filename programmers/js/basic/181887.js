// 홀수 vs 짝수
function solution(num_list) {
  const evenSum = num_list.reduce(
    (acc, cur, idx) => (!(idx % 2) ? acc + cur : acc),
    0
  );
  const oddSum = num_list.reduce(
    (acc, cur, idx) => (idx % 2 ? acc + cur : acc),
    0
  );

  return evenSum > oddSum ? evenSum : oddSum;
}

// 다른 풀이
// function solution(num_list) {
//   let evenSum = 0;
//   let oddSum = 0;

//   num_list.forEach((num, idx) => {
//     if (idx % 2 === 0) {
//       evenSum += num;
//     } else {
//       oddSum += num;
//     }
//   });

//   return evenSum > oddSum ? evenSum : oddSum;
// }
