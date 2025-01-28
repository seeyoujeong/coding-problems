use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut inputs = buf.split_whitespace();
    let a = inputs
        .next()
        .unwrap()
        .chars()
        .rev()
        .collect::<String>()
        .parse::<u16>()
        .unwrap();
    let b = inputs
        .next()
        .unwrap()
        .chars()
        .rev()
        .collect::<String>()
        .parse::<u16>()
        .unwrap();

    print!("{}", a.max(b));
}
