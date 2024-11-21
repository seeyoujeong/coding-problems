use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let nums: Vec<i32> = input
        .split_whitespace()
        .map(|v| v.parse().unwrap())
        .collect();
    let (n, m) = (nums[0], nums[1]);

    print!("{}", n.abs_diff(m));
}
