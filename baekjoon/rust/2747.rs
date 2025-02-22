use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: usize = buf.trim().parse().unwrap();

    let mut cache = [0; 46];
    cache[1] = 1;

    for i in 2..=n {
        cache[i] = cache[i - 1] + cache[i - 2];
    }

    let result = cache[n];

    print!("{}", result);
}
