// OX퀴즈
function solution(quiz) {    
  return quiz.map(q => 
    eval(q.split(' = ')[0]) == q.split(' = ')[1] ? 'O' : 'X');
}