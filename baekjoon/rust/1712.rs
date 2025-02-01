use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let inputs: Vec<u64> = buf.split_whitespace().flat_map(str::parse::<u64>).collect();
    let (a, b, c) = (inputs[0], inputs[1], inputs[2]);

    let profit = c.saturating_sub(b);

    if profit == 0 {
        print!("{}", -1);
    } else {
        print!("{}", (a / profit) + 1);
    }
}
