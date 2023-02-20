// K번째수
function solution(array, commands) {
  return commands
    .map(([start, end, ord]) => 
      array
        .slice(start - 1, end)
        .sort((a, b) => a - b)[ord - 1]);
}
