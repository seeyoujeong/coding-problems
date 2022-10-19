// OX퀴즈
function solution(quiz) {
  var answer = [];

  quiz.forEach(q => {
    const tmp = q.split(' = ');

    if (eval(tmp[0]) == tmp[1]) {
      answer.push('O');
    } else {
      answer.push('X');
    }
  });

  return answer;
}