// 명예의 전당 (1)
function solution(k, score) {
  var answer = [];
  const tmp = [];

  score.forEach(s => {
    tmp.push(s);
    tmp.sort((a, b) => b - a);

    if (tmp.length > k) {
      tmp.pop();
    }

    answer.push(tmp.at(-1));
  });

  return answer;
}