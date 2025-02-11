use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut nums: Vec<u16> = buf.split_whitespace().flat_map(str::parse::<u16>).collect();

    nums.sort_unstable();

    let avg = nums.iter().sum::<u16>() / 5;
    let mid = nums[2];

    println!("{}", avg);
    print!("{}", mid);
}
