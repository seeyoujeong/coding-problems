// 소수 찾기
function solution(numbers) {
  var answer = 0;
  let arr = getAllPermutations(numbers.split(''));
  let primeArr = [];
  
  for (let val of arr) {
    let tmp = +val.join('');
    
    if (isPrime(tmp)) {
      if (!primeArr.includes(tmp)) {
        primeArr.push(tmp);
        answer++;
      }
    }
  }
  
  return answer;
}

function isPrime(number) {
  if (number == 1 || number == 0) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
      
    return true;
  }
}

function getPermutations(arr, num) {
  const results = [];
  
  if (num === 1) {
    return arr.map(v => [v]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, num - 1);
    const attached = permutations.map(v => [fixed, ...v]);
    results.push(...attached);
  });

  return results;
}

function getAllPermutations(arr) {
  let results = [];
  
  arr.forEach((value, index, origin) => {
    results.push(...getPermutations(origin, index + 1));
  });

  return results;
}