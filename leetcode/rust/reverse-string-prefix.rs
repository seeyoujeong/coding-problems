impl Solution {
    pub fn reverse_prefix(s: String, k: i32) -> String {
        let k = k as usize;

        let prefix: String = s.chars().take(k).rev().collect();
        let suffix: String = s.chars().skip(k).collect();

        format!("{prefix}{suffix}")
    }
}
