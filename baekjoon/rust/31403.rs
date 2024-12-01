use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let inputs: Vec<i32> = buf.split_whitespace().map(|v| v.parse().unwrap()).collect();
    let (a, b, c) = (inputs[0], inputs[1], inputs[2]);

    println!("{}", a + b - c);
    print!("{}", format!("{}{}", a, b).parse::<i32>().unwrap() - c);
}
