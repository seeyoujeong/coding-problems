impl Solution {
    pub fn are_occurrences_equal(s: String) -> bool {
        use std::collections::HashMap;

        let mut count_char = HashMap::new();

        for c in s.chars() {
            count_char
                .entry(c)
                .and_modify(|counter| *counter += 1)
                .or_insert(1);
        }

        let mut counts: Vec<&i32> = count_char.values().collect();

        counts.dedup();

        counts.len() == 1
    }
}
