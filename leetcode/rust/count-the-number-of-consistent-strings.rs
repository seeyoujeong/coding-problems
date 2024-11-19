impl Solution1 {
    pub fn count_consistent_strings(allowed: String, words: Vec<String>) -> i32 {
        use std::collections::HashSet;

        let mut result = 0;
        let set: HashSet<char> = allowed.chars().collect();

        for word in words {
            let mut is_allowed = true;

            for c in word.chars() {
                if !set.contains(&c) {
                    is_allowed = false;
                    break;
                }
            }

            if is_allowed {
                result += 1;
            }
        }

        result
    }
}

impl Solution2 {
    pub fn count_consistent_strings(allowed: String, words: Vec<String>) -> i32 {
        use std::collections::HashSet;

        let mut result = 0;
        let set: HashSet<char> = allowed.chars().collect();

        for word in words {
            if word.chars().all(|c| set.contains(&c)) {
                result += 1;
            }
        }

        result
    }
}
