impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let converted: String = s
            .to_lowercase()
            .chars()
            .filter(|c| c.is_alphanumeric())
            .collect();

        converted.chars().rev().eq(converted.chars())
    }
}
