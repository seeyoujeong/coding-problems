// 가위 바위 보
function solution(rsp) {
  const win = { 2: '0', 0: '5', 5: '2' };
  
  return rsp.split('').reduce((acc, cur) => acc + win[cur], '');
}