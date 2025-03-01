use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let result = i32::from_str_radix(buf.trim(), 16).unwrap();

    print!("{}", result);
}
