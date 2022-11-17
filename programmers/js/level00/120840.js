// 구슬을 나누는 경우의 수
function solution(balls, share) {
  var answer = 0;
  const fac = (num) => {
    let result = BigInt(1);

    for (let i = BigInt(num); i > 1; i--) {
      result *= i;
    }

    return result;
  };

  answer = fac(balls) / (fac(balls - share) * fac(share)); 

  return answer;
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

// const factorial = num => 
//   Array
//     .from({ length: num }, (_, i) => i + 1)
//     .reduce((a, c) => a *= c, 1);

// const solution = (n, m) => 
//   Math.round(factorial(n) / (factorial(n - m) * factorial(m)));