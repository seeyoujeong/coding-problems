// 외계행성의 나이
function solution(age) {
  const pg962Num = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  return age.toString().split('').reduce((acc, cur) => acc + pg962Num[cur], '');
}