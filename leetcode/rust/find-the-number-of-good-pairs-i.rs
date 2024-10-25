impl Solution {
    pub fn number_of_pairs(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> i32 {
        let mut result = 0;

        for num2 in nums2.iter() {
            for num1 in nums1.iter() {
                if num1 % (num2 * k) == 0 {
                    result += 1;
                }
            }
        }

        result
    }
}
