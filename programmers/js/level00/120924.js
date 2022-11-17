// 다음에 올 숫자
function solution(common) {
  var answer = 0;
  
  if (common[1] - common[0] == common[2] - common[1]) {
    answer = common.at(-1) + common[1] - common[0];
  } else {
    answer = common.at(-1) * (common[1] / common[0]);
  }
  
  return answer;
}