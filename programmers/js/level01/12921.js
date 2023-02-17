// 소수 찾기
function solution(n) {
  const primeArr = Array(n + 1).fill(true);
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primeArr[i] === true) {
      for (let j = i + i; j <= n; j += i) {
        primeArr[j] = false;
      }
    }
  }
  
  return primeArr.filter(v => v).length - 2;
}

// 다른 풀이
// function solution(n) {
//   const s = new Set();

//   for (let i = 1; i <= n; i += 2) {
//       s.add(i);
//   }

//   s.delete(1);
//   s.add(2);

//   for (let j = 3; j < Math.sqrt(n); j++) {
//     if(s.has(j)) {
//       for(let k = j * 2; k <= n; k += j) {    
//         s.delete(k);
//       }
//     }
//   }

//   return s.size;
// }