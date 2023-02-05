// 한 번만 등장한 문자
function solution(s) {
  return [...s]
    .filter(char => s.indexOf(char) === s.lastIndexOf(char))
    .sort()
    .join('');
}

// 다른 풀이
// function solution(s) {
//   let res = [];
//   for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//   return res.sort().join('');
// }