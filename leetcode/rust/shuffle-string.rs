impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        let mut result = vec![' '; s.len()];

        for (&i, c) in indices.iter().zip(s.chars()) {
            result[i as usize] = c;
        }

        result.iter().collect()
    }
}
