// 배열의 길이를 2의 거듭제곱으로 만들기
function solution(arr) {
  for (let i = 1; i <= arr.length * 2; i *= 2) {
    if (i >= arr.length) {
      return arr.concat(...Array(i - arr.length).fill(0));
    }
  }
}

// 다른 풀이
// function solution(arr) {
//   return [
//     ...arr,
//     ...Array(2 ** Math.ceil(Math.log2(arr.length)) - arr.length).fill(0),
//   ];
// }
