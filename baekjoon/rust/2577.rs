use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut num = buf
        .split_whitespace()
        .map(|v| v.parse::<i32>().unwrap())
        .reduce(|acc, cur| acc * cur)
        .unwrap();
    let mut result = [0; 10];

    while num > 0 {
        let idx = (num % 10) as usize;
        result[idx] += 1;
        num /= 10;
    }

    for n in result {
        println!("{}", n);
    }
}
