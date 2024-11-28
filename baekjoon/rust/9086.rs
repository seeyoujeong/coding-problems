use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace();

    let t: i32 = inputs.next().unwrap().parse().unwrap();

    let result: Vec<String> = (0..t)
        .map(|_| {
            let str: Vec<char> = inputs.next().unwrap().chars().collect();
            format!("{}{}", str.first().unwrap(), str.last().unwrap())
        })
        .collect();

    print!("{}", result.join("\n"));
}
