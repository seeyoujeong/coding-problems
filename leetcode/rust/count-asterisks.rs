impl Solution1 {
    pub fn count_asterisks(s: String) -> i32 {
        let splited: Vec<&str> = s.split("|").collect();
        let filtered: Vec<&str> = splited
            .iter()
            .enumerate()
            .filter(|(idx, _)| idx % 2 == 0)
            .map(|val| *val.1)
            .collect();

        filtered.iter().fold(0, |acc, cur| {
            acc + cur.chars().filter(|&c| c == '*').count()
        }) as i32
    }
}

impl Solution2 {
    pub fn count_asterisks(s: String) -> i32 {
        let mut result = 0;
        let mut is_pair = false;

        for c in s.chars() {
            match c {
                '|' => is_pair = !is_pair,
                '*' if !is_pair => result += 1,
                _ => (),
            };
        }

        result
    }
}
