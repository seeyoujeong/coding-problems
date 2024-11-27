use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let inputs: Vec<i32> = buf
        .split_whitespace()
        .map(|v| v.parse::<i32>().unwrap())
        .collect();

    let mut result = Vec::new();

    for n in 1..=30 {
        if !inputs.contains(&n) {
            result.push(n.to_string());
        }

        if result.len() == 2 {
            break;
        }
    }

    print!("{}", result.join("\n"));
}
