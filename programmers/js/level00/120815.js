// 피자 나눠 먹기 (2)
function solution(n) {
  const gcd = (a, b) => {
    while (b != 0) {
      let tmp = a;
      a = b;
      b = tmp % a;
    }
    return a;
  };

  return n / gcd(n, 6);
}

// 다른 풀이
// const solution = (n) => {
//   let piece = 6

//   while(true) {
//     if (piece % n === 0) {
//       break
//     }
//     piece += 6
//   }

//   return piece / 6
// }