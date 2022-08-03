// 신규 아이디 추천

function solution(new_id) {
  var answer = '';
  
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-z0-9-_.]/g, '');
  new_id = new_id.replace(/[.]{2,}/g, '.');
  new_id = new_id.replace(/^[.]|[.]$/g, '');
  new_id = new_id.length == 0 ? 'a' : new_id;
  new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id;
  new_id = new_id.replace(/[.]$/g, '');
  new_id = new_id.length <= 2 ? 
    new_id + new_id.slice(-1).repeat(3 - new_id.length) : new_id;
  
  answer = new_id;
  
  return answer;
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

// function solution(new_id) {
//   const id = new_id
//     .toLowerCase()
//     .replace(/[^\w\d-_.]/g, '')
//     .replace(/\.{2,}/g, '.')
//     .replace(/^\.|\.$/g, '')
//     .padEnd(1, 'a')
//     .slice(0, 15)
//     .replace(/^\.|\.$/g, ''); 

//   return id.padEnd(3, id[id.length - 1]);
// }