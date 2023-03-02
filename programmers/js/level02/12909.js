// 올바른 괄호
function solution(s) {
  let count = 0;

  for (const parenthesis of s) {
    parenthesis === '(' ? count++ : count--;
    
    if (count < 0) return false;
  }

  return count === 0;
}

// function solution(s) {
//   var answer = true;
//   let arr = [];
  
//   s = s.split('');
  
//   while (s.length) {  
//     arr.push(s.pop());
    
//     if (arr.slice(-1) == ')' && s.slice(-1) == '(') {
//       arr.pop();
//       s.pop();
//     } else if (arr.slice(-2, -1) == ')' && arr.slice(-1) == '(') {
//       arr.pop();
//       arr.pop();
//     }
//   }
  
//   answer = arr.length === 0 ? true : false;

//   return answer;
// }