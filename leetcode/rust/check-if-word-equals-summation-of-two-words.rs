impl Solution {
    pub fn is_sum_equal(first_word: String, second_word: String, target_word: String) -> bool {
        let first_num = Self::convert_word_to_num(first_word);
        let second_num = Self::convert_word_to_num(second_word);

        let target_num = Self::convert_word_to_num(target_word);

        first_num + second_num == target_num
    }

    fn convert_word_to_num(word: String) -> i32 {
        word.bytes()
            .map(|b| (b - 97).to_string())
            .collect::<String>()
            .parse()
            .unwrap()
    }
}
