impl Solution {
    pub fn sum_of_squares(nums: Vec<i32>) -> i32 {
        let mut result = 0;

        for (i, num) in nums.iter().enumerate() {
            if (nums.len() % (i + 1) == 0) {
                result += num * num;
            }
        }

        result
    }
}
