/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const stack = [];

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  return stack.join("") === stack.reverse().join("");
};

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = slow;
  let next = slow.next;
  mid.next = null;

  while (next) {
    const temp = next.next;
    next.next = mid;
    mid = next;
    next = temp;
  }

  let forward = head;
  let backward = mid;

  while (backward) {
    if (forward.val !== backward.val) return false;

    forward = forward.next;
    backward = backward.next;
  }

  return true;
};
