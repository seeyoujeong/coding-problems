impl Solution {
    pub fn intersect(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        use std::collections::HashMap;

        let mut count = HashMap::new();

        for num in nums1 {
            match count.get(&num) {
                Some(&n) => count.insert(num, n + 1),
                None => count.insert(num, 1),
            };
        }

        let mut result = vec![];

        for num in nums2 {
            match count.get(&num) {
                Some(&n) if n > 0 => {
                    result.push(num);
                    count.insert(num, n - 1);
                }
                _ => (),
            }
        }

        result
    }
}
