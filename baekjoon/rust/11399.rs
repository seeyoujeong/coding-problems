use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs: Vec<_> = buf
        .split_whitespace()
        .skip(1)
        .flat_map(str::parse::<u32>)
        .collect();

    inputs.sort();

    let mut result = 0;
    let mut acc = 0;

    for num in inputs {
        acc += num;
        result += acc;
    }

    print!("{}", result);
}
