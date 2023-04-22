// 수 조작하기 2
function solution(numLog) {
  let answer = "";

  for (let i = 1; i < numLog.length; i++) {
    const calcNum = numLog[i] - numLog[i - 1];

    if (calcNum === 1) answer += "w";
    if (calcNum === -1) answer += "s";
    if (calcNum === 10) answer += "d";
    if (calcNum === -10) answer += "a";
  }

  return answer;
}
