impl Solution {
    pub fn return_to_boundary_count(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut steps = 0;

        for num in nums {
            steps += num;

            if steps == 0 {
                result += 1;
            }
        }

        result
    }
}
