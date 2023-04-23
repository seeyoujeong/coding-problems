// 배열 만들기 2
function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if ([...String(i)].every((num) => num === "0" || num === "5")) {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}

// 다른 풀이
// function solution(l, r) {
//   let result = [];

//   for (let i = l; i <= r; i++) {
//     const numStr = i.toString();
//     if (numStr.match(/^[05]+$/)) {
//       result.push(i);
//     }
//   }

//   if (result.length === 0) {
//     result.push(-1);
//   }

//   return result;
// }
