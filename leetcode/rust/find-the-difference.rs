impl Solution {
    pub fn find_the_difference(s: String, t: String) -> char {
        let s_sum: u8 = s.as_bytes().iter().copied().sum();
        let t_sum: u8 = t.as_bytes().iter().copied().sum();

        (t_sum - s_sum) as char
    }
}
