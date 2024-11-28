use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace();
    let word: Vec<char> = inputs.next().unwrap().chars().collect();
    let i = inputs.next().unwrap().parse::<i32>().unwrap() - 1;

    print!("{}", word[i]);
}
