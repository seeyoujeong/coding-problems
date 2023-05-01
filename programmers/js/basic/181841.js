// 꼬리 문자열
function solution(str_list, ex) {
  return str_list.filter((str) => !str.includes(ex)).join("");
}
