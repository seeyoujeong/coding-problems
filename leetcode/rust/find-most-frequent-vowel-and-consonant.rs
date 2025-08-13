impl Solution {
    pub fn max_freq_sum(s: String) -> i32 {
        use std::collections::HashMap;

        let mut map = HashMap::new();

        for c in s.chars() {
            map.entry(c)
                .and_modify(|counter| *counter += 1)
                .or_insert(1);
        }

        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let mut max_vowel_count = 0;
        let mut max_consonant_count = 0;

        for (key, val) in map {
            if vowels.contains(&key) {
                max_vowel_count = max_vowel_count.max(val);
            } else {
                max_consonant_count = max_consonant_count.max(val);
            }
        }

        max_vowel_count + max_consonant_count
    }
}
