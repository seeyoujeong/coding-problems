// 옹알이 (2)
function solution(babbling) {
  var answer = 0;
  const pronunciation = ["aya", "ye", "woo", "ma"];

  for (let babble of babbling) {
    if (pronunciation.some(elem => babble.includes(elem + elem))) {
      continue;
    }

    let tmp = '';

    for (let pronun of pronunciation) {
      const regexp = new RegExp(pronun, 'g');
      const match = babble.match(regexp);
      tmp += match ? match.join('') : '';

      if (tmp.length === babble.length) {
        answer++;
        break;
      }   
    }
  }

  return answer;
}