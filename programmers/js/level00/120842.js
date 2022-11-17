// 2차원으로 만들기
function solution(num_list, n) {
  var answer = [];
  let arr = [];

  num_list.forEach((num, index) => {
    arr.push(num);

    if ((index + 1) % n == 0) {
      answer.push(arr);
      arr = [];
    }
  });

  return answer;
}

// 다른 풀이
// function solution(num_list, n) {
//   var answer = [];

//   while(num_list.length) {
//     answer.push(num_list.splice(0, n));
//   }

//   return answer;
// }