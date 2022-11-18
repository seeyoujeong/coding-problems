// 기사단원의 무기
function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    const tmp = [];

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        tmp.push(j);
      }
    }

    const result = new Set(tmp);

    tmp.forEach(val => {
      result.add(i / val);
    });

    answer += result.size > limit ? power : result.size;
  }

  return answer;
}