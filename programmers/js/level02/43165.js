// 타겟 넘버
function solution(numbers, target) {
  let answer = 0;

  function dfs(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
      const curSum = sum - arr[i] * 2;

      if (curSum === target) {
        answer++;
      }

      if (curSum > target) {
        dfs(arr.slice(i + 1), curSum);
      }
    }
  }

  dfs(
    numbers,
    numbers.reduce((acc, cur) => acc + cur, 0)
  );

  return answer;
}

// 다른 풀이
// function solution(numbers, target) {
//   let answer = 0;

//   function dfs(idx, sum) {
//     if (idx < numbers.length) {
//       dfs(idx + 1, sum + numbers[idx]);
//       dfs(idx + 1, sum - numbers[idx]);
//     } else {
//       if (sum === target) {
//         answer++;
//       }
//     }
//   }

//   dfs(0, 0);

//   return answer;
// }
