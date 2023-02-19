// 소수 만들기
function solution(nums) {
  let count = 0;

  for (let i = 0; i + 2 < nums.length; i++) {
    for (let j = i + 1; j + 1 < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          count++;
        }
      }
    }
  }

  return count;
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
