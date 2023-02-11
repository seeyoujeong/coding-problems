// 옹알이 (1)
function solution(babbling) {
  let answer = 0;
  const pronunciation = ["aya", "ye", "woo", "ma"];

  babbling.forEach(babble => {
    let tmp = '';
    
    for (let pronun of pronunciation) {
      const match = babble.match(new RegExp(pronun, 'g'));
      tmp += match ? match.join('') : '';

      if (tmp.length === babble.length) {
        answer++;
        break;
      }   
    }
  });

  return answer;
}

// 다른 풀이
// function solution(babbling) {
//   let answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;

//   babbling.forEach(word => {
//     if (regex.test(word)) answer++;  
//   })

//   return answer;
// }