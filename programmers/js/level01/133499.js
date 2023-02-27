// 옹알이 (2)
function solution(babbling) {
  let answer = 0;
  const pronunciation = ["aya", "ye", "woo", "ma"];

  for (let babble of babbling) {
    if (pronunciation.some(elem => babble.includes(elem + elem))) {
      continue;
    }
      
    let tmp = '';

    for (let pronun of pronunciation) {
      const match = babble.match(new RegExp(pronun, 'g'));
      tmp += match ? match.join('') : '';

      if (tmp.length === babble.length) {
        answer++;
        break;
      }   
    }
  }

  return answer;
}

// 다른 풀이
// function solution(babbling) {
//   const regexp1 = /(aya|ye|woo|ma)\1+/;
//   const regexp2 = /^(aya|ye|woo|ma)+$/;

//   return babbling.reduce((ans, word) => (
//     !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
//   ), 0);
// }

// function solution(babbling) {
//   const babblables = ["aya", "ye", "woo", "ma"];

//   return babbling.reduce((possible, babbl, index) => {
//     for (let i = 0; i < babblables.length; i += 1) {
//       if (babbl.includes(babblables[i].repeat(2))) return possible;
//     }

//     for (let i = 0; i < babblables.length; i += 1) {
//       babbl = babbl.split(babblables[i]).join(' ').trim();
//     }

//     if (babbl) return possible;

//     return possible += 1;
//   }, 0)
// }