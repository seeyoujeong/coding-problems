// 여행경로
function solution(tickets) {
  const graph = {};

  tickets.forEach(([src, dest]) => {
    if (graph[src] === undefined) {
      graph[src] = [];
    }

    graph[src].push(dest);
  });

  for (const key in graph) {
    graph[key].sort((a, b) => b.localeCompare(a)); // 느리다.
  }

  const stack = ["ICN"];
  const result = [];

  while (stack.length > 0) {
    const src = stack.at(-1);

    if (graph[src] && graph[src].length > 0) {
      stack.push(graph[src].pop());
    } else {
      result.push(stack.pop());
    }
  }

  return result.reverse();
}

// 데브코스
// function solution(tickets) {
//   const graph = {};

//   tickets.forEach(([src, dest]) => {
//     if (graph[src] === undefined) {
//       graph[src] = [];
//     }

//     graph[src].push(dest);
//   });

//   for (const key in graph) {
//     graph[key].sort((a, b) => (a > b ? -1 : 1));
//   }

//   const stack = ["ICN"];
//   const answer = [];

//   while (stack.length > 0) {
//     const src = stack[stack.length - 1];

//     if (graph[src] && graph[src].length > 0) {
//       stack.push(graph[src].pop());
//     } else {
//       answer.push(stack.pop());
//     }
//   }

//   return answer.reverse();
// }
