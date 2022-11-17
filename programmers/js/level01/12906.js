// 같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  var temp;

  for (let i of arr) {
    if (temp != i) {
      answer.push(i);
    }

    temp = i;
  }

  return answer;
}

// 다른 풀이
// function solution(arr) {
//     return arr.filter((val, index) => val != arr[index + 1]);
// }