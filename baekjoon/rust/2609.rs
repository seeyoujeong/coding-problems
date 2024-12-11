use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut inputs = buf.split_whitespace().flat_map(str::parse::<u32>);
    let a = inputs.next().unwrap();
    let b = inputs.next().unwrap();

    let calc_gcd = |mut a: u32, mut b: u32| {
        while b != 0 {
            let temp = b;
            b = a % b;
            a = temp;
        }

        a
    };

    let gcd = calc_gcd(a, b);
    let lcm = a * b / gcd;

    print!("{}\n{}", gcd, lcm);
}
