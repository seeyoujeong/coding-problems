use std::io::{read_to_string, stdin};

fn main() {
    let input = read_to_string(stdin()).unwrap();
    let cases: Vec<&str> = input.trim().split("\n").collect();

    let mut output = String::new();

    for i in 1..cases.len() {
        let nums: Vec<i32> = cases[i]
            .split_whitespace()
            .map(|v| v.parse().unwrap())
            .collect();

        output.push_str(&format!("{}\n", nums[0] + nums[1]));
    }

    print!("{}", output);
}

use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.trim().split_whitespace().map(|v| v.parse().unwrap());

    let mut output = String::new();

    let t = inputs.next().unwrap();

    for _ in 0..t {
        let a = inputs.next().unwrap();
        let b = inputs.next().unwrap();

        output.push_str(&format!("{}\n", a + b));
    }

    print!("{}", output);
}
