// [1차] 다트 게임 
function solution(dartResult) {
  var answer = 0;
  let result = [];

  dartResult = dartResult.match(/(\d+)([SDT])([*#]*)/g);

  for (let dart of dartResult) {
    let target = dart.split(/([SDT]+)/);
    let num = 0;
    let area = 0;
    let option = 1;

    num = target[0];

    if (target[1] == 'S') area = 1;
    if (target[1] == 'D') area = 2;
    if (target[1] == 'T') area = 3;
    if (target[2] == '#') option = -1;
    if (target[2] == '*') {
      if (result.length !== 0) result[result.length - 1] *= 2;
      option = 2;
    }

    result.push(num ** area * option);
  }

  answer = result.reduce((sum, cur) => sum + cur, 0);

  return answer;
}