use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let inputs: Vec<u32> = buf.split_whitespace().flat_map(str::parse::<u32>).collect();

    let mut k = inputs[1];
    let coins = &inputs[2..];

    let result = coins.iter().rev().fold(0, |acc, &cur| {
        let count = k / cur;
        k %= cur;

        acc + count
    });

    print!("{}", result);
}
