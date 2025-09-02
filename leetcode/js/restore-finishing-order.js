/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
  friends = new Set(friends);

  return order.filter((id) => friends.has(id));
};
