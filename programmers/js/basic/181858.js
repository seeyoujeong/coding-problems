// 무작위로 K개의 수 뽑기
function solution(arr, k) {
  const result = [];

  for (const num of new Set(arr)) {
    if (result.length >= k) {
      break;
    }

    result.push(num);
  }

  return result.length < k
    ? [...result, ...Array(k - result.length).fill(-1)]
    : result;
}

// 다른 풀이
// function solution(arr, k) {
//   const set = new Set(arr);
//   return set.size < k
//     ? [...set, ...Array(k - set.size).fill(-1)]
//     : [...set].slice(0, k);
// }
