use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let inputs: Vec<i32> = buf.split_whitespace().map(|v| v.parse().unwrap()).collect();
    let sum = inputs.into_iter().fold(0, |acc, cur| acc + cur * cur);

    print!("{}", sum % 10);
}
