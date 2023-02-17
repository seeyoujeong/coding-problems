// 시저 암호
function solution(s, n) {
  const utf16 = char => char.codePointAt(0);
  const zCode = utf16('z');
  const ZCode = utf16('Z');
    
  return s.split(' ').map(i => {
    return [...i].map(j => {
      const charCode = utf16(j);
        
      if (charCode + n > zCode) {
        return String.fromCodePoint(utf16('a') + charCode + n - zCode - 1);
      } else if (charCode <= ZCode && charCode + n > ZCode) {
        return String.fromCodePoint(utf16('A') + charCode + n - ZCode - 1);
      }
        
      return String.fromCodePoint(utf16(j) + n);
    }).join('');
  }).join(' ');
}
