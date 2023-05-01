// 커피 심부름
function solution(order) {
  return order.reduce(
    (acc, cur) => (cur.includes("cafelatte") ? acc + 5000 : acc + 4500),
    0
  );
}
