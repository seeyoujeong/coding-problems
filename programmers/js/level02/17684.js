// [3차] 압축
function solution(msg) {
  const answer = [];
  let lastIndex = 26;
  const map = new Map();

  for (let i = "A".codePointAt(0); i <= "Z".codePointAt(0); i++) {
    map.set(String.fromCodePoint(i), i - 64);
  }

  for (let i = 0; i < msg.length; i++) {
    let w = msg[i];
    let c = msg[i + 1];

    while (map.has(w + c)) {
      w = w + c;
      i = i + 1;
      c = msg[i + 1];
    }

    if (!map.has(w + c)) {
      answer.push(map.get(w));
      lastIndex++;
      map.set(w + c, lastIndex);
    }
  }

  return answer;
}
