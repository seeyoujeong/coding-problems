// 숫자 짝꿍
function solution(X, Y) {
  let answer = '';
  const arrX = [...X];
  const arrY = [...Y];

  for (let x of new Set(X)) {
    if (Y.includes(x)) {
      const lenX = arrX.filter(v => x === v).length;
      const lenY = arrY.filter(v => x === v).length;

      answer += x.repeat(Math.min(lenX, lenY));
    } 
  }

  if (answer === '') {
    return '-1';
  }

  if (+answer === 0) {
    return '0';
  }

  return [...answer].sort((a, b) => b - a).join('');
}

// 다른 풀이
// function solution(X, Y) {
//   const [arrX, arrY] = [[...X], [...Y]];
//   const answer = [...new Set(X)].reduce((acc, cur) => acc + (Y.includes(cur) ? 
//           cur.repeat(Math.min(arrX.filter(v => cur === v).length, 
//                               arrY.filter(v => cur === v).length)) : 
//           ''), '');
  
//   return answer.length ? 
//       (+answer ? [...answer].sort((a, b) => b - a).join('') : '0') :
//       '-1';
// }

// function solution(X, Y) {
//   let result = '';
//   const numObj = {};

//   for (const char of X) {
//     numObj[char] = (numObj[char] | 0) + 1;
//   }

//   for (const char of Y) {
//     if (!numObj[char]) continue;
//     result += char;
//     numObj[char]--;
//   }

//   if (result === '') return '-1';
//   if (+result === 0) return '0';
//   return [...result]
//     .map(Number)
//     .sort((a, b) => b - a)
//     .join('');    
// }