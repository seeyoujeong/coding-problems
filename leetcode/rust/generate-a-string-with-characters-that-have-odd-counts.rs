impl Solution {
    pub fn generate_the_string(n: i32) -> String {
        if n % 2 != 0 {
            "a".repeat(n as usize)
        } else {
            format!("a{}", "b".repeat((n - 1) as usize))
        }
    }
}
