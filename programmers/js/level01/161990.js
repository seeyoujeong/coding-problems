// 바탕화면 정리
function solution(wallpaper) {
  const x = [];
  const y = [];

  wallpaper.forEach((elem, i) => {
    [...elem].forEach((val, j) => {
      if (val === '#') {
        x.push(i);
        y.push(j);
      }
    });
  });

  x.sort((a, b) => a - b);
  y.sort((a, b) => a - b);

  return [x[0], y[0], x.at(-1) + 1, y.at(-1) + 1];
}
