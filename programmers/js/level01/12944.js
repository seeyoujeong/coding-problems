// 평균 구하기
function solution(arr) {
  var answer = 0;
  var sum = 0;

  arr.forEach(arrElement => sum += arrElement);
  answer = sum / arr.length;
  
  return answer;
}