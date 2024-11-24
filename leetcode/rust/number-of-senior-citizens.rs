impl Solution1 {
    pub fn count_seniors(details: Vec<String>) -> i32 {
        let mut result = 0;

        for detail in details {
            let detail: Vec<char> = detail.chars().collect();
            let age: i32 = format!("{}{}", detail[11], detail[12]).parse().unwrap();

            if age > 60 {
                result += 1;
            }
        }

        result
    }
}

impl Solution2 {
    pub fn count_seniors(details: Vec<String>) -> i32 {
        details
            .iter()
            .filter(|detail| {
                let age = detail[11..=12].parse::<i32>().unwrap();
                age > 60
            })
            .count() as _
    }
}
