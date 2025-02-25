use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines().skip(1);

    let mut output = BufWriter::new(stdout());

    while let Some(Ok(line)) = lines.next() {
        let mut inputs = line.split_whitespace().flat_map(str::parse::<usize>);
        let a = inputs.next().unwrap() % 10;
        let b = inputs.next().unwrap();

        let mut cycle = Vec::new();
        let mut num = a;

        while !cycle.contains(&num) {
            cycle.push(num);
            num = (num * a) % 10;
        }

        let idx = (b - 1) % cycle.len();
        let last_digit = if cycle[idx] == 0 { 10 } else { cycle[idx] };

        writeln!(output, "{}", last_digit).unwrap();
    }
}
