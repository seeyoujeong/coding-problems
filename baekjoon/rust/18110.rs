use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().flat_map(str::parse::<u32>);
    let n = inputs.next().unwrap() as usize;
    let mut nums: Vec<_> = inputs.collect();

    if n == 0 {
        print!("0");
        return;
    }

    nums.sort_unstable();

    let trim_count = ((n as f64) * 0.15).round() as usize;
    let sum: u32 = nums[trim_count..(n - trim_count)].iter().sum();

    let result = ((sum as f64) / (n - trim_count * 2) as f64).round();

    print!("{}", result);
}
