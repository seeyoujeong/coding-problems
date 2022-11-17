// n의 배수 고르기
function solution(n, numlist) {
  var answer = [];
  
  answer = numlist.filter(num => num % n === 0);
  
  return answer;
}