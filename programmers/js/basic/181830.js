// 정사각형으로 만들기
function solution(arr) {
  const rowLen = arr[0].length;
  const colLen = arr.length;

  if (rowLen > colLen) {
    for (let i = 0; i < rowLen - colLen; i++) {
      arr.push(Array(rowLen).fill(0));
    }

    return arr;
  }

  if (rowLen < colLen) {
    return arr.map((elem) => {
      for (let i = 0; i < colLen - rowLen; i++) {
        elem.push(0);
      }

      return elem;
    });
  }

  return arr;
}
