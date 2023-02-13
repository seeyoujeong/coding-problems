// 다음에 올 숫자
function solution(common) {
  const [a0, a1, a2] = common;
    
  return a1 - a0 === a2 - a1 ? 
    common.at(-1) + a1 - a0 : 
    common.at(-1) * (a1 / a0);
}