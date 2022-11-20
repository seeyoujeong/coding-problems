// 소수 찾기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const nums = input[1].split(' ').map(v => +v);
const isPrime = (num) => {
  if (num !== 1) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  } else {
    return false;
  }
};

console.log(nums.filter(num => isPrime(num)).length);