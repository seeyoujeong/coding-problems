// 숫자 카드 나누기
function solution(arrayA, arrayB) {
  var answer = 0;
  const gcd = (a, b) => {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };
  const gcdArr = (arr) => {
    let result = arr[0];

    for (let i of arr) {
      result = gcd(result, i);
    }

    return result;
  };
  const check = (a, b) => {
    let result = 0;
    const gcd = gcdArr(a);

    if (b.every(elem => elem % gcd !== 0)) {
      result = gcd;
    }

    return result;
  };
  const checkAB = check(arrayA, arrayB);
  const checkBA = check(arrayB, arrayA);
  
  answer = checkAB > checkBA ? checkAB : checkBA;
  
  return answer;
}

// 다른 풀이
// function solution(arrayA, arrayB) {
//   var answer = 0;
//   const check = (a, b) => {
//     let result = 0;
//     a.sort((a, b) => a - b);

//     for (let i = a[0]; i > 1; i--) {
//       if (a.every(elem => elem % i === 0) &&
//         !b.some(elem => elem % i === 0)) {
//         result = i;
//         break;
//       }
//     }

//     return result;
//   };
//   const checkAB = check(arrayA, arrayB);
//   const checkBA = check(arrayB, arrayA);
  
//   answer = checkAB > checkBA ? checkAB : checkBA;
  
//   return answer;
// }