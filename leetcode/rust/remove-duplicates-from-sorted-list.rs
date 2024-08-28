// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() {
            return head;
        }

        let mut head = head;
        let mut current_node = head.as_mut().unwrap();

        while let Some(next_node) = current_node.next.as_mut() {
            if current_node.val == next_node.val {
                current_node.next = next_node.next.take();
            } else {
                current_node = current_node.next.as_mut().unwrap();
            }
        }

        head
    }
}
