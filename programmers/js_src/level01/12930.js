// 이상한 문자 만들기

function solution(s) {
  var answer = '';

  answer = s.split(' ').map(val => {
    var str = '';

    for (let i = 0; i < val.length; i++) {
      if (i % 2 == 0) {
        str += val[i].toUpperCase();
      } else {
        str += val[i].toLowerCase();
      }
    }

    return str;
  }).join(' ');

  return answer;
}

// 다른 풀이
// function solution(s) {
//   return s.toUpperCase().replace(/(\w)(\w)/g, function(a) { return a[0].toUpperCase() + a[1].toLowerCase(); });
// }