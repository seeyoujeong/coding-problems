impl Solution {
    pub fn count_prefix_suffix_pairs(words: Vec<String>) -> i32 {
        let mut result = 0;

        for i in 0..words.len() {
            for j in (i + 1)..words.len() {
                if Self::is_prefix_and_suffix(&words[i], &words[j]) {
                    result += 1;
                }
            }
        }

        result
    }

    fn is_prefix_and_suffix(str1: &str, str2: &str) -> bool {
        str2.starts_with(str1) && str2.ends_with(str1)
    }
}
