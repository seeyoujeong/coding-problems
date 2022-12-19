// 팩토리얼
function solution(n) {
  let answer = 0;
  const fac = (num) => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    return result;
  };

  for (let i = 1; fac(i) <= n; i++) {
    answer = i;
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