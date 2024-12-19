impl Solution {
    pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {
        if nums.is_empty() {
            return vec![];
        }

        let mut result = Vec::new();
        let mut start = nums[0];
        let mut end = nums[0];

        for i in 0..nums.len() {
            if i + 1 < nums.len() && nums[i + 1] == end + 1 {
                end += 1;
            } else {
                let range = if start == end {
                    format!("{}", start)
                } else {
                    format!("{}->{}", start, end)
                };

                result.push(range);

                if i + 1 < nums.len() {
                    start = nums[i + 1];
                    end = nums[i + 1];
                }
            }
        }

        result
    }
}
