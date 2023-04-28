// 스킬트리
function solution(skill, skill_trees) {
  return skill_trees.reduce((acc, cur) => {
    let prevIdx = 0;

    for (let s of skill) {
      let curIdx = cur.indexOf(s);

      if (curIdx !== -1 && (prevIdx === -1 || prevIdx > curIdx)) {
        acc--;
        break;
      }

      prevIdx = curIdx;
    }

    return acc;
  }, skill_trees.length);
}

// 다른 풀이
// function solution(skill, skill_trees) {
//   var answer = 0;
//   var regex = new RegExp(`[^${skill}]`, 'g');

//   return skill_trees
//     .map((x) => x.replace(regex, ''))
//     .filter((x) => {
//         return skill.indexOf(x) === 0 || x === "";
//     })
//     .length
// }
