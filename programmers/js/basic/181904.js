// 세로 읽기
function solution(my_string, m, c) {
  return [...my_string].reduce((acc, cur, idx) => {
    acc[idx % m] += cur;
    return acc;
  }, Array(m).fill(""))[c - 1];
}

// 다른 풀이
// function solution(my_string, m, c) {
//   return [...my_string].reduce(
//     (acc, cur, idx) => ((idx % m) + 1 === c ? acc + cur : acc),
//     ""
//   );
// }
