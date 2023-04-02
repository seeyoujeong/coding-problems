// 추억 점수
function solution(name, yearning, photo) {
  const nameYearning = name.reduce((acc, cur, idx) => {
    acc[cur] = yearning[idx];
    return acc;
  }, {});

  return photo.map((names) =>
    names.reduce((acc, cur) => acc + (nameYearning[cur] ?? 0), 0)
  );
}
