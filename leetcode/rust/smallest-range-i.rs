impl Solution {
    pub fn smallest_range_i(nums: Vec<i32>, k: i32) -> i32 {
        let mut min = nums[0];
        let mut max = nums[0];

        for num in nums {
            min = min.min(num);
            max = max.max(num);
        }

        if max - k <= min + k {
            0
        } else {
            max - min - 2 * k
        }
    }
}
