// k진수에서 소수 개수 구하기
function solution(n, k) {
  var answer = 0;
  let numArray = n.toString(k).match(/([1-9]+)/g);
  // let numArray = n.toString(k).split('0');
  
  for (let num of numArray) {
    if (isPrime(num)) {
      answer++;
    }
  }
  
  return answer;
}

function isPrime(num) {
  if (num < 2) {
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