impl Solution {
    pub fn two_out_of_three(nums1: Vec<i32>, nums2: Vec<i32>, nums3: Vec<i32>) -> Vec<i32> {
        use std::collections::HashSet;

        let mut set = HashSet::new();

        for num in nums1.iter() {
            if nums2.contains(num) || nums3.contains(num) {
                set.insert(*num);
            }
        }

        for num in nums2.iter() {
            if nums1.contains(num) || nums3.contains(num) {
                set.insert(*num);
            }
        }

        let result: Vec<i32> = set.into_iter().collect();

        result
    }
}
