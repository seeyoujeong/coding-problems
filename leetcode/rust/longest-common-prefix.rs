impl Solution1 {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        let mut result = strs[0].clone();

        for s in strs.iter() {
            while !s.starts_with(&result) {
                result = result[..result.len() - 1].to_string();
            }
        }

        result
    }
}

impl Solution2 {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        strs.into_iter()
            .reduce(|acc, cur| {
                acc.chars()
                    .zip(cur.chars())
                    .take_while(|(a, c)| a == c)
                    .map(|(a, _)| a)
                    .collect()
            })
            .unwrap()
    }
}
