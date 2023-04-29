// 빈 배열에 추가, 삭제하기
function solution(arr, flag) {
  const x = [];

  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      x.push(...Array(arr[i] * 2).fill(arr[i]));
    } else {
      x.splice(-arr[i]);
    }
  }

  return x;
}
