// 왼쪽 오른쪽
function solution(str_list) {
  const indexOfL = str_list.indexOf("l");
  const indexOfR = str_list.indexOf("r");

  if (indexOfL === -1 || indexOfR === -1) {
    if (indexOfL !== -1) {
      return str_list.slice(0, indexOfL);
    }

    if (indexOfR !== -1) {
      return str_list.slice(indexOfR + 1);
    }

    return [];
  }

  if (indexOfL < indexOfR) {
    return str_list.slice(0, indexOfL);
  }

  if (indexOfR < indexOfL) {
    return str_list.slice(indexOfR + 1);
  }
}

// 다른 풀이
// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "l") return arr.slice(0, i);
//     if (arr[i] === "r") return arr.slice(i + 1);
//   }
//   return [];
// }
