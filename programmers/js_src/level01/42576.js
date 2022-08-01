// 완주하지 못한 선수

function solution(participant, completion) {
  var answer = '';

  // 효율↓
  // completion.forEach(c => {
  //   if (participant.includes(c)) {
  //     participant.splice(participant.indexOf(c), 1);
  //   }
  // });
  
  // answer = participant[0];
  
  participant.sort();
  completion.sort();
  
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    }
  }
  
  return answer;
}

// 다른 풀이
// function solution(participant, completion) {
//   return participant.find(name => !completion[name]--, 
//     completion.map(name => completion[name] = (completion[name] | 0) + 1))
// }

// function solution(participant, completion) {
//   const map = new Map();

//   for(let i = 0; i < participant.length; i++) {
//     let a = participant[i];
//     let b = completion[i];

//     map.set(a, (map.get(a) || 0) + 1);
//     map.set(b, (map.get(b) || 0) - 1);
//   }

//   for(let [k, v] of map) {
//     if(v > 0) return k;
//   }

//   return 'nothing';
// }