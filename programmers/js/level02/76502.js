// 괄호 회전하기
function solution(s) {
  var answer = 0;
  const brakets = ['[]', '()', '{}'];
  
  for (let x = 0; x < s.length; x++) {
    const sArr = (s.slice(x) + s.slice(0, x)).split('');
    const tmp = [];
    
    sArr.forEach(val => {
      tmp.push(val);
      
      if (tmp.length > 1) {
        if (brakets.includes(tmp.at(-2) + tmp.at(-1))) {
          tmp.pop();
          tmp.pop();
        }
      }
    });
      
    if (tmp.length === 0) {
      answer++;
    }
  }
  
  return answer;
}

// 다른 풀이
// function solution(s) {
//   if(s.length % 2 === 1) return 0;

//   let answer = 0;
//   const mapping = { "}" : "{", "]" : "[", ")" : "("};

//   for (let i = 0; i < s.length; i++) {
//     const stack = [];
//     const rotate = s.slice(i) + s.slice(0, i);
//     let flag = true;

//     for (let j = 0; j < s.length; j++) {
//       if (rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{" ) {
//         stack.push(rotate[j]);
//       } else {
//         const last = stack.pop();

//         if (last !== mapping[rotate[j]]) {
//           flag = false
//           break;
//         }
//       }
//     }

//     if (flag) answer++;
//   }

//   return answer;
// }

// 실패
// function solution(s) {
//   var answer = 0;
//   const checkParentheses = /\(([\(\)\{\}\[\]])*\)/;
//   const checkBraces = /\{([\(\)\{\}\[\]])*\}/;
//   const checkBrakets = /\[([\(\)\{\}\[\]])*\]/;
  
//   for (let i = 0; i < s.length; i++) {
//     if (checkParentheses.test(s) && 
//       checkBraces.test(s) && 
//       checkBrakets.test(s)) {
//       answer++;
//     }
    
//     s = s.slice(1) + s[0];
//   }
  
//   return answer;
// }