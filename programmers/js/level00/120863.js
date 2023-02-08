// 다항식 더하기
function solution(polynomial) {
  let answer = '';
  polynomial = polynomial.split(' + ');

  const xArr = polynomial.filter(v => v.includes('x'));

  if (xArr.length > 0) {
    const xNum = xArr.reduce((acc, cur) => 
      acc + (cur === 'x' ? 1 : parseInt(cur)), 0
    );

    answer += xNum !== 1 ? `${xNum}x` : 'x'; 
  }

  const numArr = polynomial.filter(v => !v.includes('x'));

  if (numArr.length > 0 && xArr.length > 0) {
    answer += ' + ' + numArr.reduce((acc, cur) => acc + +cur, 0);
  } else if (numArr.length > 0) {
    answer += numArr.reduce((acc, cur) => acc + +cur, 0);
  }

  return answer;
}