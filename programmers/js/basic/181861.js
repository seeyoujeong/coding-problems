// 배열의 원소만큼 추가하기
function solution(arr) {
  return arr.reduce((acc, cur) => {
    for (let i = 0; i < cur; i++) {
      acc.push(cur);
    }

    return acc;
  }, []);
}

// 다른 풀이
// function solution(arr) {
//   return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
// }
