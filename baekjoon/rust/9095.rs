use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let inputs: Vec<usize> = buf
        .split_whitespace()
        .skip(1)
        .flat_map(str::parse)
        .collect();
    let max = inputs.iter().max().unwrap();

    let mut dp = vec![0; max + 1];
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for i in 4..dp.len() {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    for num in inputs {
        println!("{}", dp[num]);
    }
}
