// 공 던지기
function solution(numbers, k) {
  var answer = 0;
  const numbersArr = new Array(k).fill(numbers).flat();

  answer = numbersArr[2 * (k - 1)];

  return answer;
}

// 다른 풀이
// function solution(numbers, k) {
//   return numbers[(--k * 2) % numbers.length];
// }