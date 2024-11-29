use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut inputs = buf.split_whitespace().map(|v| v.parse::<i64>().unwrap());
    let a = inputs.next().unwrap();
    let b = inputs.next().unwrap();

    print!("{}", (a + b) * (a - b));
}
