impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        use std::collections::HashMap;

        let mut map: HashMap<i32, i32> = HashMap::new();

        for (idx, val) in nums.iter().enumerate() {
            match map.get(val) {
                Some(&i) => return vec![i, idx as i32],
                None => map.insert(target - val, idx as i32),
            };
        }

        panic!("No answer!");
    }
}
