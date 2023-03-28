// 덧칠하기
function solution(n, m, section) {
  let answer = 0;

  if (m >= section.at(-1)) {
    return 1;
  }

  while (section.length) {
    const paintRange = Array(m)
      .fill(0)
      .map((_, i) => section[0] + i);

    paintRange.forEach((num) => {
      if (section.includes(num)) {
        section.shift();
      }
    });

    answer++;
  }

  return answer;
}

// 다른 풀이
// function solution(n, m, section) {
//   let answer = 0;
//   let painted = 0;

//   for (const sNum of section) {
//     if (painted < sNum) {
//       painted = sNum + m - 1;
//       answer++;
//     }
//   }

//   return answer;
// }