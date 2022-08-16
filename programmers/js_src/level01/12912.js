// 두 정수 사이의 합
function solution(a, b) {
  var answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }

  return answer;
}

// 다른 풀이
// function solution(a, b) {
//   var result = 0;

//   return (a + b) * (Math.abs(b - a) + 1) / 2;
// }

// function solution(a, b, s = 0){
//   for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//   return s;
// }