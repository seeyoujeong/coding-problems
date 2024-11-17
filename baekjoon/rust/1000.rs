use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let result = input
        .split_whitespace()
        .fold(0, |acc, cur| acc + cur.parse::<i32>().unwrap());

    print!("{}", result);
}
