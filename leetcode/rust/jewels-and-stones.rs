impl Solution {
    pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
        use std::collections::HashSet;

        let mut result = 0;
        let set: HashSet<char> = jewels.chars().collect();

        for stone in stones.chars() {
            if set.contains(&stone) {
                result += 1;
            }
        }

        result
    }
}
