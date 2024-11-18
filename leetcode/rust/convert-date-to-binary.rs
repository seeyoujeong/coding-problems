impl Solution {
    pub fn convert_date_to_binary(date: String) -> String {
        date.split("-")
            .map(|n| format!("{:b}", n.parse::<i32>().unwrap()))
            .collect::<Vec<String>>()
            .join("-")
    }
}
