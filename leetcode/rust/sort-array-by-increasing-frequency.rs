impl Solution {
    pub fn frequency_sort(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashMap;

        let mut map = HashMap::new();

        for num in nums.iter() {
            map.entry(num)
                .and_modify(|counter| *counter += 1)
                .or_insert(1);
        }

        let mut result = nums.clone();

        result.sort_by(|a, b| {
            let count_a = map.get(a).unwrap();
            let count_b = map.get(b).unwrap();

            if count_a == count_b {
                b.cmp(a)
            } else {
                count_a.cmp(count_b)
            }
        });

        result
    }
}
