// 컨트롤 제트
function solution(s) {
  var answer = 0;
  const sArr = s.split(' ');
  
  if (sArr[0] === 'Z') {
    sArr.splice(0, 1);
  }
  
  while (sArr.includes('Z')) {
    sArr.splice(sArr.indexOf('Z') - 1, 2);
  }
  
  answer = sArr.reduce((acc, cur) => +acc + +cur, 0);
         
  return answer;
}

// 다른 풀이
// function solution(s) {
//   const stack = []

//   s.split(' ').forEach((target) => {
//     if(target === 'Z') stack.pop();
//     else stack.push(+target)
//   })

//   return stack.reduce((pre, cur) => pre + cur, 0);
// }