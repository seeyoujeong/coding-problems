// 최소직사각형
function solution(sizes) {
  const maxSize = [];
  const minSize = [];
  
  for (let size of sizes) {
    maxSize.push(Math.max(...size));
    minSize.push(Math.min(...size));
  }
  
  return Math.max(...maxSize) * Math.max(...minSize);
}

// 다른 풀이
// function solution(sizes) {
//   const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
//   return hor * ver;
// }