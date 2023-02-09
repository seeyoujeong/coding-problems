// 외계어 사전
function solution(spell, dic) {
  return dic
    .filter(d => spell.every(s => d.includes(s)))
    .length > 0 ? 1 : 2;
}
