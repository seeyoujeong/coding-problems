// 체육복

function solution(n, lost, reserve) {
  var answer = 0;

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let _reserve = reserve.filter(num => !lost.includes(num));
  let _lost = lost.filter(num => !reserve.includes(num));

  answer = n - _lost.length;

  for (let num of _reserve) {
    if (_lost.includes(num - 1)) {
      _lost.splice(_lost.indexOf(num - 1), 1)
      answer++;
    } else if (_lost.includes(num + 1)) {
      _lost.splice(_lost.indexOf(num + 1), 1)
      answer++;
    }
  }

  return answer;
}