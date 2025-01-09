use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let x: u8 = buf.trim().parse().unwrap();

    let result = format!("{:b}", x).chars().filter(|&c| c == '1').count();

    print!("{}", result);
}
