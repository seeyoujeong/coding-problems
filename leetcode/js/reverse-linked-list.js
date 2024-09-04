/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head;
  }

  const stack = [];

  while (head) {
    stack.push(new ListNode(head.val));
    head = head.next;
  }

  const result = stack.pop();
  let current = result;

  while (stack.length > 0) {
    current.next = stack.pop();
    current = current.next;
  }

  return result;
};

var reverseList = function (head) {
  let revHead = null;
  while (head !== null) {
    const next = head.next;
    head.next = revHead;
    revHead = head;
    head = next;
  }

  return revHead;
};
