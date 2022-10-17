// 한 번만 등장한 문자
function solution(s) {
  var answer = '';
  const set = new Set(s);

  set.forEach(setElem => {
    const len = s
      .split('')
      .filter(sElem => sElem === setElem)
      .length;

    if (len === 1) {
      answer += setElem;
    }
  });

  answer = answer.split('').sort().join('');

  return answer;
}

// 다른 풀이
// function solution(s) {
//   let res = [];
//   for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//   return res.sort().join('');
// }