impl Solution {
    pub fn max_frequency_elements(nums: Vec<i32>) -> i32 {
        use std::collections::HashMap;

        let mut count_nums = HashMap::new();
        let mut max_freq = 0;

        for num in nums {
            count_nums
                .entry(num)
                .and_modify(|counter| *counter += 1)
                .or_insert(1);
            max_freq = max_freq.max(*count_nums.get(&num).unwrap());
        }

        let mut result = 0;

        for (_k, &v) in count_nums.iter() {
            if v == max_freq {
                result += max_freq;
            }
        }

        result
    }
}
