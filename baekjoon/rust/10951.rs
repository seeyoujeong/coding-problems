use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let inputs: Vec<&str> = buf.trim().split("\n").collect();

    let mut result = Vec::new();

    for input in inputs {
        let nums: Vec<i32> = input
            .split_whitespace()
            .map(|v| v.parse().unwrap())
            .collect();
        let (a, b) = (nums[0], nums[1]);

        result.push(format!("{}", a + b));
    }

    print!("{}", result.join("\n"));
}
