// 스킬트리
function solution(skill, skill_trees) {
  var answer = skill_trees.length;

  for (let skill_tree of skill_trees) {
    let tmp = 0;
    for (let i = 0; i < skill.length; i++) {
      let index = skill_tree.indexOf(skill[i]);

      if ((tmp == -1 && index > tmp) || (index != -1 && index < tmp)) {
        answer--;
        break;
      }

      tmp = index;
    }   
  }

  return answer;
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

// function solution(skill, skill_trees) {
//   function isCorrect(n) {
//     let test = skill.split('');

//     for (var i = 0; i < n.length; i++) {
//       if (!skill.includes(n[i])) continue;
//       if (n[i] === test.shift()) continue;
//       return false;
//     }

//     return true;
//   }    

//   return skill_trees.filter(isCorrect).length;
// }