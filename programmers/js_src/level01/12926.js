// 시저 암호
function solution(s, n) {
  var answer = '';

  answer = s.split(' ').map(i => {
    return i.split('').map(j => {
      if (j.codePointAt(0) + n > 'z'.codePointAt(0)) {
        return String.fromCodePoint(
          'a'.codePointAt(0) + j.codePointAt(0) + n - 'z'.codePointAt(0) - 1);
      } else if (j.codePointAt(0) <= 'Z'.codePointAt(0) && 
                  j.codePointAt(0) + n > 'Z'.codePointAt(0)) {
        return String.fromCodePoint(
          'A'.codePointAt(0) + j.codePointAt(0) + n - 'Z'.codePointAt(0) - 1);
      }
      return String.fromCodePoint(j.codePointAt(0) + n);
    }).join('');
  }).join(' ');

  return answer;
}