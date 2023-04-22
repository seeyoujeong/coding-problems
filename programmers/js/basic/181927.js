// 마지막 두 원소
function solution(num_list) {
  const lastNum = num_list.at(-1);
  const prevNum = num_list.at(-2);

  return lastNum > prevNum
    ? num_list.concat(lastNum - prevNum)
    : num_list.concat(lastNum * 2);
}
