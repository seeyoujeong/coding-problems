impl Solution1 {
    pub fn split_words_by_separator(words: Vec<String>, separator: char) -> Vec<String> {
        let mut result = Vec::new();

        for word in words {
            for w in word.split(separator) {
                let str_w = w.to_string();

                if str_w.len() > 0 {
                    result.push(str_w);
                }
            }
        }

        result
    }
}

impl Solution2 {
    pub fn split_words_by_separator(words: Vec<String>, separator: char) -> Vec<String> {
        let sep = separator.to_string();
        words
            .into_iter()
            .flat_map(|v| {
                v.split(&sep)
                    .map(|v| v.to_string())
                    .filter(|v| !v.is_empty())
                    .collect::<Vec<_>>()
            })
            .collect::<Vec<_>>()
    }
}
