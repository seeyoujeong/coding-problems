// 소인수분해
function solution(n) {
  const answer = [];
  const isPrime = (num) => {       
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      answer.push(i);
    }
  }
  
  return answer;
}