impl Solution {
    pub fn is_acronym(words: Vec<String>, s: String) -> bool {
        let mut result = String::new();

        for word in words {
            result.push(word.chars().next().unwrap());
        }

        result == s
    }
}
