// [3차] 파일명 정렬
function solution(files) {
  return files
    .map((file) => {
      const arr = [];

      arr.push(file.match(/^[a-zA-Z-\s]*/)[0]);
      file = file.replace(/^[a-zA-Z-\s]*/, "");
      arr.push(file.match(/^[0-9]*/)[0]);
      file = file.replace(/^[0-9]*/, "");
      arr.push(file);

      return arr;
    })
    .sort((a, b) => {
      const aHead = a[0].toUpperCase();
      const bHead = b[0].toUpperCase();

      if (aHead === bHead) {
        return a[1] - b[1];
      }

      return aHead.localeCompare(bHead);
    })
    .map((file) => file.join(""));
}
