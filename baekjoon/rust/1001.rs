use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let result: Vec<i32> = input
        .split_whitespace()
        .map(|v| v.parse().unwrap())
        .collect();

    print!("{}", result[0] - result[1]);
}
