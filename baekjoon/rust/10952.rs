use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().map(|v| v.parse::<i32>().unwrap());

    let mut output = String::new();

    loop {
        let a = inputs.next().unwrap();
        let b = inputs.next().unwrap();

        if a == 0 && b == 0 {
            break;
        }

        output.push_str(&format!("{}\n", a + b));
    }

    print!("{}", output);
}
