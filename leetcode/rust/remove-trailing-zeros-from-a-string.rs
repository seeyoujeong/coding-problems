impl Solution1 {
    pub fn remove_trailing_zeros(num: String) -> String {
        let mut num_arr: Vec<char> = num.chars().collect();

        while num_arr[num_arr.len() - 1] == '0' {
            num_arr.pop();
        }

        num_arr.iter().collect()
    }
}

impl Solution2 {
    pub fn remove_trailing_zeros(num: String) -> String {
        let mut i = num.len() - 1;

        while num.chars().nth(i) == Some('0') {
            i -= 1;
        }

        num[..i + 1].to_string()
    }
}
