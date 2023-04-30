// 배열의 원소 삭제하기
function solution(arr, delete_list) {
  return arr.filter((num) => !delete_list.includes(num));
}
