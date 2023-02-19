// [1차] 비밀지도
function solution(n, arr1, arr2) {
  return Array(n).fill(0).map((_, idx) => {
    const decryption = (arr1[idx] | arr2[idx]).toString(2);
    
    return [...'0'.repeat(n - decryption.length) + decryption]
      .reduce((acc, cur) => acc + (+cur ? '#' : ' '), '');
  });
}

// 다른 풀이
// function solution(n, arr1, arr2) {
//   return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//   return '0'.repeat(n - s.length) + s;
// }