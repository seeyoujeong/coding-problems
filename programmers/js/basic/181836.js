// 그림 확대
function solution(picture, k) {
  return picture.reduce((acc, cur) => {
    for (let i = 0; i < k; i++) {
      acc.push([...cur].map((px) => px.repeat(k)).join(""));
    }

    return acc;
  }, []);
}
