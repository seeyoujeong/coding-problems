impl Solution {
    pub fn reverse_degree(s: String) -> i32 {
        s.bytes()
            .enumerate()
            .map(|(idx, b)| (b'z' + 1 - b) as i32 * (idx + 1) as i32)
            .sum()
    }
}
