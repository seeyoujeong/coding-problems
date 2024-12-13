impl Solution {
    pub fn partition_labels(s: String) -> Vec<i32> {
        let mut result = Vec::new();
        let s_chars: Vec<char> = s.chars().collect();
        let mut left = 0;
        let mut right = 0;

        for (i, letter) in s_chars.iter().enumerate() {
            let cur_right = s_chars.iter().rposition(|c| c == letter).unwrap();

            if cur_right > right {
                right = cur_right;
            }

            if i == right {
                result.push((right - left + 1) as i32);
                left = right + 1;
            }
        }

        result
    }
}
