// 숫자 짝꿍
function solution(X, Y) {
  var answer = '';
  const arrX = X.split('');
  const arrY = Y.split('');
  const setX = new Set(X);

  for (let x of setX) {
    if (Y.includes(x)) {
      const lenX = arrX.filter(v => x === v).length;
      const lenY = arrY.filter(v => x === v).length;

      answer += x.repeat(Math.min(lenX, lenY));
    } 
  }

  if (answer === '') {
    return '-1';
  }

  if (+answer === 0) {
    return '0';
  }

  answer = answer.split('').sort((a, b) => b - a).join('');

  return answer;
}