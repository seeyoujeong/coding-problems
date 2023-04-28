// 공백으로 구분하기 2
function solution(my_string) {
  return my_string.split(" ").filter((str) => str !== "");
}

// 다른 풀이
function solution(my_string) {
  return my_string.trim().split(/ +/);
}
