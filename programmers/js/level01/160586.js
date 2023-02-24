// 대충 만든 자판
function solution(keymap, targets) {
  const answer = [];
  const countKeyObj = countKeymap(keymap);

  for (const target of targets) {
    let count = 0;
    
    for (const char of target) {
      if (!(char in countKeyObj)) {
        answer.push(-1);
        break;
      }
      
      count += countKeyObj[char];
    }
    
    if (count !== 0) {
      answer.push(count);
    }
  }
  
  return answer;
}

function countKeymap(keymap) {
  const keymapSet = new Set([...keymap.join('')]);
  const keymapObj = {};
  
  keymapSet.forEach(k => {
    keymap.forEach(key => {
      if (key.includes(k)) {
        const kIndex = key.indexOf(k);
        keymapObj[k] = keymapObj[k] > kIndex ? 
          kIndex + 1 : (keymapObj[k] || kIndex + 1);
      }
    });
  });
  
  return keymapObj;
}
