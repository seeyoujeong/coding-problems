impl Solution1 {
    pub fn num_identical_pairs(nums: Vec<i32>) -> i32 {
        let mut result = 0;

        for i in 0..(nums.len() - 1) {
            for j in (i + 1)..nums.len() {
                if nums[i] == nums[j] {
                    result += 1;
                }
            }
        }

        result
    }
}

impl Solution2 {
    pub fn num_identical_pairs(nums: Vec<i32>) -> i32 {
        use std::collections::HashMap;

        let mut map = HashMap::new();
        let mut count = 0;

        for num in nums {
            let val = map.entry(num).or_insert(0);
            count += *val;
            *val += 1
        }

        count
    }
}
