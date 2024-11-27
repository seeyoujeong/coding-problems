impl Solution {
    pub fn separate_digits(nums: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::new();

        for num in nums {
            result.append(
                &mut num
                    .to_string()
                    .chars()
                    .map(|v| v.to_digit(10).unwrap() as i32)
                    .collect::<Vec<_>>(),
            );
        }

        result
    }
}
