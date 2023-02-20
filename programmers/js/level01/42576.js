// 완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// 다른 풀이
// function solution(participant, completion) {
//   return participant.find(name => !completion[name]--, 
//     completion.map(name => completion[name] = (completion[name] | 0) + 1))
// }

// function solution(participant, completion) {
//   const map = new Map();

//   for(let i = 0; i < participant.length; i++) {
//     let pName = participant[i];
//     let cName = completion[i];

//     map.set(pName, (map.get(pName) || 0) + 1);
//     map.set(cName, (map.get(cName) || 0) - 1);
//   }

//   for(let [name, num] of map) {
//     if (num > 0) return name;
//   }
// }

// function solution(participant, completion) {
//   participant.sort();
//   completion.sort();
    
//   return participant.find((name, idx) => name !== completion[idx]);
// }