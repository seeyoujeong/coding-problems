use std::io::stdin;

fn main() {
    let input_str = stdin().lines().skip(1).next().unwrap().unwrap();

    let mut result = 0;
    let mut current_power = 1;
    const M: u64 = 1234567891;

    for b in input_str.bytes() {
        let num = (b - b'a') as u64 + 1;
        result = (result + num * current_power) % M;
        current_power = current_power * 31 % M;
    }

    print!("{}", result);
}
