use std::io::{read_to_string, stdin};

fn main() {
    let input = read_to_string(stdin()).unwrap();
    let nums: Vec<i32> = input
        .trim()
        .split_whitespace()
        .map(|v| v.parse().unwrap())
        .collect();
    let (x, y) = (nums[0], nums[1]);

    let result = match (x > 0, y > 0) {
        (true, true) => 1,
        (false, true) => 2,
        (false, false) => 3,
        (true, false) => 4,
    };

    print!("{}", result);
}
