impl Solution {
    pub fn find_words_containing(words: Vec<String>, x: char) -> Vec<i32> {
        let mut result = Vec::new();

        for (idx, word) in words.iter().enumerate() {
            if word.contains(x) {
                result.push(idx as i32);
            }
        }

        result
    }
}
