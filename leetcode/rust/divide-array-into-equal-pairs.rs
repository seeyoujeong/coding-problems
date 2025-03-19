impl Solution {
    pub fn divide_array(nums: Vec<i32>) -> bool {
        use std::collections::HashSet;

        let mut set = HashSet::new();

        for num in nums {
            if !set.remove(&num) {
                set.insert(num);
            }
        }

        set.is_empty()
    }
}
