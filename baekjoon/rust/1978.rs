use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let result = buf
        .split_whitespace()
        .skip(1)
        .filter_map(|s| s.parse::<u32>().ok())
        .filter(|&n| is_prime(n))
        .count();

    print!("{}", result);
}

fn is_prime(num: u32) -> bool {
    match num {
        0 | 1 => false,
        2 => true,
        n if n % 2 == 0 => false,
        n => (3..=((n as f32).sqrt() as u32))
            .step_by(2)
            .all(|i| n % i != 0),
    }
}
