impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        let mut result = 0;
        let mut count = 0;

        for c in s.chars() {
            match c {
                'L' => count += 1,
                'R' => count -= 1,
                _ => (),
            };

            if count == 0 {
                result += 1;
            }
        }

        result
    }
}
