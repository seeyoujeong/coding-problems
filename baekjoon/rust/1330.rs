use std::cmp::Ordering;
use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let nums: Vec<i32> = input
        .split_whitespace()
        .map(|v| v.parse().unwrap())
        .collect();

    let result = match nums[0].cmp(&nums[1]) {
        Ordering::Less => "<",
        Ordering::Equal => "==",
        Ordering::Greater => ">",
    };

    print!("{}", result);
}
