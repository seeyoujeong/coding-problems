use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let n = input.trim().parse::<usize>().unwrap();

    let mut num_list = [0; 10001];

    for _ in 0..n {
        input.clear();
        stdin().read_line(&mut input).unwrap();

        let num: usize = input.trim().parse().unwrap();
        num_list[num] += 1;
    }

    let mut output = BufWriter::with_capacity(10_000_000, stdout());

    for i in 1..=10000 {
        if num_list[i] > 0 {
            for _ in 0..num_list[i] {
                writeln!(output, "{}", i).unwrap();
            }
        }
    }
}
