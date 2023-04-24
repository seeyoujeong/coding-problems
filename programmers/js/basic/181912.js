// 배열 만들기 5
function solution(intStrs, k, s, l) {
  return intStrs.reduce((acc, cur) => {
    const num = +cur.slice(s, s + l);

    if (num > k) {
      acc.push(num);
    }

    return acc;
  }, []);
}
