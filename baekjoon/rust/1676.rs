use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: u16 = buf.trim().parse().unwrap();

    let mut result = 0;
    let mut i = 5;

    while n >= i {
        result += n / i;
        i *= 5;
    }

    println!("{}", result);
}
