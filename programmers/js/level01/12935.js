// 제일 작은 수 제거하기
function solution(arr) {
  const min = Math.min(...arr);
  const result = arr.filter(num => num !== min);
  
  return result.length ? result : [-1];
}

// 다른 풀이
// function solution(arr) {
//   arr.splice(arr.indexOf(Math.min(...arr)), 1);

//   if(arr.length < 1) return [-1];

//   return arr;
// }