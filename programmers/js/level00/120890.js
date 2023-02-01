// 가까운 수
function solution(array, n) {
  const arr = [...array, n].sort((a, b) => a - b);
  const idx = arr.indexOf(n);
  
  if (idx === arr.length - 1) {
    return arr.at(-2);
  } else if (idx === 0) {
    return arr[1];
  } else {
    return arr[idx] - arr[idx - 1] <= arr[idx + 1] - arr[idx] ?
      arr[idx - 1] :
      arr[idx + 1];
  }
}