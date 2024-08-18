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
impl Solution1 {
    pub fn merge_two_lists(
        list1: Option<Box<ListNode>>,
        list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        match (list1, list2) {
            (Some(li1), None) => Some(li1),
            (None, Some(li2)) => Some(li2),
            (None, None) => None,
            (Some(li1), Some(li2)) => match li1.val < li2.val {
                true => Some(Box::new(ListNode {
                    val: li1.val,
                    next: Self::merge_two_lists(li1.next, Some(li2)),
                })),
                false => Some(Box::new(ListNode {
                    val: li2.val,
                    next: Self::merge_two_lists(Some(li1), li2.next),
                })),
            },
        }
    }
}

impl Solution2 {
    pub fn merge_two_lists(
        list1: Option<Box<ListNode>>,
        list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut dummy = ListNode::new(0);
        let mut current = &mut dummy;

        let mut li1 = &list1;
        let mut li2 = &list2;

        while li1.is_some() && li2.is_some() {
            let li1_node = li1.as_ref().unwrap();
            let li2_node = li2.as_ref().unwrap();

            if li1_node.val < li2_node.val {
                current.next = Some(Box::new(ListNode::new(li1_node.val)));
                li1 = &li1_node.next;
            } else {
                current.next = Some(Box::new(ListNode::new(li2_node.val)));
                li2 = &li2_node.next;
            }

            current = current.next.as_mut().unwrap();
        }

        while let Some(li1_node) = li1 {
            current.next = Some(Box::new(ListNode::new(li1_node.val)));
            li1 = &li1_node.next;
            current = current.next.as_mut().unwrap();
        }

        while let Some(li2_node) = li2 {
            current.next = Some(Box::new(ListNode::new(li2_node.val)));
            li2 = &li2_node.next;
            current = current.next.as_mut().unwrap();
        }

        dummy.next
    }
}
