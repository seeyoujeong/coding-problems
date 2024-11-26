use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().map(|v| v.parse::<i32>().unwrap());

    inputs.next().unwrap();
    let v = inputs.next_back().unwrap();

    let result = inputs.filter(|&num| num == v).count();

    print!("{}", result);
}
