// 구슬을 나누는 경우의 수
function solution(balls, share) {
  const fac = (num) => {
    let result = 1;

    for (let i = num; i > 1; i--) {
      result *= i;
    }

    return result;
  };

  return Math.round(fac(balls) / fac(balls - share) / fac(share));
}

// 다른 풀이
// function solution(balls, share) {
//   var result = 1;

//   while (share > 0) {
//     result = result * balls / share;
//     balls = balls - 1;
//     share = share - 1;
//   }

//   return Math.round(result);
// }