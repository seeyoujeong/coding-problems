// 점프와 순간 이동
function solution(n) {
  var answer = 0;

  while (n !== 0) {
    if (n % 2 !== 0) {
      answer++;
      n--;
    }

    n /= 2;
  }

  return answer;
}

// 다른 풀이
// function solution(n) {
//   if(n === 1) return 1;

//   const nArr = Array.from(n.toString(2));

//   return nArr.reduce((a, b)=>(+a) + (+b));
// }