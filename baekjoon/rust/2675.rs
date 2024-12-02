use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace();

    let t = inputs.next().unwrap().parse().unwrap();

    let mut result = Vec::new();

    for _ in 0..t {
        let r = inputs.next().unwrap().parse().unwrap();
        let s = inputs.next().unwrap();

        let mut temp = String::new();

        for c in s.chars() {
            temp = format!("{}{}", temp, c.to_string().repeat(r));
        }

        result.push(temp);
    }

    print!("{}", result.join("\n"));
}
