impl Solution {
    pub fn sum_of_unique(nums: Vec<i32>) -> i32 {
        use std::collections::HashMap;

        let mut count_nums = HashMap::new();

        for num in nums {
            count_nums
                .entry(num)
                .and_modify(|counter| *counter += 1)
                .or_insert(1);
        }

        count_nums
            .iter()
            .filter(|(&_k, &v)| v == 1)
            .fold(0, |acc, cur| acc + cur.0)
    }
}
