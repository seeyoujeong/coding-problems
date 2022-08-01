// 모의고사

function solution(answers) {
  var answer = [];
  let spj1 = '12345';
  let spj2 = '21232425';
  let spj3 = '3311224455';

  spj1 = spj1.repeat(Math.ceil(answers.length / spj1.length)).split('');
  spj2 = spj2.repeat(Math.ceil(answers.length / spj2.length)).split('');
  spj3 = spj3.repeat(Math.ceil(answers.length / spj3.length)).split('');

  let spj1Count = countAnswers(spj1, answers);
  let spj2Count = countAnswers(spj2, answers);
  let spj3Count = countAnswers(spj3, answers);

  if (spj1Count > spj2Count && spj1Count > spj3Count) {
    answer = [1];
  } else if (spj2Count > spj1Count && spj2Count > spj3Count) {
    answer = [2];
  } else if (spj3Count > spj2Count && spj3Count > spj1Count) {
    answer = [3];
  } else if (spj1Count == spj2Count && spj1Count == spj3Count) {
    answer = [1, 2, 3];
  } else if (spj1Count == spj2Count) {
    answer = [1, 2];
  } else if (spj2Count == spj3Count) {
    answer = [2, 3];
  } else if (spj1Count == spj3Count) {
    answer = [1, 3];
  }

  return answer;
}

function countAnswers(spj, answers) {
  let count = 0;

  for (let i = 0; i < spj.length; i++) {
    if (spj[i] == answers[i]) {
      count++;
    }
  }

  return count;
}

// 다른 풀이
// function solution(answers) {
//   var answer = [];
//   var a1 = [1, 2, 3, 4, 5];
//   var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//   var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   var a1c = answers.filter((a, i)=> a === a1[i % a1.length]).length;
//   var a2c = answers.filter((a, i)=> a === a2[i % a2.length]).length;
//   var a3c = answers.filter((a, i)=> a === a3[i % a3.length]).length;
//   var max = Math.max(a1c, a2c, a3c);

//   if (a1c === max) {answer.push(1)};
//   if (a2c === max) {answer.push(2)};
//   if (a3c === max) {answer.push(3)};

//   return answer;
// }