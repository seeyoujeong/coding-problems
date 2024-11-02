impl Solution {
    pub fn remove_outer_parentheses(s: String) -> String {
        let mut result = String::new();
        let mut count = 0;

        for c in s.chars() {
            if c == '(' {
                if count > 0 {
                    result.push(c);
                }

                count += 1;
            } else {
                count -= 1;

                if count > 0 {
                    result.push(c);
                }
            }
        }

        result
    }
}
