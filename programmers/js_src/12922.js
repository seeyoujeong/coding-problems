// 수박수박수박수박수박수?

function solution(n) {
  var answer = '';
  
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      answer += '수';
    } else {
      answer += '박';
    }
  }
  
  return answer;
}

// 다른 풀이
// var answer = n => "수박".repeat(n).slice(0, n);