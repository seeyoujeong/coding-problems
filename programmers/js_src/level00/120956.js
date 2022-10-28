// 옹알이 (1)
function solution(babbling) {
  var answer = 0;
  const pronunciation = ["aya", "ye", "woo", "ma"];

  babbling.forEach(babble => {
    let tmp = '';
    
    for (let pronun of pronunciation) {
      const regexp = new RegExp(pronun);
      const match = babble.match(regexp);
      tmp += match ? match.join('') : '';

      if (tmp.length === babble.length) {
        answer++;
        break;
      }   
    }
  });

  return answer;
}