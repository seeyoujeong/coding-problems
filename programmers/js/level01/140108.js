// 문자열 나누기
function solution(s) {
  var answer = 0;
  let firstChar = s[0];
  let firstCharCount = 0;
  let otherCharCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (firstChar === s[i]) {
      firstCharCount++;
    } else {
      otherCharCount++;
    }

    if (firstCharCount === otherCharCount) {
      answer++;
      firstChar = s[i + 1];
      firstCharCount = 0;
      otherCharCount = 0;
    }

    if (i === s.length - 1 && firstCharCount !== otherCharCount) {
      answer++;
    }
  }

  return answer;
}