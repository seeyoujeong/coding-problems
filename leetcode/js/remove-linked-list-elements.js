/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode();
  let current = dummy;

  while (head) {
    if (head.val !== val) {
      current.next = new ListNode(head.val);
      current = current.next;
    }

    head = head.next;
  }

  return dummy.next;
};
