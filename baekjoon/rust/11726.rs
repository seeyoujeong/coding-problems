use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: usize = buf.trim().parse().unwrap();

    let mut prev2 = 1;
    let mut prev1 = 2;
    let mut result = 0;

    if n == 1 {
        result = prev2;
    } else if n == 2 {
        result = prev1;
    } else {
        for _ in 3..=n {
            result = (prev1 + prev2) % 10007;
            prev2 = prev1;
            prev1 = result;
        }
    }

    print!("{}", result);
}
