impl Solution {
    pub fn count_key_changes(s: String) -> i32 {
        let mut result = 0;
        let lower_s: Vec<char> = s.to_lowercase().chars().collect();

        for i in 0..(lower_s.len() - 1) {
            if (lower_s[i] != lower_s[i + 1]) {
                result += 1;
            }
        }

        result
    }
}
