impl Solution {
    pub fn remove_occurrences(s: String, part: String) -> String {
        let mut result = s;

        loop {
            let replaced = result.replacen(&part, "", 1);

            if result.len() == replaced.len() {
                break;
            }

            result = replaced;
        }

        result
    }
}
