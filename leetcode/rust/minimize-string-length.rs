impl Solution {
    pub fn minimized_string_length(s: String) -> i32 {
        let mut result: Vec<char> = s.chars().collect();
        result.sort();
        result.dedup();

        result.len() as i32
    }
}
