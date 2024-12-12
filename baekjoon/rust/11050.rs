use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut inputs = buf.split_whitespace().flat_map(str::parse::<u32>);
    let n = inputs.next().unwrap();
    let k = inputs.next().unwrap();

    let facto = |num: u32| {
        let mut result = 1;

        for i in 1..=num {
            result *= i;
        }

        result
    };

    print!("{}", facto(n) / (facto(n - k) * facto(k)));
}
