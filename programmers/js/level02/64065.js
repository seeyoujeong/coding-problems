// 튜플
function solution(s) {
  const arr = JSON.parse(
    s.replaceAll(/[{}]/g, (match) => (match === "{" ? "[" : "]"))
  )
    .sort((a, b) => a.length - b.length)
    .flat();

  return [...new Set(arr)];
}

// 다른 풀이
// function solution(s) {
//   return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
//   .sort((a, b) => a.length - b.length)
//   .reduce((arr, v, n) => {
//     if (n) {
//       return arr.concat(v.filter(f => !arr.includes(f)));
//     }
//     return v;
//   }, []);
// }
