// [1차] 뉴스 클러스터링
function solution(str1, str2) {
  const str1Multiset = getMultiset(str1);
  const str2Multiset = getMultiset(str2);
  const set = new Set([...str1Multiset, ...str2Multiset]);
  let intersectionLength = 0;
  let unionLength = 0;

  for (const elem of set) {
    const str1MultisetLength = str1Multiset.filter(
      (val) => elem === val
    ).length;
    const str2MultisetLength = str2Multiset.filter(
      (val) => elem === val
    ).length;
    intersectionLength += Math.min(str1MultisetLength, str2MultisetLength);
    unionLength += Math.max(str1MultisetLength, str2MultisetLength);
  }

  return unionLength === 0
    ? 65536
    : Math.floor((intersectionLength / unionLength) * 65536);
}

function getMultiset(str) {
  const result = [];

  for (let i = 0; i < str.length - 1; i++) {
    const elem = str.slice(i, i + 2);

    if (/[a-zA-Z]{2}/.test(elem)) {
      result.push(elem.toLowerCase());
    }
  }

  return result;
}
