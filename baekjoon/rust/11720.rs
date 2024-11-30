use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.trim().split("\n");

    inputs.next().unwrap();

    let result = inputs
        .next()
        .unwrap()
        .chars()
        .fold(0, |acc, cur| acc + cur.to_digit(10).unwrap());

    print!("{}", result);
}
