impl Solution {
    pub fn clear_digits(s: String) -> String {
        let mut stack = Vec::new();

        for c in s.chars() {
            match c.is_digit(10) {
                true => {
                    stack.pop();
                }
                false => {
                    stack.push(c);
                }
            }
        }

        stack.iter().collect::<String>()
    }
}
