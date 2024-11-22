use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let n: i32 = input.trim().parse().unwrap();

    let mut result = 1;

    for i in 1..=n {
        result *= i;
    }

    print!("{}", result);
}
