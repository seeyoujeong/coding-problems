use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.trim().lines();

    let n = inputs.next().unwrap().parse::<u32>().unwrap();
    let size = inputs
        .next()
        .unwrap()
        .split_whitespace()
        .flat_map(str::parse::<u32>)
        .collect::<Vec<_>>();
    let bundle = inputs
        .next()
        .unwrap()
        .split_whitespace()
        .flat_map(str::parse::<u32>)
        .collect::<Vec<_>>();
    let [t, p] = bundle[..] else {
        panic!("wrong");
    };

    let t_count = size.iter().fold(0, |acc, cur| acc + cur.div_ceil(t));
    let p_count = (n / p, n % p);

    println!("{}", t_count);
    print!("{} {}", p_count.0, p_count.1);
}
