impl Solution {
    pub fn min_length(s: String) -> i32 {
        let mut result = Vec::new();

        for c in s.chars() {
            if let Some(&last) = result.last() {
                if last == 'A' && c == 'B' {
                    result.pop();
                    continue;
                } else if (last == 'C' && c == 'D') {
                    result.pop();
                    continue;
                }
            }

            result.push(c);
        }

        result.len() as i32
    }
}
