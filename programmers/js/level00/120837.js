// 개미 군단
function solution(hp) {
  var answer = 0;

  while (hp !== 0) {
    if (hp >= 5) {
      hp -= 5;
      answer++;
    } else if (hp >= 3) {
      hp -= 3;
      answer++;
    } else {
      hp -= 1;
      answer++;
    }
  }

  return answer;
}

// 다른 풀이
// function solution(hp) {
//   return parseInt(hp / 5) + parseInt((hp % 5) / 3) + parseInt((hp % 5) % 3);
// }