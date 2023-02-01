// 컨트롤 제트
function solution(s) {
  const sArr = s.split(' ');
  
  while (sArr.includes('Z')) {
    sArr.splice(sArr.indexOf('Z') - 1, 2);
  }
         
  return sArr.reduce((acc, cur) => +acc + +cur, 0);
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