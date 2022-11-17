// 로그인 성공?
function solution(id_pw, db) {
  var answer = '';
  const [inputId, inputPw] = id_pw;

  for (let data of db) {
    const [id, pw] = data;
    if (id === inputId && pw === inputPw) {
      answer = 'login';
      break;
    } else if (id === inputId && pw !== inputPw) {
      answer = 'wrong pw';
      break;
    } else {
      answer = 'fail';
    }
  }

  return answer;
}

// 다른 풀이
// function solution(id_pw, db) {
//   db = db.filter(v => v[0] === id_pw[0]);

//   if (!db.length) return 'fail';

//   for (let d of db) if (d[1] === id_pw[1]) return 'login';

//   return 'wrong pw';
// }