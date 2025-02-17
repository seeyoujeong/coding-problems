use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut change = 1000 - buf.trim().parse::<u16>().unwrap();
    let coins = [500, 100, 50, 10, 5, 1];

    let mut result = 0;

    for coin in coins {
        result += change / coin;
        change %= coin;
    }

    print!("{}", result);
}
