use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: u32 = buf.trim().parse().unwrap();
    let mut acc = 1;
    let mut result = 1;

    while acc < n {
        acc += 6 * result;
        result += 1;
    }

    print!("{}", result);
}
