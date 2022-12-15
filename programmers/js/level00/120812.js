// 최빈값 구하기
function solution(array) {
  const count = {};

  array.forEach(value => {
    if (!(value in count)) {
      count[value] = 1;
    } else {
      count[value]++;
    }  
  });
  const countValues = Object.values(count);
  const max = Math.max(...countValues);

  if (countValues.filter(value => value == max).length > 1) {
    return -1;
  } else {
    return +Object.keys(count).find(key => count[key] == max);
  }
}

// 다른 풀이
// function solution(array) {
//   const count = array.reduce((prev, num) => (
//     { ...prev, [num]: (prev[num] || 0) + 1 }), {}
//   );
//   const countValues = Object.values(count);
//   const max = Math.max(...countValues);
  
//   if (countValues.filter(value => value == max).length > 1) {
//     return -1;
//   } else {
//     return +Object.keys(count).find(key => count[key] == max);
//   }
// }

// function solution(array) {
//   const count = [...array.reduce((prev, num) => 
//     new Map([ ...prev, [num, (prev.get(num) || 0) + 1 ]]), new Map()
//   )].sort((a, b) => b[1] - a[1]);
    
//   return count[0][1] === count?.[1]?.[1] ? -1 : count[0][0];
// }

// function solution(array) {
//   const count = Object.entries(array.reduce((prev, num) => (
//     { ...prev, [num]: (prev[num] || 0) + 1 }), {}
//   )).sort((a, b) => b[1] - a[1]);
    
//   return count[0][1] === count?.[1]?.[1] ? -1 : +count[0][0];
// }