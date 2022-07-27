// 제일 작은 수 제거하기

function solution(arr) {
  var answer = [];

  if (arr.length == 1) {
    answer.push(-1);
  }

  for (let i of arr) {
    if (i != Math.min(...arr)) {
      answer.push(i);
    }
  }

  return answer;
}

// 다른 풀이
// function solution(arr) {
//   arr.splice(arr.indexOf(Math.min(...arr)),1);
//   if(arr.length<1)return[-1];
//   return arr;
// }