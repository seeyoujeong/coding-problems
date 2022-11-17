// 튜플
function solution(s) {
  var answer = [];
  let array = [];
  let set = new Set();

  s = s.match(/{([^{^}]+)}/g);

  s.forEach(elem => array.push(elem.match(/([0-9]+)/g)));

  array.sort((a, b) => a.length - b.length);

  array.forEach(arr => {
    arr.forEach(elem => set.add(+elem));
  });

  answer = [...set];

  return answer;
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