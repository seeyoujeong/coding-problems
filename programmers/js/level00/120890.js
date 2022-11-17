// 가까운 수
function solution(array, n) {
  var answer = 0;
  let tmp = [Infinity, Infinity];
  
  array.forEach((value, index, array) => {
    const abs = Math.abs(n - value);
    
    if (tmp[0] > abs || (tmp[0] === abs && tmp[1] > value)) {
      tmp = [abs, value];
    }
  });
  
  answer = tmp[1];
  
  return answer;
}