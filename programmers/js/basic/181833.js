// 특별한 이차원 배열 1
function solution(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const elem = Array(n).fill(0);

    elem[i] = 1;

    arr.push(elem);
  }

  return arr;
}

// 다른 풀이
// function solution(n) {
//   const answer = Array.from(Array(n), () => Array(n).fill(0));

//   for (let i = 0; i < n; i++) {
//     answer[i][i] = 1;
//   }

//   return answer;
// }
