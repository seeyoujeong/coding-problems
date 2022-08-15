// 짝지어 제거하기

// 효율↓
// function solution(s) {
//   var answer = -1;
//   s = s.split('');

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == s[i + 1]) {
//       s.splice(i, 2);
//       i = -1;
//     }
//   }
  
//   if (s.length == 0) {
//     answer = 1;
//   } else {
//     answer = 0;
//   }

//   return answer;
// }

// function solution(s) {
//   var answer = -1;
//   let result = [];
//   s = s.split('');

//   for (let i = 0; i < s.length; i++) {
//     if (result.slice(-1) == s[i]) {
//       result.pop();
//     } else {
//       result.push(s[i]);
//     }
//   }
  
//   if (result.length == 0) {
//     answer = 1;
//   } else {
//     answer = 0;
//   }

//   return answer;
// }

function solution(s) {
  var answer = -1;
  let result = [];
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (result[result.length - 1] == s[i]) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  if (result.length == 0) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}