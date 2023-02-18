// 이상한 문자 만들기
function solution(s) {
  return s
    .split(' ')
    .map(val => 
      [...val]
        .reduce((acc, cur, idx) => 
          acc + (idx % 2 ? 
            cur.toLowerCase() : 
            cur.toUpperCase())
        , ''))
    .join(' ');
}

// 다른 풀이
// function solution(s) {
//   return s
//     .toUpperCase()
//     .replace(/(\w)(\w)/g, a => a[0].toUpperCase() + a[1].toLowerCase());
// }