// 영어 끝말잇기
function solution(n, words) {
  var answer = [];

  for (let i = 1; i < words.length; i++) {
    let result = [i % n + 1, Math.floor(i / n) + 1];

    if (words[i - 1].slice(-1) != words[i].slice(0, 1)) {
      answer = result;
      break;
    } else if (words.slice(0, i).includes(words[i])) {
      answer = result;
      break;
    } else {
      answer = [0, 0];
    }
  }

  return answer;
}

// 다른 풀이
// function solution(n, words) {
//   let answer = 0;
//   words.reduce((prev, now, idx) => {
//     answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
//     return now[now.length - 1];
//   }, "")

//   return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
// }