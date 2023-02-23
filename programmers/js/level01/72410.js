// 신규 아이디 추천
function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  
  return new_id.padEnd(3, new_id.at(-1));
}

// 다른 풀이
// function solution(new_id) {
//   const answer = new_id
//     .toLowerCase()
//     .replace(/[^\w-_.]/g, '')
//     .replace(/\.+/g, '.')
//     .replace(/^\.|\.$/g, '') 
//     .replace(/^$/, 'a')
//     .slice(0, 15).replace(/\.$/, '');

//   const len = answer.length;

//   return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }