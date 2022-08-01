// K번째수

function solution(array, commands) {
  var answer = [];

  for (let command of commands) {
    let arraySlice = array.slice(command[0] - 1, command[1]);

    arraySlice.sort((a, b) => a - b);

    answer.push(arraySlice[command[2] - 1]);
  }

  return answer;
}

// 다른 풀이
// function solution(array, commands) {
//   return commands.map(command => {
//     const [sPosition, ePosition, position] = command
//     const newArray = array
//       .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//       .sort((a,b) => a - b)    

//     return newArray[position - 1]
//   })
// }