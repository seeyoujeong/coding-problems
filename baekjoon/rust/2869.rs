use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut inputs = buf.split_whitespace().flat_map(str::parse::<u32>);
    let a = inputs.next().unwrap();
    let b = inputs.next().unwrap();
    let v = inputs.next().unwrap();

    print!("{}", (v - a).div_ceil(a - b) + 1);
}
