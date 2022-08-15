// 올바른 괄호

// 효율↓
// function solution(s) {
//   var answer = true;

//   while (s.length) {
//     let tmp = s.replace(/(\(\))/, '');
    
//     if (s == tmp) break;
    
//     s = tmp
//   }
  
//   answer = s.length == 0 ? true : false;

//   return answer;
// }

// function solution(s) {
//   var answer = true;

//   s = s.split('');
    
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] + s[i + 1] == '()') {
//       s.splice(i, 2);
//       i = -1;
//     }
//   }
    
//   answer = s.length == 0 ? true : false;

//   return answer;
// }

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

function solution(s) {
  var answer = true;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') count++;
    if (s[i] === ')') count--;
    if (count < 0) break;
  }

  answer = count ? false : true;

  return answer;
}