// 기사단원의 무기
function solution(number, limit, power) {
  return Array(number)
    .fill(0)
    .map((_, idx) => checkPower(idx + 1, limit, power))
    .reduce((acc, cur) => acc + cur, 0);
}

function checkPower(num, limit, power) {
  const arr = [];
  
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  
  const set = new Set(arr);
  
  arr.forEach(val => set.add(num / val));
  
  return set.size > limit ? power : set.size;
}

// 다른 풀이
// function solution(number, limit, power) {
//   return Array(number)
//       .fill(0)
//       .map((_, idx) => checkPower(idx + 1, limit, power))
//       .reduce((acc, cur) => acc + cur, 0);
// }

// function checkPower(num, limit, power) {
//   let count = 0;
  
//   for (let i = 1; i ** 2 <= num; i++) {
//       if (i ** 2 === num) {
//           count++;  
//       } else if (num % i === 0) {
//           count += 2;
//       }
//   }
  
//   return count > limit ? power : count;
// }