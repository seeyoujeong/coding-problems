impl Solution {
    pub fn count_k_constraint_substrings(s: String, k: i32) -> i32 {
        let mut left = 0;
        let mut count0 = 0;
        let mut count1 = 0;
        let mut result = 0;
        let s_chars: Vec<char> = s.chars().collect();

        for right in 0..s_chars.len() {
            match s_chars[right] {
                '0' => count0 += 1,
                '1' => count1 += 1,
                _ => (),
            };

            while count0 > k && count1 > k {
                match s_chars[left] {
                    '0' => count0 -= 1,
                    '1' => count1 -= 1,
                    _ => (),
                };
                left += 1;
            }

            result += right - left + 1;
        }

        result as i32
    }
}
