// 최소직사각형
function solution(sizes) {
  var answer = 0;
  var maxSize = [];
  var minSize = [];

  for (let size of sizes) {
    maxSize.push(Math.max(...size));
    minSize.push(Math.min(...size));
  }

  answer = Math.max(...maxSize) * Math.max(...minSize);

  return answer;
}

// 다른 풀이
// function solution(sizes) {
//   const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
//   return hor * ver;
// }