impl Solution1 {
    pub fn first_uniq_char(s: String) -> i32 {
        use std::collections::HashMap;

        let mut map = HashMap::new();

        for c in s.chars() {
            match map.get(&c) {
                Some(&n) => map.insert(c, n + 1),
                None => map.insert(c, 1),
            };
        }

        for (idx, val) in s.char_indices() {
            if *map.get(&val).unwrap() == 1 {
                return idx as i32;
            }
        }

        -1
    }
}

impl Solution2 {
    pub fn first_uniq_char(s: String) -> i32 {
        let mut cnt = [0; 256];

        for &c in s.as_bytes() {
            cnt[c as usize] += 1;
        }

        for (i, &b) in s.as_bytes().iter().enumerate() {
            if cnt[b as usize] == 1 {
                return i as i32;
            }
        }

        -1
    }
}
