impl Solution {
    pub fn score_of_string(s: String) -> i32 {
        let mut result = 0;
        let s_bytes = s.into_bytes();

        for i in 1..s_bytes.len() {
            result += s_bytes[i].abs_diff(s_bytes[i - 1]) as i32;
        }

        result
    }
}
