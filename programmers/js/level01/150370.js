// 개인정보 수집 유효기간
function solution(today, terms, privacies) {
  const [tY, tM, tD] = today.split('.').map(Number);
  const tDays = tY * 12 * 28 + tM * 28 + tD;
  const termsObj = terms.reduce((acc, cur) => {
    const [kind, validity] = cur.split(' ');
    
    return {...acc, [kind]: +validity};
  }, {});
  
  return privacies.reduce((acc, cur, index) => {
    const [pDate, term] = cur.split(' ');
    const [pY, pM, pD] = pDate.split('.').map(Number);
    const pDays = pY * 12 * 28 + pM * 28 + pD + termsObj[term] * 28;
    
    return tDays >= pDays ? (acc.push(index + 1), acc) : acc;
  }, []);
}
