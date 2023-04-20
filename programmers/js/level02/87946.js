// 피로도
function solution(k, dungeons) {
  const exploreArr = [];

  for (let ways of getAllPermutations(dungeons)) {
    let fatigue = k;
    let explore = 0;

    for (let way of ways) {
      if (way[0] <= fatigue) {
        explore++;
        fatigue -= way[1];
      }
    }

    exploreArr.push(explore);
  }

  return Math.max(...exploreArr);
}

function getPermutations(arr, num) {
  const results = [];
  if (num == 1) return arr.map((elem) => [elem]);

  arr.forEach((value, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, num - 1);
    const attached = permutations.map((elem) => [value, ...elem]);
    results.push(...attached);
  });

  return results;
}

function getAllPermutations(arr) {
  const results = [];

  for (let i = 1; i <= arr.length; i++) {
    results.push(...getPermutations(arr, i));
  }

  return results;
}

// 다른 풀이
// function solution(k, dungeons) {
//   let answer = 0;
//   const dunLen = dungeons.length;
//   const visited = Array(dunLen).fill(false);

//   function dfs(k, dep) {
//     answer = Math.max(answer, dep);

//     for (let i = 0; i < dunLen; i++) {
//       if (k >= dungeons[i][0] && !visited[i] && dep < dunLen) {
//         visited[i] = true;
//         dfs(k - dungeons[i][1], dep + 1);
//         visited[i] = false;
//       }
//     }
//   }

//   dfs(k, 0);

//   return answer;
// }
