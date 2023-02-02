// 둘만의 암호
function solution(s, skip, index) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  [...skip].forEach(char => {
      alphabet = alphabet.split(char).join('');
  });

  return [...s].reduce((acc, cur) => 
    acc + alphabet[(alphabet.indexOf(cur) + index) % alphabet.length]
    , '');
}

// 다른 풀이
// function solution(s, skip, index) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     .match(new RegExp(`[^${skip}]`, 'g'));

//   return [...s].reduce((acc, cur) => 
//     acc + alphabet[(alphabet.indexOf(cur) + index) % alphabet.length]
//     , '');
// }