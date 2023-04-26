// n개 간격의 원소들
function solution(num_list, n) {
  return num_list.filter((_, idx) => idx % n === 0);
}
