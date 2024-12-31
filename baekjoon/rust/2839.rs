use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut n: u16 = buf.trim().parse().unwrap();

    let mut count = 0;

    while (n >= 3) {
        match n % 5 == 0 {
            true => {
                count += 1;
                n -= 5;
            }
            false => {
                count += 1;
                n -= 3;
            }
        }
    }

    let result = if n == 0 { count } else { -1 };

    print!("{}", result);
}
