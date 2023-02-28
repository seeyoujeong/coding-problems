// 문자열 나누기
function solution(s) {
  let firstChar;
  let firstCharCount = 0;
  let otherCharCount = 0;
    
  return [...s].reduce((acc, cur) => {
    if (firstCharCount === otherCharCount) {
      acc++;
      firstChar = cur;
      firstCharCount = 0;
      otherCharCount = 0;
    }
    
    firstChar === cur ? firstCharCount++ : otherCharCount++;
    
    return acc;
  }, 0);
}

// 다른 풀이
// function solution(s) {
//   var answer = 0;
//   let firstChar = s[0];
//   let firstCharCount = 0;
//   let otherCharCount = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (firstChar === s[i]) {
//       firstCharCount++;
//     } else {
//       otherCharCount++;
//     }

//     if (firstCharCount === otherCharCount) {
//       answer++;
//       firstChar = s[i + 1];
//       firstCharCount = 0;
//       otherCharCount = 0;
//     }

//     if (i === s.length - 1 && firstCharCount !== otherCharCount) {
//       answer++;
//     }
//   }

//   return answer;
// }

// function solution(s) {
//   let answer = 0;
//   let current;
//   let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (count === 0) {
//       answer++;
//       current = s[i];
//       count = 1;
//     } else {
//       if(current !== s[i]) count--;
//       else count++;
//     }
//   }

//   return answer;
// }