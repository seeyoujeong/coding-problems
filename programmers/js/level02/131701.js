// 연속 부분 수열 합의 개수
function solution(elements) {
  const len = elements.length;
  const result = new Set();

  elements.push(...elements);

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      result.add(elements.slice(j, i + j).reduce((acc, cur) => acc + cur, 0));
    }
  }

  return result.size;
}

// 다른 풀이
// function solution(elements) {
//   const circular = elements.concat(elements);
//   const set = new Set();

//   for (let i = 0; i < elements.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < elements.length; j++) {
//       sum += circular[i + j];
//       set.add(sum);
//     }
//   }

//   return set.size;
// }
