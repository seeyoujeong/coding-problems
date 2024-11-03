impl Solution {
    pub fn max_depth(s: String) -> i32 {
        let mut result = 0;
        let mut count = 0;

        for c in s.chars() {
            match c {
                '(' => count += 1,
                ')' => count -= 1,
                _ => (),
            };

            result = result.max(count);
        }

        result
    }
}
