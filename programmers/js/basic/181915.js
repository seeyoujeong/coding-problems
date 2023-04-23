// 글자 이어 붙여 문자열 만들기
function solution(my_string, index_list) {
  return index_list.reduce((acc, cur) => acc + my_string[cur], "");
}
