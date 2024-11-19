use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let nums: Vec<i64> = input
        .split_whitespace()
        .map(|v| v.parse().unwrap())
        .collect();

    print!("{}", nums[0] + nums[1] + nums[2]);
}
