// 개인정보 수집 유효기간
function solution(today, terms, privacies) {
  const answer = [];
  const [tY, tM, tD] = today.split('.').map(Number);
  const termsObj = {};
  
  terms.forEach(term => {
    const [kind, validity] = term.split(' ');
    
    termsObj[kind] = +validity;
  });
  
  privacies.forEach((privacy, index) => {
    const [pDate, term] = privacy.split(' ');
    let [pY, pM, pD] = pDate.split('.').map(Number);
    
    if (pD === 1) {
      pD = 28;
      
      if (pM === 1) {
        pM = 12;
        pY -= 1;
      } else {
        pM -= 1;
      }
    } else {
      pD -= 1;
    }
    
    if (pM + termsObj[term] > 12) {
      pY += Math.floor((pM + termsObj[term] - 1) / 12);
      pM = (pM + termsObj[term]) % 12 === 0 ? 
        12 : 
        (pM + termsObj[term]) % 12;
    } else {
      pM += termsObj[term];
    }
    
    if (tY > pY) {
      answer.push(index + 1);
    } else if (tY === pY && tM > pM) {
      answer.push(index + 1);
    } else if (tY === pY && tM === pM && tD > pD) {
      answer.push(index + 1);
    }
  });
  
  return answer;
}