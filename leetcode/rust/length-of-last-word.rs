impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let s_vec: Vec<_> = s.split_whitespace().collect();

        s_vec.last().unwrap().len() as i32
    }
}
