// 숫자의 표현
function solution(n) {
  let answer = 1;
  let num = n;
  const halfN = Math.ceil(n / 2);
  
  if (n === 1) {
    return 1;
  }
  
  for (let i = 1; i <= halfN; i++) {
    for (let j = i; j <= halfN; j++) {
      num -= j;
        
      if (num < 0) {
        num = n;
        break;
      }
  
      if (num === 0) {
        answer++;
        num = n;
        break;
      }
    }   
  }
  
  return answer;
}

// 다른 풀이
// function solution(n) {
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0 && i % 2 === 1) {
//       answer++;
//     }
//   }

//   return answer;
// }

// function solution(n) {
//   let answer = 0;
    
//   for (let i = 0; 0 < n; i++) {
//     if (n % i === 0) {
//       answer++;
//     }
    
//     n -= i;
//   }
  
//   return answer;
// }