// 암호 해독
function solution(cipher, code) {
  return cipher
    .split('')
    .map((val, idx) => (idx + 1) % code === 0 ? val : null)
    .join('');
}
// 다른 풀이
// function solution(cipher, code) {
//   return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
// }