// 소수 찾기
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      answer++;
    }
  }

  return answer;
}

function isPrime(num) {
  if (num == 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
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