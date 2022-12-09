// 가장 가까운 같은 글자
function solution(s) {
  var answer = [];
  const memory = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in memory)) {           
      answer.push(-1);
    } else {
      answer.push(i - memory[s[i]]);
    }

    memory[s[i]] = i;
  }

  return answer;
}