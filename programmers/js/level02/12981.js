// 영어 끝말잇기
function solution(n, words) {
  let num = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i - 1].at(-1) !== words[i][0] ||
        words.slice(0, i).includes(words[i])) {
      num = i;
      break;
    }
  }

  return num ? [num % n + 1, Math.floor(num / n) + 1] : [0, 0];
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