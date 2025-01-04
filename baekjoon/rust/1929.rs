use std::fmt::Write;
use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut inputs = buf.split_whitespace().flat_map(str::parse::<usize>);
    let m = inputs.next().unwrap();
    let n = inputs.next().unwrap();

    let mut is_prime = vec![true; n + 1];

    is_prime[0] = false;
    is_prime[1] = false;

    let mut i = 2;

    while i * i <= n {
        if is_prime[i] {
            for j in ((i * i)..=n).step_by(i) {
                is_prime[j] = false;
            }
        }

        i += 1;
    }

    let mut result = String::new();

    for i in m..=n {
        if is_prime[i] {
            writeln!(result, "{}", i).unwrap();
        }
    }

    print!("{}", result);
}
