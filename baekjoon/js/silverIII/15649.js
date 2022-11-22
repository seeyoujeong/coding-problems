// N과 M (1)
const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
const array = new Array(n).fill(0).map((_, idx) => idx + 1);

const getPermutations = (arr, num) => {
  const result = [];

  if (num === 1) {
    return arr.map(elem => [elem]); 
  } 

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)] 
    const permutations = getPermutations(rest, num - 1); 
    const attached = permutations.map(elem => [fixed, ...elem]); 
    result.push(...attached); 
  });

  return result;
};

getPermutations(array, m).forEach(result => {
  console.log(result.join(' '));
});

// 다른 풀이
// const state = new Array(n + 1).fill(false);
// let output = "";
// let pool = [];

// function search(deps, n, m) {
//   if (deps === m) {
//     output += pool.join(' ') + '\n';
//     return;
//   }

//   for(let i = 1; i <= n; i++){
//     if (!state[i]) {
//       state[i] = true;
//       pool.push(i);
//       search(deps + 1, n, m);
//       pool.pop();
//       state[i] = false;
//     }
//   }
// }

// search(0, n, m);
// console.log(output);