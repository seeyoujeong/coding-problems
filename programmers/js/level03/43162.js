// 네트워크
function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      const stack = [i];

      while (stack.length > 0) {
        const current = stack.pop();

        visited[current] = true;

        for (let j = i; j < n; j += 1) {
          if (!visited[j] && computers[current][j]) {
            stack.push(j);
          }
        }
      }

      answer += 1;
    }
  }

  return answer;
}

// 데브코스
// function solution(n, computers) {
//   let answer = 0;
//   const visited = new Array(n).fill(false);

//   for (let i = 0; i < n; i += 1) {
//     if (!visited[i]) {
//       dfs(n, computers, visited, i);
//       answer += 1;
//     }
//   }

//   return answer;
// }

// function dfs(n, computers, visited, start) {
//   const stack = [start];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     visited[current] = true;

//     for (let i = 0; i < n; i += 1) {
//       if (!visited[i] && computers[current][i]) {
//         stack.push(i);
//       }
//     }
//   }
// }
