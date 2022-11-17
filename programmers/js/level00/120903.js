// 배열의 유사도
function solution(s1, s2) {
  var answer = 0;
  const set = new Set([...s1, ...s2]);

  answer = s1.length + s2.length - set.size;

  return answer;
}

// 다른 풀이
// function solution(s1, s2) {
//   const intersection = s1.filter((x) => s2.includes(x));
//   return intersection.length;
// }