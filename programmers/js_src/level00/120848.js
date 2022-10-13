// 팩토리얼
function solution(n) {
  var answer = 0;
  const fac = (num) => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    return result;
  };

  for (let i = 1; i < 11; i++) {
    if (n >= fac(i)) {
      answer = i;
    }
  }

  return answer;
}

// 다른 풀이
// function solution(n) {
//   let i = 1;
//   let f = 1;

//   while (f * i < n) f *= ++i;

//   return i;
// }