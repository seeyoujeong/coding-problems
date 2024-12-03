use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let count = buf.split_whitespace().count();

    print!("{}", count);
}
