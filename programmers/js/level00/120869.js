// 외계어 사전
function solution(spell, dic) {
  var answer = 0;

  for (let s of spell) {
    dic = dic.filter(d => d.includes(s));
  }

  if (dic.length > 0) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}

// 다른 풀이
// function solution(spell, dic) {
//   return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
// }