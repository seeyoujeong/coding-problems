impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        n > 0 && (n as f32).log2() % 2.0 == 0.0
    }
}
