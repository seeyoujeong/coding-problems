impl Solution {
    pub fn min_steps(s: String, t: String) -> i32 {
        let mut count = vec![0; 26];

        for (s_char, t_char) in s.chars().zip(t.chars()) {
            let s_idx = (s_char as i32 - 97) as usize;
            let t_idx = (t_char as i32 - 97) as usize;

            count[t_idx] += 1;
            count[s_idx] -= 1;
        }

        count.into_iter().filter(|&n| n > 0).sum()
    }
}
