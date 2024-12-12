impl Solution {
    pub fn minimum_chairs(s: String) -> i32 {
        let mut result = 0;
        let mut count = 0;

        for state in s.chars() {
            if state == 'E' {
                count += 1;
                result = result.max(count);
            } else if state == 'L' {
                count -= 1;
            }
        }

        result
    }
}
