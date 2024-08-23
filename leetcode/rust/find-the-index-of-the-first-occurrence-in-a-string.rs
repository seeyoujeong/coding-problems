impl Solution1 {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        for i in 0..haystack.len() {
            let sliced = &haystack[i..];

            if sliced.starts_with(&needle) {
                return i as i32;
            }
        }

        -1
    }
}

impl Solution2 {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        if let Some(index) = haystack.find(&needle) {
            index as i32
        } else {
            -1
        }
    }
}
