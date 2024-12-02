use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().map(|v| v.parse::<usize>().unwrap());

    let t = inputs.next().unwrap();

    let mut result = Vec::new();

    for _ in 0..t {
        let h = inputs.next().unwrap();
        inputs.next().unwrap();
        let n = inputs.next().unwrap();

        let y = if n % h == 0 { h } else { n % h };
        let x = n.div_ceil(h);

        result.push(format!("{}{:02}", y, x));
    }

    print!("{}", result.join("\n"));
}
