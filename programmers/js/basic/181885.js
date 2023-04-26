// 할 일 목록
function solution(todo_list, finished) {
  return todo_list.filter((_, idx) => !finished[idx]);
}
