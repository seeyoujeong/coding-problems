use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();
    let parts: Vec<&str> = buf.split_whitespace().collect();

    let n = parts[0];
    let b: u32 = parts[1].parse().unwrap();

    let result = u32::from_str_radix(n, b).unwrap();

    println!("{}", result);
}
