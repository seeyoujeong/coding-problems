// 수열과 구간 쿼리 2
function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const result = arr.slice(s, e + 1).filter((num) => num > k);
    return result.length > 0 ? Math.min(...result) : -1;
  });
}

// 다른 풀이
// function solution(arr, queries) {
//   return queries.map(([s, e, k]) => {
//     let result = -1;

//     for (let i = s; i <= e; i += 1) {
//       const v = arr[i];

//       if (v <= k) continue;

//       result = result === -1 ? v : Math.min(result, v);
//     }

//     return result;
//   });
// }
