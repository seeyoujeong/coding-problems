// 2차원으로 만들기
function solution(num_list, n) {
  const answer = [];
  let arr = [];

  num_list.forEach(num => {
    arr.push(num);

    if (arr.length === n) {
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

// function solution(num_list, n) {
//   return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n));
// }