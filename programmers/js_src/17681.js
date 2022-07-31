// [1차] 비밀지도

function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    let decryption = (arr1[i] | arr2[i]).toString(2);

    while (decryption.length < n) {
      decryption = decryption.split('');
      decryption.unshift('0');
      decryption = decryption.join('');
    }

    answer.push(decryption);
  }

 answer = answer
    .map(x => x
      .split('')
      .map(y => y == 1 ? y = '#' : y = ' ')
      .join(''));

  return answer;
}

// 다른 풀이
// function solution(n, arr1, arr2) {
//   return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//   return '0'.repeat(n - s.length) + s;
// }