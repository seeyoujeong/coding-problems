// 멀쩡한 사각형
function solution(w, h) {
  var answer = w * h;

  answer -= w + h - gcd(w, h);

  return answer;
}

function gcd(a, b) {
  let result = 0;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      result = i;
    }
  }

  return result;
}

// 다른 풀이
// function solution(w, h){
//   const slope = h / w;
//   let result = 0;

//   for (let i = 1; i <= w; i++) {
//     result += Math.ceil(slope * i);
//   }

//   return ((h * w) - result) * 2;
// }