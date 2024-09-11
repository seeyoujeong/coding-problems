impl Solution1 {
    pub fn reverse_vowels(s: String) -> String {
        use std::collections::HashSet;

        let set = HashSet::from(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        let mut s_arr: Vec<char> = s.chars().collect();
        let mut left = 0;
        let mut right = s.len() - 1;

        while left < right {
            if set.contains(&s_arr[left]) && set.contains(&s_arr[right]) {
                (s_arr[left], s_arr[right]) = (s_arr[right], s_arr[left]);
                left += 1;
                right -= 1;
            } else if !set.contains(&s_arr[left]) && set.contains(&s_arr[right]) {
                left += 1;
            } else if set.contains(&s_arr[left]) && !set.contains(&s_arr[right]) {
                right -= 1;
            } else {
                left += 1;
                right -= 1;
            }
        }

        s_arr.into_iter().collect::<String>()
    }
}

impl Solution2 {
    pub fn reverse_vowels(s: String) -> String {
        let all_vowels = "aeuioAEUIO";
        let mut vowels_in_s: String = s.chars().filter(|&c| all_vowels.contains(c)).collect();

        s.chars()
            .map(|c| {
                if all_vowels.contains(c) {
                    vowels_in_s.pop().unwrap()
                } else {
                    c
                }
            })
            .collect()
    }
}
