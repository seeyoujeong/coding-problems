// 가까운 1 찾기
function solution(arr, idx) {
  for (let i = 0; i < arr.length; i++) {
    if (i >= idx && arr[i] === 1) {
      return i;
    }
  }

  return -1;
}

// 다른 풀이
function solution(arr, idx) {
  return arr.indexOf(1, idx);
}
