// 최빈값 구하기
function solution(array) {
  var answer = 0;
  const count = {};

  array.forEach(value => {
    if (!(value in count)) {
      count[value] = 1;
    } else {
      count[value]++;
    }  
  });

  const max = Math.max(...Object.values(count));

  if (Object.values(count).filter(value => value == max).length > 1) {
    answer = -1;
  } else {
    answer = +Object.keys(count).find(key => count[key] == max);
  }

  return answer;
}