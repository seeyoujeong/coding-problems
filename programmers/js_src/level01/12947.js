// 하샤드 수

function solution(x) {
  var answer = true;
  
  const arr = x.toString().split('').map(i => parseInt(i));

  const sum = arr.reduce((a, b) => a + b, 0);
  
  answer = x % sum === 0 ? true : false;
  
  return answer;
}