// 괄호 회전하기
function solution(s) {
  let answer = 0;
  const brakets = ['[]', '()', '{}'];
  
  for (let x = 0; x < s.length; x++) {
    const sArr = [...s.slice(x), ...s.slice(0, x)];
    const braketStack = sArr.reduce((acc, cur) => {
      acc.push(cur);
      
      if (brakets.includes(acc.at(-2) + acc.at(-1))) {
        acc.pop();
        acc.pop();
      }
      
      return acc;
    }, []);
      
    if (braketStack.length === 0) {
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
