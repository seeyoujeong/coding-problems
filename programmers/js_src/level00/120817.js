// 배열의 평균값
function solution(numbers) {
  var answer = 0;
  
  answer = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
  
  return answer;
}