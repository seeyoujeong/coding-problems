impl Solution1 {
    pub fn distinct_difference_array(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashSet;

        let mut prefix = vec![0; nums.len()];
        let mut suffix = vec![0; nums.len()];

        let mut set = HashSet::new();

        for (idx, num) in nums.iter().enumerate() {
            set.insert(num);
            prefix[idx] = set.len() as i32;
        }

        let mut set = HashSet::new();

        for (idx, num) in nums.iter().rev().enumerate() {
            suffix[nums.len() - idx - 1] = set.len() as i32;
            set.insert(num);
        }

        let mut result = vec![0; nums.len()];

        for i in 0..nums.len() {
            result[i] = prefix[i] - suffix[i];
        }

        result
    }
}

impl Solution2 {
    pub fn distinct_difference_array(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashSet;

        let mut result = Vec::new();

        for i in 0..nums.len() {
            let prefix = HashSet::<_>::from_iter(nums[0..=i].iter()).len() as i32;
            let suffix = HashSet::<_>::from_iter(nums[(i + 1)..].iter()).len() as i32;
            let diff = prefix - suffix;

            result.push(diff);
        }

        result
    }
}
