use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs: Vec<_> = buf
        .split_whitespace()
        .skip(1)
        .flat_map(str::parse::<i32>)
        .collect();

    inputs.sort_unstable();

    let result: Vec<String> = inputs.iter().map(|num| num.to_string()).collect();

    print!("{}", result.join("\n"));
}

use std::fmt::Write;

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs: Vec<i32> = buf
        .split_whitespace()
        .skip(1)
        .flat_map(str::parse::<i32>)
        .collect();
    inputs.sort_unstable();

    let mut output = String::new();

    inputs.iter().for_each(|x| {
        write!(output, "{x}\n").unwrap();
    });
    print!("{}", output);
}
