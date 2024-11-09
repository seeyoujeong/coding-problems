impl Solution {
    pub fn added_integer(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let mut nums1 = nums1.clone();
        let mut nums2 = nums2.clone();

        nums1.sort_unstable();
        nums2.sort_unstable();

        nums2[0] - nums1[0]
    }
}
