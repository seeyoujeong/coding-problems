// 이진수 더하기
function solution(bin1, bin2) {
  var answer = '';
  const binary = parseInt(bin1, 2) + parseInt(bin2, 2);
  
  answer = binary.toString(2);
  
  return answer;
}