impl Solution {
    pub fn find_lhs(nums: Vec<i32>) -> i32 {
        use std::collections::HashMap;

        let mut map = HashMap::new();
        let mut result = 0;

        for num in nums.into_iter() {
            match map.get(&num) {
                Some(&count) => map.insert(num, count + 1),
                None => map.insert(num, 1),
            };
        }

        for (key, val) in map.iter() {
            if map.contains_key(&(key + 1)) {
                result = result.max(val + map.get(&(key + 1)).unwrap());
            }
        }

        result
    }
}
