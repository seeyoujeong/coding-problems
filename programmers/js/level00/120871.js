// 저주의 숫자 3
function solution(n) {
  var answer = 0;
  let arr = [];
  
  for (let i = 1; ; i++) {
    if (arr.length === n) {
      break;
    }
    
    if (i % 3 !== 0 && !String(i).includes('3')) {
      arr.push(i);    
    }
  }
  
  answer = arr[n - 1];
  
  return answer;
}