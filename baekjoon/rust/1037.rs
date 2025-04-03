use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let nums: Vec<u32> = buf
        .split_whitespace()
        .skip(1)
        .flat_map(str::parse::<u32>)
        .collect();
    let min_num = nums.iter().min().unwrap();
    let max_num = nums.iter().max().unwrap();

    let result = min_num * max_num;

    print!("{}", result);
}
