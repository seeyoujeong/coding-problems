impl Solution {
    pub fn final_string(s: String) -> String {
        let mut result = Vec::new();

        for c in s.chars() {
            if c == 'i' {
                result.reverse();
            } else {
                result.push(c.to_string());
            }
        }

        result.join("")
    }
}
